import classNames from "classnames/bind";
import styles from "./User.module.scss"
import component from "../../../layouts/component.module.scss"
import search from "../../../assets/images/search.svg";
import GroupBox from "../../../components/GroupBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserMinus, faUserPlus} from "@fortawesome/free-solid-svg-icons"
import OrderDetail from "../Order/OrderDetail";
import {useEffect, useState} from "react";
import AddUserDialog from "./AddUserDialog";
import UpdateUserDialog from "./UpdateUserDialog";
import Notification from "../../../components/Notification";
import {useLocation} from "react-router-dom";
import {deleteUser, loadCategories, loadUsers} from "../../../utils/load";
import {useAuth} from "../../../contexts/AuthContext";

const User = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const {currentUser} = useAuth();
    const location = useLocation();
    const [userId, setUserId] = useState();
    const [locationUser, setLocationUser] = useState("/admin/users?")
    const [data, setData] = useState(null);
    const extractPageAndSize = (url) => {
        const urlObj = new URL(url, 'http://example.com');
        return urlObj.searchParams.get('page');
    };
    const result = extractPageAndSize(location.pathname + location.search);
    const [page, setPage] = useState(result != null ? result - 1 : 0)
    const [size, setSize] = useState(10);
    const [errorMessage, setErrorMessage] = useState("");
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
                <Notification text={"Bạn có chắc chắn muốn xóa taì khoản này không"} type={"warning"}
                              handleBtnNotification={handleClickReceive} handleClickNo={handleClickButton}/>
            </div>
        )
    };
    const deleteUserById = async(id) => {
        try {
            await deleteUser(id);
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng");
        }
    }
    const handleClickReceive = () => {
        handleClickButton(0)
        if(currentUser !== userId) {
            deleteUserById(userId).then(r => {});
        }
    };
    const [clickButton, setClickButton] = useState(0);
    const handleClickButton = (index, userId) => {
        setClickButton(index);
        setUserId(userId);
    };
    const renderButtonBasedOnOption = () => {
        const SelectedButton = optionButtons[clickButton];
        return SelectedButton ? <SelectedButton/> : null;
    };

    useEffect(() => {
        const loadUserList = async () => {
            try {
                await loadUsers(page, size, setData)
            } catch (error) {
                setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
            }
        };

        loadUserList().then();
    }, [page, size, setData]);

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
                    {
                        currentUser.authorities.indexOf("CREATE_USER") !== -1
                            ?
                            <div className={cx("add")}>
                                <button className={`${cd("btn")} ${cx("btn-add")}`}
                                        onClick={() => handleClickButton(1)}>
                                    <FontAwesomeIcon icon={faUserPlus}/>
                                    <span>Thêm mới</span>
                                </button>
                            </div>
                            :
                            <></>
                    }
                </div>
                <div className={cx("ui-table")}>
                    <table className={cx("table-container")}>
                        <thead>
                        <tr>
                            <th>TT</th>
                            <th>Tên đăng nhập</th>
                            <th>Email</th>
                            <th>SĐT</th>
                            <th>Ngày sinh</th>
                            <th>Phân quyền</th>
                            {
                                currentUser.authorities.indexOf("UPDATE_USER") !== -1
                                    ? <th>Cập nhật</th> : <></>
                            }
                            {
                                currentUser.authorities.indexOf("DELETE_USER") !== -1
                                    ? <th>Xóa</th> : <></>
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {(data?.content ?? []).map((user, index) => (
                            <tr className={cx("item-product")}>
                                <td className={cx("index")}>{index + 1}</td>
                                <td className={cx("user-name")}>{user.displayName}</td>
                                <td className={cx("email")}>{user.email}</td>
                                <td className={cx("phone")}>{user.phone}</td>
                                <td className={cx("birthdate")}>{user.birthdate}</td>
                                <td className={cx("decentralize")}>{user.roles.join(", ")}</td>
                                {
                                    currentUser.authorities.indexOf("UPDATE_USER") !== -1
                                        ?
                                        <td className={cx("update")}>
                                            <div className={cx("update-user")}>
                                                <button className={`${cd("btn")} ${cx("btn-update")}`}
                                                        onClick={() => handleClickButton(2)}>
                                                    <FontAwesomeIcon icon={faUser}/>
                                                    <span>Cập nhật</span>
                                                </button>
                                            </div>
                                        </td>
                                        :
                                        <></>
                                }
                                {
                                    currentUser.authorities.indexOf("DELETE_USER") !== -1
                                        ?
                                        <td className={cx("delete")}>
                                            <div className={cx("delete-user")}>
                                                <button className={`${cd("btn")} ${cx("btn-delete")}`}
                                                        onClick={() => handleClickButton(3, user.id)}>
                                                    <FontAwesomeIcon icon={faUserMinus}/>
                                                    <span>Xóa</span>
                                                </button>
                                            </div>
                                        </td>
                                        :
                                        <></>
                                }
                            </tr>
                        ))}
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