import classNames from "classnames/bind";
import styles from "./UpdateUserDialog.module.scss";
import component from "../../../../layouts/component.module.scss";
import {useState} from "react";
import {useLocation} from "react-router-dom";

const UpdateUserDialog = ({handleClickNo}) => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {setIsChecked(!isChecked)}

    return (
        <div className={cx("ui-notification")}>
            <div className={cx("ui-title")}>
                <p>Tạo quyền cho tài khoản</p>
            </div>
            <div className={cx("ui-center")}>
                <div className={cx("list-table")}>
                    <table className={cd(`${cx("table-container-product")} ${cd("table-container")}`)}>
                        <thead>
                        <tr>
                            <th>Tên quyền</th>
                            <th>Thêm</th>
                            <th>Sửa</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        <tr className={`${cx("item-product")} ${cd("item-product")}`}>
                            <td className={cx("index")}>Quản lý sản phẩm</td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
                            </td>
                            <td className={cx("ui-checkbox-container")}>
                                <div className={cx("ui-checkbox")}>
                                    <input checked={isChecked} type={"checkbox"} id={"unique-id"}
                                           className={cx("checked", "hidden-check-box")}/>
                                    <label htmlFor="unique-id" onClick={handleCheckbox}
                                           className={cx("check-box")}></label>
                                </div>
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
                        </tbody>
                    </table>
                </div>
                <div className={cx("panel-info")}>
                    <div className={cx("ui-input", "ui-option")}>
                        <label className={cd("next-label")}>Tên Đăng nhập</label>
                        <div className={`${cx("next-input")} ${cd("next-input")}`}>
                            <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                <input className={`${cx("input")} ${cd("input")}`} placeholder={"Nhập dữ liệu"}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-input", "ui-option")}>
                        <label className={cd("next-label")}>Email</label>
                        <div className={`${cx("next-input")} ${cd("next-input")}`}>
                            <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                <input className={`${cx("input")} ${cd("input")}`} placeholder={"Nhập dữ liệu"}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-input", "ui-option")}>
                        <label className={cd("next-label")}>Giới tính</label>
                        <div className={`${cx("next-input")} ${cd("next-input")}`}>
                            <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                <input className={`${cx("input")} ${cd("input")}`} placeholder={"Nhập dữ liệu"}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-input", "ui-option")}>
                        <label className={cd("next-label")}>Phân quyền</label>
                        <div className={`${cx("next-input")} ${cd("next-input")}`}>
                            <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                <input className={`${cx("input")} ${cd("input")}`} placeholder={"Nhập dữ liệu"}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-input", "ui-option")}>
                        <label className={cd("next-label")}>Ngày tạo</label>
                        <div className={`${cx("next-input")} ${cd("next-input")}`}>
                            <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                <input className={`${cx("input")} ${cd("input")}`} placeholder={"Nhập dữ liệu"}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-btn")}>
                        <button className={`${cx("btn-confirm")} ${cd("btn")}`}>Xác Nhận</button>
                        <button className={`${cx("btn-cancel")} ${cd("btn")}`}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateUserDialog