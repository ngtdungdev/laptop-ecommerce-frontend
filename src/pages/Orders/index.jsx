import laptopTest from "../../assets/images/laptopTest.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
import component from "../../layouts/component.module.scss";
import {useState} from "react";
import delivery from "../../assets/images/receive-application.svg";

const Orders = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [numberValues, setNumberValues] = useState(1);
    const handleClickReceive = () => {
        handleClickButton(0)
    };
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setNumberValues(inputValue);
    }
    const [clickButton, setClickButton] = useState(0);
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {setIsChecked(!isChecked)}
    return (
        <div className={cx("cart-container")}>
            <div className={cx("ui-cart")}>
                <div className={cx("ui-top")}>
                    <span>ĐƠN HÀNG</span>
                </div>
                <div className={cx("ui-bottom")}>
                    <div className={cx("ui-table")}>
                        <table className={cx("table-container")}>
                            <thead>
                            <tr>
                                <th>TT</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá tiền</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Xác nhận</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>1</td>
                                <td className={cx("name-product")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                                <td className={cx("image")}>
                                    <img src={laptopTest} alt={""} className={cx("img")}/>
                                </td>
                                <td className={cx("price")}>10.000.000VND</td>
                                <td className={cx("quantity")}>2</td>
                                <td className={cx("total")}>20.000.000VND</td>
                                <td className={cx("status")}>Đang giao hàng</td>
                                <td className={cx("completed")}>
                                    <div className={cx("ui-completed")}>
                                        <button className={`${cd("btn")} ${cx("btn-completed")}`}
                                                onClick={() => handleClickButton(2)}>
                                            <img src={delivery} alt={""}/>
                                            <span>Đã nhận hàng</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={12}>
                                    <div className={cx("ui-info")}>
                                        <button className={`${cx("btn-home")} ${cd("btn")}`}>Quay lại trang home
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;