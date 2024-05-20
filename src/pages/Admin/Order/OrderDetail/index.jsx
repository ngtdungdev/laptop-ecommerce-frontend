import classNames from "classnames/bind";
import styles from "./OrderDetail.module.scss";
import component from "../../../../layouts/component.module.scss";
import laptopTest from "../../../../assets/images/laptopTest.png";
const OrderDetail = ({handleClickNo}) => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div className={cx("ui-notification")}>
            <div className={cx("ui-title")}>
                <p>Chi tiết đơn hàng</p>
            </div>
            <table className={cd("table-container")}>
                <thead>
                <tr>
                    <th>TT</th>
                    <th>Mã đơn hàng</th>
                    <th>Thời gian</th>
                    <th>Tên nhân viên</th>
                    <th>Tên khách hàng</th>
                    <th>Địa Chỉ</th>
                    <th>Tổng thanh toán</th>
                </tr>
                </thead>
                <tbody>
                <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                    <td className={cx("index")}>1</td>
                    <td className={cx("idOrder")}>OR00000001</td>
                    <td className={cx("time")}>5-5-2024</td>
                    <td className={cx("staff-name")}>Nguyễn Tiến Dũng</td>
                    <td className={cx("user-name")}>Đinh Quang Duy</td>
                    <td className={cx("address")}> 2/106 Đường Lê Tất Thành, Phường 9, Quận 5, TP Hồ Chí Minh</td>
                    <td className={cx("total-amount")}>100.000.000VND</td>
                </tr>
                </tbody>
            </table>

            <table className={cd(`${cx("table-container-product")} ${cd("table-container")}`)}>
                <thead>
                <tr>
                    <th>TT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </tr>
                </thead>
                <tbody>
                <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                    <td className={cx("index")}>1</td>
                    <td className={cx("name-product")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                    <td className={cd("image")}>
                        <img src={laptopTest} alt={""} className={cx("img")}/>
                    </td>
                    <td className={cx("quantity")}>2</td>
                    <td className={cx("price")}>20.000.000VNĐ</td>
                </tr>
                <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                    <td className={cx("index")}>1</td>
                    <td className={cx("name-product")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                    <td className={cd("image")}>
                        <img src={laptopTest} alt={""} className={cx("img")}/>
                    </td>
                    <td className={cx("quantity")}>2</td>
                    <td className={cx("price")}>20.000.000VNĐ</td>
                </tr>
                <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                    <td className={cx("index")}>1</td>
                    <td className={cx("name-product")}>MACBOOK AIR 13 2020 - M1 256GB</td>
                    <td className={cd("image")}>
                        <img src={laptopTest} alt={""} className={cx("img")}/>
                    </td>
                    <td className={cx("quantity")}>2</td>
                    <td className={cx("price")}>20.000.000VNĐ</td>
                </tr>
                </tbody>
            </table>
            <div className={cx("panel", "ui-btnCancel")}>
                <button className={`${cx("btn-cancel")} ${cd("btn")}`} onClick={() => handleClickNo(0)}>Thoát</button>
            </div>
        </div>
    )
}
export default OrderDetail