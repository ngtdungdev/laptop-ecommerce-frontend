import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import component from "../../layouts/component.module.scss";
import defaultAvatar from "../../assets/images/default_avatar.svg";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../../contexts/AuthContext";
import {uploadImage} from "../../utils/firebase/storage";
import {PUT} from "../../utils/fetch";
import {apiUrl} from "../../utils/config";
import {storeTokens} from "../../utils/token";
import {saveProfile} from "../../utils/load";

const Profile = () => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const {currentUser} = useAuth();
    const [displayName, setDisplayName] = useState(currentUser?.displayName ?? "");
    const [email, setEmail] = useState(currentUser?.email ?? "");
    const [phone, setPhone] = useState(currentUser?.phone ?? "");
    const [birthdate, setBirthdate] = useState(currentUser?.birthdate ?? "");
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(currentUser?.avatar ?? defaultAvatar);
    const [option, setOption] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageSrc(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageFile(null);
            setImageSrc(defaultAvatar);
        }
    };

    const handleEditButton = () => {
        setOption(2);
    };
    const handleSaveButton = async () => {
        if (isSaving || !validateProfile()) {
            return;
        }
        setIsSaving(true);

        let url;
        if (imageFile === null) {
            url = null;
        } else {
            url = await uploadImage(imageFile, `users/${currentUser.id}`)
            if (url === "") {
                setErrorMessage("Không thể lưu hình ảnh. Vui lòng thử lại sau.");
                console.log(errorMessage);
                return;
            }
        }

        await saveProfile(currentUser.id, {
            email: email,
            displayName: displayName,
            phone: phone,
            birthdate: new Date(birthdate),
            avatar: url
        }, setErrorMessage);

        setIsSaving(false);
    };
    const handleCancelButton = () => {
        setOption(1);
    };
    const validateProfile = () => {
        if (displayName.trim().length < 3) {
            setErrorMessage("Tên tài khoản phải chứa ít nhất 3 kí tự.")
            return false;
        }
        if (currentUser.signUpMethod === "google" && email !== currentUser.email) {
            setErrorMessage("Bạn không thể đổi email vì tài khoản này được tạo thông qua Google. Vui lòng đăng nhập bằng tài khoản Google.")
            return false;
        }
        if (!email.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            setErrorMessage("Email không hợp lệ.");
            return false;
        }
        if (!phone.trim().match(/^(\+?84|0)[35789]\d{8}$/)) {
            setErrorMessage("Số điện thoại không hợp lệ.")
            return false;
        }
        try {
            let date = new Date(birthdate);
            if (birthdate.trim() === "" || date > new Date() || date.getFullYear() < new Date().getFullYear() - 100) {
                setErrorMessage("Ngày sinh không hợp lệ.");
                return false;
            }
        } catch (error) {
            setErrorMessage("Ngày sinh không hợp lệ.");
            return false;
        }
        return true;
    };
    return (
        <div className={cx("ui-profile-container")}>
            <div className={cx("ui-profile")}>
                <div className={cx("ui-data-product")}>
                    <div className={cx("ui-data")}>
                        {
                            option === 1
                                ?
                                <div className={cx("ui-data")}>
                                    <div className={cx("ui-top")}>
                                        <div className={cx("ui-idProduct")}>
                                            <label className={cd("next-label")}>Tên đăng nhập</label>
                                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                                <span>{currentUser.displayName}</span>
                                            </div>
                                        </div>
                                        <div className={cx("ui-nameProduct")}>
                                            <label className={cd("next-label")}>Email</label>
                                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                                <span>{currentUser.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("ui-center")}>
                                        <div className={cx("ui-category")}>
                                            <label className={cd("next-label")}>Số điện thoại</label>
                                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                                <span>{currentUser.phone}</span>
                                            </div>
                                        </div>
                                        <div className={cx("ui-supplier")}>
                                            <label className={cd("next-label")}>Ngày sinh</label>
                                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                                <span>{currentUser.birthdate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("ui-right")}>
                                        <div className={cx("ui-image")}>
                                            <label className={cd("next-label")}>Hình ảnh</label>
                                            <div className={cx("img-background")}>
                                                <img src={currentUser.avatar} alt={""} className={cx("img")}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className={cx("ui-data")}>
                                    <div className={cx("ui-top")}>
                                        <div className={cx("ui-idProduct")}>
                                            <label className={cd("next-label")}>Tên đăng nhập</label>
                                            <div className={cd("next-input")}>
                                                <div className={cd("combined-input")}>
                                                    <input className={cd("input")} value={displayName} onChange={handleDisplayNameChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        {currentUser.signUpMethod === "google"
                                            ?
                                            // TODO: thêm thông báo cho user biết tài khoản được tạo thông qua Google nên không thể đổi email
                                            <div className={cx("ui-nameProduct")}>
                                                <label className={cd("next-label")}>Email</label>
                                                <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                                    <span>{currentUser.email}</span>
                                                </div>
                                            </div>
                                            :
                                            <div className={cx("ui-nameProduct")}>
                                                <label className={cd("next-label")}>Email</label>
                                                <div className={cd("next-input")}>
                                                    <div className={cd("combined-input")}>
                                                        <input className={cd("input")} value={email} onChange={handleEmailChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className={cx("ui-center")}>
                                        <div className={cx("ui-category")}>
                                            <label className={cd("next-label")}>Số điện thoại</label>
                                            <div className={cd("next-input")}>
                                                <div className={cd("combined-input")}>
                                                    <input className={cd("input")} value={phone} onChange={handlePhoneChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx("ui-supplier")}>
                                            <label className={cd("next-label")}>Ngày sinh</label>
                                            <div className={cd("next-input")}>
                                                <div className={`${cd("combined-input")}`}>
                                                    <input className={cd("input")} type={"date"} value={birthdate} onChange={handleBirthdateChange}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("ui-right")}>
                                        <div className={cx("ui-image")}>
                                            <label className={cd("next-label")}>Hình ảnh</label>
                                            <div className={cx("img-background")}>
                                                <img src={imageSrc} alt={""} className={cx("img")}/>
                                                <div className={cx("ui-btn")}>
                                                    <input type="file" onChange={handleImageChange} id="imageInput"
                                                           className={cx("btn-image")} hidden={"hidden"}/>
                                                    <label className={`${cx("btn")} ${cd("btn")}`} htmlFor={"imageInput"}>
                                                        <FontAwesomeIcon icon={faImage}/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                        {errorMessage}
                        <div className={cx("ui-button")}>
                            <button className={`${cx("btn-edit")} ${cd("btn")}`} onClick={handleEditButton}
                                    style={option === 2 ? {display: 'none'} : {}}>Chỉnh sửa
                            </button>
                            <button className={`${cx("btn-save")} ${cd("btn")}`} onClick={handleSaveButton}
                                    style={option === 1 ? {display: 'none'} : {}}>
                                {isSaving
                                    ?
                                    <div className={`${cx("loader")}`}></div>
                                    :
                                    "Lưu"
                                }
                            </button>
                            <button className={`${cx("btn-cancel")} ${cd("btn")}`} onClick={handleCancelButton}
                                    style={option === 1 ? {display: 'none'} : {}}>Hủy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;