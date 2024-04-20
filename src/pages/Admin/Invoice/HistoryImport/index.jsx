import search from "../../../../assets/images/search.svg";
import detail from "../../../../assets/images/detail.svg";
import receive from "../../../../assets/images/receive-application.svg";
import delivery from "../../../../assets/images/delivery-success.svg";
import cancelOrder from "../../../../assets/images/cancel-order.svg";
import GroupBox from "../../../../components/GroupBox";
import classNames from "classnames/bind";
import styles from "./History.module.scss"
import component from "../../../../layouts/component.module.scss"
const HistoryImport = ({handleClickButton}) => {
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
                        <th>Mã nhập hàng</th>
                        <th>Nhân viên nhập</th>
                        <th>Thời gian nhập</th>
                        <th>Nhà cung cấp</th>
                        <th>Tổng chi phí</th>
                        <th>Chi tiết</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={cx("item-product")}>
                        <td className={cx("index")}>1</td>
                        <td className={cx("id")}>OR00000001</td>
                        <td className={cx("staff-supplier")}>Nguyễn Tiến Dũng</td>
                        <td className={cx("time")}>5-5-2024</td>
                        <td className={cx("name-supplier")}>Apple</td>
                        <td className={cx("total-count")}>100.000.000VND</td>
                        <td className={cx("detail-supplier")}>
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
export default HistoryImport