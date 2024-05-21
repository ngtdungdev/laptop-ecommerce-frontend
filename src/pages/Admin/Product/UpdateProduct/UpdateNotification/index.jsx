import Combobox from "../../../../../components/Combobox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import image from "../../../../../assets/images/imageIcon.svg";
import classNames from "classnames/bind";
import styles from "./UpdateNotification.module.scss";
import component from "../../../../../layouts/component.module.scss";
import {loadCategories} from "../../../../../utils/load";
import {uploadImage} from "../../../../../utils/firebase/storage";
import {useAuth} from "../../../../../contexts/AuthContext";

const UpdateNotification = ({product}) => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const {currentUser} = useAuth();
    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product.category?.name);
    const [supplier, setSupplier] = useState(product.supplier?.name);
    const [display, setDisplay] = useState(product.display);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(image);
    const [listCategory, setListCategory] = useState(null);
    const [listProducer, setListProducer] = useState([{name: 'Lenovo'}, {name: 'Dell'}, {name: 'Asus'}, {name: 'Apple'},  {name: 'Hewlett-Packard'}, {name: 'Toshiba'}]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isUpdating, setIsUpdating] = useState("");

    const handleSelectCategory = () => {
        // TODO
    };
    const handleSelectProducer = () => {
        // TODO
    };
    const handleSelectDisplay = () => {
        setDisplay(!display)
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
            setImageSrc(image);
        }
    };
    const handleSubmit = async () => {
        if (isUpdating || !validateProduct()) {
            return;
        }
        setIsUpdating(true);

        let url;
        if (imageFile === null) {
            url = null;
        } else {
            url = await uploadImage(imageFile, `products/${currentUser.id}`)
            if (url === "") {
                setErrorMessage("Không thể lưu hình ảnh. Vui lòng thử lại sau.");
                console.log(errorMessage);
                return;
            }
        }
    };

    const validateProduct = () => {

    };

    useEffect(() => {
        const loadListCategories = async() => {
            try {
                await loadCategories(setListCategory);
            } catch (error) {
                setErrorMessage("Vui lòng kiểm tra kết nối mạng");
            }
        };

        loadListCategories().then();
    }, []);

    return (
        <div className={cx("ui-notification")}>
            <div className={cx("ui-title")}>
                <p>Cập nhật sản phẩm</p>
            </div>
            <div className={cx("panel", "ui-name-product")}>
                <div className={cd("container")}>
                    <div className={cd("ui-container")}>
                        <label className={cd("next-label")}>Tên sản phẩm</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")}
                                       value={name}
                                       onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("list-combobox")}>
                <div className={cx("ui-category")}>
                    <label className={cd("next-label")}>Loại sản phẩm</label>
                    <div className={cx("category")}>
                        <Combobox listItem={[{ name: "Tất cả", id: -1 }, ...(listCategory || [])]}
                                  handleSelect={handleSelectCategory}
                                  isComboboxUI={false}/>
                    </div>
                </div>
                <div className={cx("ui-producer")}>
                    <label className={cd("next-label")}>Hãng sản xuất</label>
                    <div className={cx("producer")}>
                        <Combobox listItem={[{ name: "Tất cả", id: -1 }, ...(listProducer || [])]}
                                  handleSelect={handleSelectProducer}
                                  isComboboxUI={false}/>
                    </div>
                </div>
                <div className={cx("ui-display")}>
                    <label className={`${cx("next-label")} ${cd("next-label")}`}>Trưng bày</label>
                    <div className={cx("display")}>
                        <div className={cx("panel-arrow", "imgLeft")} onClick={handleSelectDisplay}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={cx("is-display")}>
                            <p>{ display ? "Có" : "Không"}</p>
                        </div>
                        <div className={cx("panel-arrow", "imgRight")} onClick={handleSelectDisplay}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("panel", "ui-intro")}>
                <label className={cd("next-label")}>Giới thiệu</label>
                <textarea className={cx("text-intro")} spellCheck={"false"}
                          value={description}
                          onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className={cx("panel", "ui-price")}>
                <div className={cd("container")}>
                    <div className={cd("ui-container")}>
                        <label className={cd("next-label")}>Giá Tiển</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")}
                                       value={price}
                                       onChange={e => setPrice(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("panel", "ui-btnImage")}>
                <label className={cd("next-label")}>Chọn ảnh</label>
                <div className={cx("ui-image")}>
                    <input type="file" onChange={handleImageChange} id="imageInput"
                           className={cx("btn-image")} hidden={"hidden"}/>
                    <label className={`${cx("btn")} ${cd("btn")}`} htmlFor={"imageInput"}>Chọn ảnh</label>
                    <div className={cx("ui-name")}>
                        <p className={cx("name")}>{imageFile?.name ?? 'Chọn file ảnh'}</p>
                    </div>
                    <img src={imageSrc} alt=""/>
                </div>
            </div>
            <div className={cx("panel", "ui-btnAdd")}>
                <button className={`${cx("btn-add")} ${cd("btn")}`} onClick={handleSubmit}>Cập nhật sản phẩm</button>
            </div>
        </div>
    )
}
export default UpdateNotification