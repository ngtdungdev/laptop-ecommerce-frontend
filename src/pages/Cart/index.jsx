import classNames from "classnames/bind";
import styles from "./Cart.module.scss"
import component from "../../layouts/component.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faUser, faUserMinus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import laptopTest from "../../assets/images/laptopTest.png";
import {Link} from "react-router-dom";
const Cart = () => {
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
                    <span>GIỎ HÀNG</span>
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
                                <th>Xóa</th>
                                <th>Tích chọn</th>
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
                                <td className={cx("quantity")}><input
                                    inputMode="numeric"
                                    type="number"
                                    value={numberValues}
                                    onChange={handleChange}
                                    step="1" size="4" min="1"
                                    className={cx("input-text")}
                                    spellCheck="true"
                                /></td>
                                <td className={cx("total")}>20.000.000VND</td>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                                <td className={cx("ui-checkbox-container")}>
                                    <div className={cx("ui-checkbox")}>
                                        <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                               className={cx("checked", "hidden-check-box")}/>
                                        <label htmlFor="unique-id" onClick={handleCheckbox}
                                               className={cx("check-box")}></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={12}>
                                    <div className={cx("ui-info")}>
                                        <button className={`${cx("btn-home")} ${cd("btn")}`}>Quay lại trang home
                                        </button>
                                        <div className={cx("ui-right")}>
                                            <div className={cx("ui-total")}>
                                                <h4>Thanh Toán:</h4>
                                                <span>100.000.000VND</span>
                                            </div>
                                            <div className={cx("btn-pay")}>
                                                <Link className={`${cx("btn-confirm")} ${cd("btn")}`}  to={"/payment"}>Thanh toán
                                                </Link>
                                            </div>
                                        </div>
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

export default Cart;