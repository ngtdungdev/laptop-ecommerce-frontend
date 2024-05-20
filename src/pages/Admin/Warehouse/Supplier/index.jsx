import classNames from "classnames/bind";
import styles from "./Supplier.module.scss"
import Combobox from "../../../../components/Combobox";
import component from "../../../../layouts/component.module.scss";
import GroupBox from "../../../../components/GroupBox";
const Supplier = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div className={cx("ui-container")}>
            <div className={cx("ui-top")}>
                <div className={cx("ui-title")}>
                    <p>Nhà cung cấp</p>
                </div>
                <div className={cx("panel", "ui-name-product")}>
                    <div className={cd("container")}>
                        <div className={cd("ui-container")}>
                            <label className={cd("next-label")}>Id</label>
                            <div className={cd("next-input")}>
                                <div className={cd("combined-input")}>
                                    <input className={cd("input")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("panel", "ui-name-product")}>
                    <div className={cd("container")}>
                        <div className={cd("ui-container")}>
                            <label className={cd("next-label")}>Tên nhà cung cấp</label>
                            <div className={cd("next-input")}>
                                <div className={cd("combined-input")}>
                                    <input className={cd("input")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("panel", "ui-name-product")}>
                    <div className={cd("container")}>
                        <div className={cd("ui-container")}>
                            <label className={cd("next-label")}>Email</label>
                            <div className={cd("next-input")}>
                                <div className={cd("combined-input")}>
                                    <input className={cd("input")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("panel", "ui-name-product")}>
                    <div className={cd("container")}>
                        <div className={cd("ui-container")}>
                            <label className={cd("next-label")}>Địa chỉ</label>
                            <div className={cd("next-input")}>
                                <div className={cd("combined-input")}>
                                    <input className={cd("input")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("ui-btn")}>
                        <button className={`${cx("btn-add", "btn")} ${cd("btn")}`}>Thêm</button>
                        <button className={`${cx("btn-delete", "btn")} ${cd("btn")}`} style={{display: "none"}}>Xóa</button>
                        <button className={`${cx("btn-update", "btn")} ${cd("btn")}`} style={{display: "none"}}>Cập nhật</button>
                        <button className={`${cx("btn-cancel", "btn")} ${cd("btn")}`}>Hủy</button>
                    </div>
                </div>
            </div>
            <div className={cx("ui-bottom")}>
                <div className={cx("ui-title")}>
                    <p>Danh sách nhà cung cấp</p>
                </div>
                <table className={cd("table-container")}>
                    <thead>
                    <tr>
                        <th>TT</th>
                        <th>ID</th>
                        <th>Tên nhà cung cấp</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                        <td className={cx("index")}>1</td>
                        <td className={cx("id")}>1</td>
                        <td className={cx("supplier-name")}>Apple</td>
                        <td className={cx("email")}>dungboi1029@gmail.com</td>
                        <td className={cx("address")}> 2/106 Đường Lê Tất Thành, Phường 9, Quận 5, TP Hồ Chí Minh</td>
                    </tr>
                    </tbody>
                </table>
                <div className={cx("ui-group-box")}>
                    <GroupBox quantity={5}/>
                </div>
            </div>
        </div>
    )
}
export default Supplier