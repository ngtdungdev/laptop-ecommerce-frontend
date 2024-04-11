import detail from "../../../../assets/images/detail.svg";
import receive from "../../../../assets/images/receive-application.svg";
import delivery from "../../../../assets/images/delivery-success.svg";
import cancelOrder from "../../../../assets/images/cancel-order.svg";
import GroupBox from "../../../../components/GroupBox";
import classNames from "classnames/bind";
import styles from "./OrderProcessing.module.scss";
import component from "../../../../layouts/component.module.scss";
const OrderProcessing = ({handleClickButton, status}) => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div className={cx("ui-table")}>
            <table className={cx("table-container")}>
                <thead>
                <tr>
                    <th>TT</th>
                    <th>Mã đơn hàng</th>
                    <th>Mã khách hàng</th>
                    <th>Thời gian</th>
                    <th>Trạng thái đơn hàng</th>
                    <th>Thanh toán</th>
                    <th>Giao hàng</th>
                    <th>Tổng tiền</th>
                    <th>Chi tiết đơn hàng</th>
                    <th>Xử lý</th>
                </tr>
                </thead>
                <tbody>
                <tr className={cx("item-product")}>
                    <td className={cx("index")}>1</td>
                    <td className={cx("idOrder")}>OR00000001</td>
                    <td className={cx("idUser")}>US00000002</td>
                    <td className={cx("time")}>5-5-2024</td>
                    <td className={cx("order-status", status ? "selected" : "unSelected")}>Chờ xác nhận</td>
                    <td className={cx("pay", {})}>Chưa thanh toán</td>
                    <td className={cx("delivery")}>Chưa giao hàng</td>
                    <td className={cx("total-amount")}>100.000.000VND</td>
                    <td className={cx("order-detail")}>
                        <div className={cx("detail")}>
                            <button className={`${cd("btn")} ${cx("btn-detail")}`}
                                    onClick={() => handleClickButton(1)}>
                                <img src={detail} alt={""}/>
                            </button>
                        </div>
                    </td>
                    <td className={cx("processing-function")}>
                        <div className={cx("receive-application", {"active-btn-receive": status === true})}>
                            <button className={`${cd("btn")} ${cx("btn-receive")}`}
                                    onClick={() => handleClickButton(2)}>
                                <img src={receive} alt={""}/>
                                <span>Nhận đơn</span>
                            </button>
                        </div>
                        <div className={cx("delivery", {"active-btn-delivery": status === true})}>
                            <button className={`${cd("btn")} ${cx("btn-delivery")}`}
                                    onClick={() => handleClickButton(2)}>
                                <img src={delivery} alt={""}/>
                                <span>Giao hàng</span>
                            </button>
                        </div>
                        <div className={cx("cancel-order", {"active-btn-order": status === true})}>
                            <button className={`${cd("btn")} ${cx("btn-order")}`}
                                    onClick={() => handleClickButton(2)}>
                                <img src={cancelOrder} alt={""}/>
                                <span>Hủy đơn</span>
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
    )
}
export default OrderProcessing