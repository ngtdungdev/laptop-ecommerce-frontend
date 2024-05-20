import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import image from "../../../assets/images/imageIcon.svg";
import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";
import component from "../../../layouts/component.module.scss";
import Combobox from "../../../components/Combobox";
import laptopTest from "../../../assets/images/laptopTest.png";
import {formatter} from "../../../utils/currency";

const AddProductNotification = ({product}) => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const [id, setId] = useState(product.id);
    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product?.category?.name);
    const [supplier, setSupplier] = useState(product?.supplier?.name);
    const [display, setDisplay] = useState(product.display);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity !== null ? product.quantity : 1);
    const [imageSrc, setImageSrc] = useState(product.image);
    const [imageFile, setImageFile] = useState(null);
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
        }
        setImageFile(null);
        setImageSrc(image);
    };
    const handleSubmit = () => {
        // TODO
    };
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setQuantity(inputValue);
    }
    return (
        <div className={cx("ui-notification")}>
            <div className={cx("ui-title")}>
                <p>THÔNG TIN SẢN PHẨM</p>
            </div>
            <div className={cx("ui-data-product")}>
                <div className={cx("ui-data")}>
                    <div className={cx("ui-top")}>
                        <div className={cx("ui-idProduct")}>
                            <label className={cd("next-label")}>Mã sản phẩm</label>
                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                <span>{id}</span>
                            </div>
                        </div>
                        <div className={cx("ui-nameProduct")}>
                            <label className={cd("next-label")}>Tên sản phẩm</label>
                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-top-center")}>
                        <div className={cx("ui-description")}>
                            <label className={cd("next-label")}>Mô tả</label>
                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                <span>{description}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-center")}>
                        <div className={cx("ui-category")}>
                            <label className={cd("next-label")}>Thể loại</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>{category}</span>
                            </div>
                        </div>
                        <div className={cx("ui-supplier")}>
                            <label className={cd("next-label")}>Hãng sản xuất</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>{supplier}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-right")}>
                        <div className={cx("ui-image")}>
                            <label className={cd("next-label")}>Hình ảnh</label>
                            <div className={cx("")}>
                                <img src={imageSrc} alt={""} className={cx("img")}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-bottom")}>
                        <div className={cx("ui-quantity")}>
                            <label className={cd("next-label")}>Số lượng</label>
                            <input
                                inputMode="numeric"
                                type="number"
                                value={quantity}
                                onChange={handleChange}
                                step="1" size="4" min="1"
                                className={cx("input-text")}
                                spellCheck="true"
                            />
                        </div>
                        <div className={cx("ui-price")}>
                            <label className={cd("next-label")}>Giá tiền</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>{formatter.format(price)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-button")}>
                        <button className={`${cx("btn-add")} ${cd("btn")}`}>Thêm</button>
                        <button className={`${cx("btn-cancel")} ${cd("btn")}`}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddProductNotification