import {useContext, useEffect, useRef, useState} from "react";
import styles from './Payment.module.scss'
import classNames from "classnames/bind";
import components from "../../layouts/component.module.scss"
import {Link} from "react-router-dom";
const Payment = () => {
    const [ cartItems, setCartItems ] = useState();
    const [ productItems, setProductItems ] = useState();
    const cx = classNames.bind(styles);
    const cd = classNames.bind(components);
    const [selectedMethod, setSelectedMethod] = useState('bacs');
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ codeEmail, setCodeEmail ] = useState("");
    const [ count, setCount ] = useState("Lấy mã xác nhận");
    const codeConfirm = useRef({
        code: null,
        timeEnd: null
    });

    useEffect(() => {
        const timoutFunc = setTimeout(() => {
            if (count > 0) {
                setCount(count - 1)
            }
            // eslint-disable-next-line eqeqeq
            if (count === 0) {
                setCount("Lấy mã xác nhận");
                codeConfirm.code = codeConfirm.timeEnd = null;
                return clearTimeout(timoutFunc)
            }
        }, 1000)
    }, [count])

    const handleInputChange = (setInputValue) => (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedMethod(method);
    };

    const getOrderItems = () => {
        const items = [];
        cartItems.forEach((item, index) => {
            if (productItems[index]) {
                items.push({
                    productId: productItems[index].id,
                    name: productItems[index].name,
                    number: item.number,
                    price: productItems[index].price,
                    note: "",
                    total: productItems[index].price * item.number
                });
            }
        });
        return items;
    }


    const validateGmail = () => {
        const filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return filter.test(email.trim());
    }

    const validatePhone = () => {
        const filter = /^(\+?84|0)[35789]\d{8}$/;
        return filter.test(phone.trim());
    }
    const [ customerId, setCustomerId ] = useState();
    const [total, setTotal] = useState(0);
    const CartItemRow = ({ productId, numberValue, indexValue}) => {
        const [numberValues, setNumberValues] = useState(numberValue);
        const [price, setPriceValue] = useState(0);
        const [subTotal, setSubTotalValue] = useState((numberValues * price).toFixed(2));
        useEffect(() => {
            if (productItems && productItems[indexValue]) {
                setPriceValue(productItems[indexValue].price);
                const newSubTotal = (numberValues * productItems[indexValue].price).toFixed(2);
                setSubTotalValue(newSubTotal);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [numberValues, price]);

        const handleChange = (event) => {
            const inputValue = event.target.value;
            setNumberValues(inputValue);
        };
        return (
            <tr className={cx("cart_item")}>
                {productItems ? (
                    <>
                        <td className={cx("product-name")}>
                            {productItems && productItems[indexValue] && productItems[indexValue].name}&nbsp;
                            <strong className={cx("product-quantity")}>×&nbsp;{numberValue}</strong>
                        </td>
                        <td className={cx("product-total")}>
                            <span className={cx("amount")}>
                                <bdi>
                                    <span className={cx("woocommerce-Price-currencySymbol")}>$</span>{subTotal}
                                </bdi>
                            </span>
                        </td>
                    </>
                ) : null}
            </tr>
        );
    };
    return (
        <div className={cx("container-lg")}>
            <div className={cx('checkout','woocommerce-checkout')}>
                <div className={cx("col2-set")} id="customer_details">
                    <div className={cx('col','p-0')}>
                        <div className={cx("woocommerce-billing-fields")}>
                            <h4>Chi tiết đơn hàng</h4>
                            <div className={cx("woocommerce-billing")}>
                                <div className={cx("full-name")}>
                                    <div className={cx("ui-last-name")}>
                                        <label className={cd("next-label")}>Họ</label>
                                        <div className={cd("next-input")}>
                                            <div className={cd("combined-input")}>
                                                <input className={cd("input")} type={"text"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("ui-first-name")}>
                                        <label className={cd("next-label")}>Tên</label>
                                        <div className={cd("next-input")}>
                                            <div className={cd("combined-input")}>
                                                <input className={cd("input")} type={"text"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cd("ui-first-name")}>
                                    <label className={cd("next-label")}>Địa chỉ</label>
                                    <div className={cd("next-input")}>
                                        <div className={cd("combined-input")}>
                                            <input className={cd("input")} type={"email"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={cd("ui-first-name")}>
                                    <label className={cd("next-label")}>Số điện thoại</label>
                                    <div className={cd("next-input")}>
                                        <div className={cd("combined-input")}>
                                            <input className={cd("input")} type={"email"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={cd("ui-first-name")}>
                                    <label className={cd("next-label")}>Email</label>
                                    <div className={cd("next-input")}>
                                        <div className={cd("combined-input")}>
                                            <input className={cd("input")} type={"email"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className={cx("order_review_heading")}>Đơn hàng của bạn</h4>
                <div className={cx("woocommerce-checkout-review-order")}>
                    <table className={cx('shop_table', 'woocommerce-checkout-review-order-table')}>
                        <thead>
                        <tr>
                            <th className={cx("product-name")}>Sản phẩm</th>
                            <th className={cx("product-total")}>Thành tiền</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (cartItems ?? []).map((item, index) => (
                                <CartItemRow key={index} productId={item.productId} numberValue={item.number}
                                             indexValue={index}/>
                            ))
                        }
                        </tbody>
                        <tfoot>
                        <tr className={cx("order-total")}>
                            <th>Tổng</th>
                            <td>
                                <strong>
                                    <span className={cx("amount")}>
                                        <bdi>
                                            <span className={cx("woocommerce-Price-currencySymbol")}>$</span>
                                            {total}
                                        </bdi>
                                    </span>
                                </strong>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <div id="payment" className={cx("woocommerce-checkout-payment")}>
                        <ul className={cx("wc_payment_methods")}>
                            <li className={cx("payment_method_bacs")}>
                                <input id="payment_method_bacs" type="radio" className={cx("input-radio")}
                                       value="bacs" checked={selectedMethod === 'bacs'}
                                       onChange={() => handlePaymentMethodChange('bacs')}/>
                                <label>Thanh toán qua VNPay</label>
                                <div className={cx("payment_box", {active: selectedMethod === 'bacs'})}>
                                    <p>Chuyển khoản trực tuyến bằng cổng thanh toán VNPay.
                                        Đơn hàng của bạn sẽ không được chấp nhận cho đến khi bạn đã thanh toán đầy đủ.</p>
                                </div>
                            </li>
                            <li className={cx("payment_method_cod")}>
                                <input id="payment_method_cod" type="radio" className={cx("input-radio")}
                                       value="cod" checked={selectedMethod === 'cod'}
                                       onChange={() => handlePaymentMethodChange('cod')}/>
                                <label>Thanh toán trực tiếp</label>
                                <div className={cx("payment_box", {active: selectedMethod === 'cod'})}>
                                    <p>Thanh toán bằng tiền mặt khi đơn hàng được giao đến bạn.</p>
                                </div>
                            </li>
                        </ul>
                        <div className={cx("gmail")}>
                            <p className={cx('form-row', 'form-row-wide', 'gmail-code')} data-priority={50}>
                                <label>Nhập mã xác nhận ở gmail&nbsp;
                                    <abbr className={cx("required")} title="required">*</abbr>
                                </label>
                                <span className={cx("woocommerce-input-wrapper")}>
                                        <input
                                            type="text" inputMode="numeric"
                                            className={cx('input-text', 'wooccm-required-field')}
                                            value={codeEmail} onChange={handleInputChange(setCodeEmail)}
                                            spellCheck="false"/>
                                        <button
                                            type="button" className={cx('buttons', 'alt')}
                                            style={count !== "Lấy mã xác nhận" ? {cursor: "default"} : {cursor: "pointer"}}
                                        >
                                        {count}
                                        </button>
                                    </span>
                            </p>
                        </div>
                        <div className={cx('form-row', 'place-order')}>
                            <div className={cx("woocommerce-terms-and-conditions-wrapper")}>
                                <div className={cx("woocommerce-privacy-policy-text")}>
                                    <p>Your personal data will be used to process your order, support your
                                        experience throughout this website, and for other purposes described in
                                        our <Link to="/"
                                                  className={cx("woocommerce-privacy-policy-link")} target="_blank">privacy
                                            policy.</Link></p>
                                </div>
                            </div>
                            <button type="submit" className={cx('button', 'alt')}>Place order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;