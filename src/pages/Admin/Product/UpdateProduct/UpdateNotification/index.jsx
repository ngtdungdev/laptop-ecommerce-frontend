import Combobox from "../../../../../components/Combobox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import image from "../../../../../assets/images/imageIcon.svg";
import classNames from "classnames/bind";
import styles from "./UpdateNotification.module.scss";
import component from "../../../../../layouts/component.module.scss";

const UpdateNotification = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [imageSrc, setImageSrc] = useState(image);
    const [listCategory, setListCategory] = useState(['Lap Top', 'Chuột', 'Bàn Phím', 'Tai nghe']);
    const [fileName, setFileName] = useState('Chọn file ảnh');
    const [listProducer, setListProducer] = useState(['Lenovo', 'Dell', 'Asus', 'Apple',  'Hewlett-Packard', 'Toshiba']);
    const comboboxStyle1 = {
        width: '3rem'
    };
    const comboboxStyle2 = {
        width: '10rem'
    };
    const handleSelectCategory = () => {

    }
    const handleSelectProducer = () => {

    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageSrc(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className={cx("ui-notification")}>
            <div className={cx("ui-title")}>
                <p>Thêm Sản Phẩm Mới</p>
            </div>
            <div className={cx("panel", "ui-name-product")}>
                <div className={cd("container")}>
                    <div className={cd("ui-container")}>
                        <label className={cd("next-label")}>Tên sản phẩm</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("list-combobox")}>
                <div className={cx("ui-category")}>
                    <label className={cd("next-label")}>Loại sản phẩm</label>
                    <div className={cx("category")}>
                        <Combobox listItem={listCategory} styleCombobox={comboboxStyle1}
                                  handleSelect={handleSelectCategory}
                                  isComboboxUI={false}/>
                    </div>
                </div>
                <div className={cx("ui-producer")}>
                    <label className={cd("next-label")}>Hãng sản xuất</label>
                    <div className={cx("producer")}>
                        <Combobox listItem={listProducer} styleCombobox={comboboxStyle2}
                                  handleSelect={handleSelectProducer}
                                  isComboboxUI={false}/>
                    </div>
                </div>
                <div className={cx("ui-display")}>
                    <label className={`${cx("next-label")} ${cd("next-label")}`}>Trưng bày</label>
                    <div className={cx("display")}>
                        <FontAwesomeIcon icon={faAngleLeft} className={cx("imgLeft")}/>
                        <div className={cx("is-display")}>
                            <p>Có</p>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className={cx("imgRight")}/>
                    </div>
                </div>
            </div>
            <div className={cx("panel", "ui-intro")}>
                <label className={cd("next-label")}>Giới thiệu</label>
                <textarea className={cx("text-intro")}></textarea>
            </div>
            <div className={cx("panel", "ui-price")}>
                <div className={cd("container")}>
                    <div className={cd("ui-container")}>
                        <label className={cd("next-label")}>Giá Tiển</label>
                        <div className={cd("next-input")}>
                            <div className={cd("combined-input")}>
                                <input className={cd("input")}/>
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
                        <p className={cx("name")}>{fileName}</p>
                    </div>
                    <img src={imageSrc} alt=""/>
                </div>
            </div>
            <div className={cx("panel", "ui-btnAdd")}>
                <button className={`${cx("btn-add")} ${cd("btn")}`}>Thêm sản phẩm</button>
            </div>
        </div>
    )
}
export default UpdateNotification