import classNames from "classnames/bind";
import styles from "./Cart.module.scss"
import component from "../../layouts/component.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faUser, faUserMinus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import laptopTest from "../../assets/images/laptopTest.png";
import {Link} from "react-router-dom";
import {getCartByUserId, saveCartItem} from "../../utils/load";
import {useAuth} from "../../contexts/AuthContext";
import ProductItem from "../../components/ProductItem";
import {formatter} from "../../utils/currency";
import product from "../Admin/Product";
const Cart = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const {userLoggedIn, currentUser, isAdmin} = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [carts, setCarts] = useState();
    const [numberValues, setNumberValues] = useState(1);
    const [quantities, setQuantities] = useState({});
    const [isChecked, setIsChecked] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const handleClickReceive = () => {
        handleClickButton(0)
    };
    const handleChange = (productId, event) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: event.target.value
        }));
    };
    useEffect(() => {
        const getCartById = async() => {
            try {
                await getCartByUserId(setCarts, currentUser.id);
                const initialQuantities = {};
                const listCheck = {}
                carts.forEach(cart => {
                    initialQuantities[cart.product.id] = cart.quantity;
                    listCheck[cart.product.id] = false;
                    setTotalPrice(totalPrice + (cart.quantity * cart.product.price))
                });
                setQuantities(initialQuantities);
                setIsChecked(listCheck);
            } catch (error) {
                setErrorMessage("Vui lòng kiểm tra kết nối mạng");
            }
        }
        getCartById().then(r => {})
    }, [currentUser]);
    const [clickButton, setClickButton] = useState(0);
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const handleTotalPrice = (price) => {
        
    }
    const handleCheckbox = (productId) => {
        console.log(carts)
        setIsChecked(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    }
    const handleSaveListCart = () => {
        saveCart().then(r => {});
    }
    const saveCart = async () => {
        try {
            const cartItems = carts.map(cart => ({
                productId: cart.product.id,
                quantity: quantities[cart.product.id] || cart.quantity
            }));
            const cart = {
                userId: currentUser.id,
                cartItems
            };
            await saveCartItem(cart);
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng");
        }
    }
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
                            {(carts || []).map((cart, key) => (
                                <tr className={cx("item-product")}>
                                    <td className={cx("index")}>{key + 1}</td>
                                    <td className={cx("name-product")}>{cart.product.name}</td>
                                    <td className={cx("image")}>
                                        <img src={cart.product.image} alt={""} className={cx("img")}/>
                                    </td>
                                    <td className={cx("price")}>{formatter.format(cart.product.price)}</td>
                                    <td className={cx("quantity")}><input
                                        inputMode="numeric"
                                        type="number"
                                        value={quantities[cart.product.id]}
                                        onChange={(e) => handleChange(cart.product.id, e)}
                                        step="1" size="4" min="1" max={cart.product.quantity}
                                        className={cx("input-text")}
                                        spellCheck="true"
                                    /></td>
                                    <td className={cx("total")}>{formatter.format(cart.quantity * cart.product.price)}</td>
                                    <td className={cx("delete")}>
                                        <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </button>
                                    </td>
                                    <td className={cx("ui-checkbox-container")}>
                                        <div className={cx("ui-checkbox")}>
                                            <input checked={isChecked[cart.product.id]} type={"checkbox"} id={"unique-id"}
                                                   className={cx("checked", "hidden-check-box")}/>
                                            <label htmlFor="unique-id" onClick={(() => handleCheckbox(cart.product.id))}
                                                   className={cx("check-box")}></label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={12}>
                                    <div className={cx("ui-info")}>
                                        <Link to={"/home"}>
                                            <button className={`${cx("btn-home")} ${cd("btn")}`}>Quay lại trang home
                                            </button>
                                        </Link>
                                        <div className={cx("ui-right")}>
                                            <div className={cx("ui-total")}>
                                                <h4>Thanh Toán:</h4>
                                                <span>{formatter.format(totalPrice)}</span>
                                            </div>
                                            <div className={cx("btn-pay")}>
                                                <button className={`${cx("btn-save")} ${cd("btn")}`} onClick={handleSaveListCart}>Lưu</button>
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