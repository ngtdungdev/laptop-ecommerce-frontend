import styles from "./UpdateProduct.module.scss"
import classNames from "classnames/bind";
import search from "../../../../assets/images/search.svg";
import component from "../../../../layouts/component.module.scss";
import Combobox from "../../../../components/Combobox";
import {useEffect, useState} from "react";
import laptopTest from "../../../../assets/images/laptopTest.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight ,faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import GroupBox from "../../../../components/GroupBox";
import image from "../../../../assets/images/imageIcon.svg";
import UpdateNotification from "./UpdateNotification";
import Notification from "../../../../components/Notification";
const UpdateProduct = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [listCategory, setListCategory] = useState(['Lap Top', 'Chuột', 'Bàn Phím', 'Tai nghe']);
    const [clickButton, setClickButton] = useState(0);
    const comboboxStyle = {
        width: '4rem',
        height: '2rem'
    };
    const handleCategory = () => {

    }
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const renderButtonBasedOnOption = () => {
        const SelectedButton = optionButtons[clickButton];
        return SelectedButton ? <SelectedButton/> : null;
    };
    const handleBtnNotification = () => {

    }
    const optionButtons = {
        0: null,
        1: () => (
            <div className={cx("notification-container")}>
                <div className={cx("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cx("ui-notification-container")}>
                    <UpdateNotification />
                </div>
            </div>
        ),
        2: () => (
            <div className={cx("notification-container")}>
                <div className={cx("ui-background")} onClick={() => handleClickButton(0)}></div>
                <Notification text={"Bạn có chắc chắn muốn xóa sản phẩm"} type={"warning"}
                                  handleBtnNotification={handleBtnNotification}/>
            </div>
        )
    };
    return (
        <div className={cx("updateProduct-container")}>
            {renderButtonBasedOnOption()}
            <div className={cx("top-container")}>
                <div className={cx("ui-search", "ui-option")}>
                    <div className={`${cx("next-input")} ${cd("next-input")}`}>
                        <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                            <input className={`${cx("input")} ${cd("input")}`} placeholder={"Search"}/>
                            <div className={cx("ui-icon")}>
                                <img src={search} alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Combobox listItem={listCategory} styleCombobox={comboboxStyle} handleSelect={handleCategory}
                          isComboboxUI={true}/>
            </div>
            <div className={cx("bottom-container")}>
                <div className={cx("ui-container")}>
                    <div className={cx("ui-table")}>
                        <table className={cx("table-container")}>
                            <thead>
                            <tr>
                                <th>TT</th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Thể loại</th>
                                <th>Hãng sản xuất</th>
                                <th>Giới thiệu</th>
                                <th>Giá tiền</th>
                                <th>Số lượng</th>
                                <th>Trưng bày</th>
                                <th>Cập nhật</th>
                                <th>Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>1</td>
                                <td className={cx("id")}>P0001</td>
                                <td className={cx("name")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("category")}>LapTop</td>
                                <td className={cx("producer")}>Dell</td>
                                <td className={cx("intro")}>LapTop</td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>100</td>
                                <td className={cx("display")}>Có</td>
                                <td className={cx("update")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}
                                            onClick={() => handleClickButton(1)}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                </td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}
                                            onClick={() => handleClickButton(2)}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>2</td>
                                <td className={cx("id")}>P0001</td>
                                <td className={cx("name")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("category")}>LapTop</td>
                                <td className={cx("producer")}>Dell</td>
                                <td className={cx("intro")}>LapTop</td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>100</td>
                                <td className={cx("display")}>Có</td>
                                <td className={cx("update")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                </td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>3</td>
                                <td className={cx("id")}>P0001</td>
                                <td className={cx("name")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("category")}>LapTop</td>
                                <td className={cx("producer")}>Dell</td>
                                <td className={cx("intro")}>LapTop</td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>100</td>
                                <td className={cx("display")}>Có</td>
                                <td className={cx("update")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                </td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>4</td>
                                <td className={cx("id")}>P0001</td>
                                <td className={cx("name")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("category")}>LapTop</td>
                                <td className={cx("producer")}>Dell</td>
                                <td className={cx("intro")}>LapTop</td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>100</td>
                                <td className={cx("display")}>Có</td>
                                <td className={cx("update")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                </td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>5</td>
                                <td className={cx("id")}>P0001</td>
                                <td className={cx("name")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("category")}>LapTop</td>
                                <td className={cx("producer")}>Dell</td>
                                <td className={cx("intro")}>LapTop</td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>100</td>
                                <td className={cx("display")}>Có</td>
                                <td className={cx("update")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}
                                            onClick={() => handleClickButton(0)}>
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                </td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}
                                            onClick={() => handleClickButton(1)}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>

                            <tr className={cx("ui-group-box")}>
                                <td colSpan={12}>
                                    <GroupBox quantity={5}></GroupBox>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateProduct