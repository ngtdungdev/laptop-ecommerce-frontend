import classNames from "classnames/bind";
import styles from "./User.module.scss"
import component from "../../../layouts/component.module.scss"
import search from "../../../assets/images/search.svg";
import GroupBox from "../../../components/GroupBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserMinus, faUserPlus} from "@fortawesome/free-solid-svg-icons"
import OrderDetail from "../Order/OrderDetail";
import {useState} from "react";
import AddUserDialog from "./AddUserDialog";
import UpdateUserDialog from "./UpdateUserDialog";
import Notification from "../../../components/Notification";

const User = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const optionButtons = {
        0: null,
        1: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cd("ui-notification-container")}>
                    <AddUserDialog handleClickNo={handleClickButton}/>
                </div>
            </div>
        ),
        2: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cd("ui-notification-container")}>
                    <UpdateUserDialog handleClickNo={handleClickButton}/>
                </div>
            </div>
        ),
        3: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <Notification text={"Bạn có chắc chắn muốn xóa nhân viên này không"} type={"warning"}
                              handleBtnNotification={handleClickReceive} handleClickNo={handleClickButton}/>
            </div>
        )
    };
    const handleClickReceive = () => {
        handleClickButton(0)
    };
    const [clickButton, setClickButton] = useState(0);
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const renderButtonBasedOnOption = () => {
        const SelectedButton = optionButtons[clickButton];
        return SelectedButton ? <SelectedButton/> : null;
    };
    return (
        <div>
            {renderButtonBasedOnOption()}
            <div className={cx("ui-container")}>
                <div className={cx("ui-function")}>
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
                    <div className={cx("add")}>
                        <button className={`${cd("btn")} ${cx("btn-add")}`}
                                onClick={() => handleClickButton(1)}>
                            <FontAwesomeIcon icon={faUserPlus}/>
                            <span>Thêm mới</span>
                        </button>
                    </div>
                </div>
                <div className={cx("ui-table")}>
                    <table className={cx("table-container")}>
                        <thead>
                        <tr>
                            <th>TT</th>
                            <th>Tên đăng nhập</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Phân quyền</th>
                            <th>Ngày tạo</th>
                            <th>Cập nhật</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("user-name")}>Nguyễn Tiến Dũng</td>
                            <td className={cx("email")}>dungboi1029@gmail.com</td>
                            <td className={cx("gender")}>Nam</td>
                            <td className={cx("decentralize")}>Quản lý</td>
                            <td className={cx("date")}>5-5-2024</td>
                            <td className={cx("update")}>
                                <div className={cx("update-user")}>
                                    <button className={`${cd("btn")} ${cx("btn-update")}`}
                                            onClick={() => handleClickButton(2)}>
                                        <FontAwesomeIcon icon={faUser}/>
                                        <span>Cập nhật</span>
                                    </button>
                                </div>
                            </td>
                            <td className={cx("delete")}>
                                <div className={cx("delete-user")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}
                                            onClick={() => handleClickButton(3)}>
                                        <FontAwesomeIcon icon={faUserMinus}/>
                                        <span>Xóa</span>
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
        </div>
    );
};

export default User;