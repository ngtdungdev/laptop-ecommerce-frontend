import styles from "../OrderProcessing/OrderProcessing.module.scss";
import component from "../../../../layouts/component.module.scss";
import detail from "../../../../assets/images/detail.svg";
import GroupBox from "../../../../components/GroupBox";
import classNames from "classnames/bind";
import search from "../../../../assets/images/search.svg";

const OrderCancelled = ({handleClickButton, status}) => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div className={cx("ui-container")}>
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
            <div className={cx("ui-table")}>
                <table className={cx("table-container")}>
                    <thead>
                    <tr>
                        <th>TT</th>
                        <th>Mã đơn hàng</th>
                        <th>Mã thanh toán</th>
                        <th>Mã hoàn tiền</th>
                        <th>Thời gian hủy đơn</th>
                        <th>Lý do hủy đơn</th>
                        <th>Chi tiết đơn hàng</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={cx("item-product")}>
                        <td className={cx("index")}>1</td>
                        <td className={cx("idOrder")}>OR00000001</td>
                        <td className={cx("idPay")}>US00000002</td>
                        <td className={cx("idRefund")}>UK00000004</td>
                        <td className={cx("time-cancel-order")}>5-5-2024</td>
                        <td className={cx("reason-cancel-order")}>Hàng đợi lâu quá, đã đặt rồi</td>
                        <td className={cx("order-detail")}>
                            <div className={cx("detail")}>
                                <button className={`${cd("btn")} ${cx("btn-detail")}`}
                                        onClick={() => handleClickButton(1)}>
                                    <img src={detail} alt={""}/>
                                </button>
                            </div>
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
    )
}
export default OrderCancelled