import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import component from "../../layouts/component.module.scss";
import defaultAvatar from "../../assets/images/default_avatar.svg";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from "../../contexts/AuthContext";

const Profile = () => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const {currentUser} = useAuth();
    const [displayName, setDisplayName] = useState(currentUser.displayName);
    const [email, setEmail] = useState(currentUser.email);
    const [phone, setPhone] = useState(currentUser.phone ?? "");
    const [birthdate, setBirthdate] = useState(currentUser.birthdate ?? "");
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(currentUser.avatar ?? defaultAvatar);
    const [option, setOption] = useState(1);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageSrc(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
        }
        setImageFile(null);
        setImageSrc(defaultAvatar);
    };
    const options = {
        1: () => (
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
                {/*<div className={cx("ui-bottom")}>*/}
                {/*    <div className={cx("ui-quantity")}>*/}
                {/*        <label className={cd("next-label")}>Số lượng</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>2</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={cx("ui-price")}>*/}
                {/*        <label className={cd("next-label")}>Giá tiền</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>10.000.000VND</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={cx("ui-total-amount")}>*/}
                {/*        <label className={cd("next-label")}>Tổng Tiền</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>20.000.000VND</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        ),
        2: () => (
            <div className={cx("ui-data")}>
                <div className={cx("ui-top")}>
                    <div className={cx("ui-idProduct")}>
                        <label className={cd("next-label")}>Tên đăng nhập</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")} value={displayName} onChange={setDisplayName}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-nameProduct")}>
                        <label className={cd("next-label")}>Email</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")} value={email} onChange={setEmail}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("ui-center")}>
                    <div className={cx("ui-category")}>
                        <label className={cd("next-label")}>Số điện thoại</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")} value={phone} onChange={setPhone}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-supplier")}>
                        <label className={cd("next-label")}>Ngày sinh</label>
                        <div className={cd("next-input")}>
                            <div className={`${cd("combined-input")}`}>
                                <input className={cd("input")} type={"date"} value={birthdate} onChange={setBirthdate}/>
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
                {/*<div className={cx("ui-bottom")}>*/}
                {/*    <div className={cx("ui-quantity")}>*/}
                {/*        <label className={cd("next-label")}>Số lượng</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>2</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={cx("ui-price")}>*/}
                {/*        <label className={cd("next-label")}>Giá tiền</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>10.000.000VND</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={cx("ui-total-amount")}>*/}
                {/*        <label className={cd("next-label")}>Tổng Tiền</label>*/}
                {/*        <div className={`${cd("panel-text")}`}>*/}
                {/*            <span>20.000.000VND</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    };
    const renderPanel = () => {
        const Panel = options[option];
        return Panel ? <Panel/> : null;
    };
    const onCLickOption = (index) => {
        setOption(index)
    }
    return (
        <div className={cx("ui-profile-container")}>
            <div className={cx("ui-profile")}>
                <div className={cx("ui-data-product")}>
                    <div className={cx("ui-data")}>
                        {renderPanel()}
                        <div className={cx("ui-button")}>
                            <button className={`${cx("btn-edit")} ${cd("btn")}`} onClick={() => onCLickOption(2)}>Chỉnh sửa</button>
                            <button className={`${cx("btn-save")} ${cd("btn")}`} onClick={() => onCLickOption(1)}>Lưu</button>
                            <button className={`${cx("btn-cancel")} ${cd("btn")}`}  onClick={() => onCLickOption(1)}>Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;