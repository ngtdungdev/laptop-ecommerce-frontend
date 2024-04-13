import classNames from "classnames/bind";
import styles from "./Admin.module.scss"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptop, faUserGear, faGear} from "@fortawesome/free-solid-svg-icons";
import Combobox from "../../components/Combobox";
import Statistics from "./Statistics";
import Product from "./Product";
import Import from "./Import";
import Role from "./Role";
import Support from "./SupportClient";
import Warehouse from "./Warehouse";
const Admin = () => {
    const cx = classNames.bind(styles)
    const [checkedBurger, setCheckedBurger] = useState(false)
    const [options, setOptions] = useState(0);
    const handleClickOption = (id) => {
        setOptions(id)
    };
    const optionComponents = {
        1: Statistics,
        2: Warehouse,
        3: Support,
        4: Import,
        5: Role,
        6: Support,
    };

    const handleCheckedBurger= () => {
        setCheckedBurger(!checkedBurger);
    };
    const renderComponentBasedOnOption = () => {
        const SelectedComponent = optionComponents[options];
        return SelectedComponent ? <SelectedComponent /> : null;
    };
    return (
        <div className={cx("admin-container")}>
            <div className={cx("admin-selection-bar", {"admin-selection-bar-checked": checkedBurger === true})}>
                <div className={cx("check-box-bars")}>
                    <label className={cx("burger", checkedBurger ? "click-burger" : "unClick-burger")}>
                        <input type="checkbox" onClick={handleCheckedBurger}/>
                        <span className={cx("option1")}></span>
                        <span className={cx("option2")}></span>
                        <span className={cx("option3")}></span>
                    </label>
                </div>
                <div className={cx("list-function")}>
                    <div className={cx("ui-dashboard")}>
                        <div className={cx("option", {"optionActive": options === 1})}
                             onClick={() => handleClickOption(1)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13ZM3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V16C11 15.7348 10.8946 15.4804 10.7071 15.2929C10.5196 15.1054 10.2652 15 10 15H4C3.73478 15 3.48043 15.1054 3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16V20ZM13 20C13 20.2652 13.1054 20.5196 13.2929 20.7071C13.4804 20.8946 13.7348 21 14 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13V20ZM14 10H20C20.2652 10 20.5196 9.89464 20.7071 9.70711C20.8946 9.51957 21 9.26522 21 9V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H14C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10Z"
                                    fill="black"/>
                            </svg>
                            <p>Tổng quan</p>
                        </div>
                    </div>
                    <div className={cx("ui-laptop")}>
                        <div className={cx("option", {"optionActive": options === 2})}
                             onClick={() => handleClickOption(2)}>
                            <FontAwesomeIcon icon={faLaptop} className={cx("img")}/>
                            <p>Sản phẩm</p>
                        </div>
                    </div>
                    <div className={cx("ui-purchase-order")}>
                        <div className={cx("option", {"optionActive": options === 3})}
                             onClick={() => handleClickOption(3)}>
                            <svg width="31" height="36" viewBox="0 0 31 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.2688 5.50002H21.75V4.90377C21.75 3.85377 20.8963 3 19.8463 3H11.1537C10.1037 3 9.24997 3.85377 9.24997 4.90377V5.50002H5.73123C4.22496 5.50002 3 6.72504 3 8.23125V30.2688C3 31.775 4.22496 33 5.73123 33H25.2688C26.775 33 28 31.775 28 30.2688V8.23125C28 6.72498 26.775 5.50002 25.2688 5.50002ZM11.75 5.50002H19.25V8.00004H11.75V5.50002ZM9.24997 14.25H18C18.69 14.25 19.2499 14.81 19.2499 15.5C19.2499 16.19 18.69 16.75 18 16.75H9.24997C8.55997 16.75 7.99999 16.19 7.99999 15.5C7.99999 14.81 8.55997 14.25 9.24997 14.25ZM21.75 26.75H13C12.31 26.75 11.75 26.19 11.75 25.5C11.75 24.81 12.31 24.25 13 24.25H21.75C22.44 24.25 23 24.81 23 25.5C23 26.19 22.44 26.75 21.75 26.75ZM21.75 21.75H9.24997C8.55997 21.75 7.99999 21.19 7.99999 20.5C7.99999 19.81 8.55997 19.25 9.24997 19.25H21.75C22.44 19.25 23 19.81 23 20.5C23 21.19 22.44 21.75 21.75 21.75Z"
                                    fill="black"/>
                            </svg>
                            <p>Đơn hàng</p>
                        </div>
                    </div>
                    <div className={cx("ui-order-history")}>
                        <div className={cx("option", {"optionActive": options === 4})}
                             onClick={() => handleClickOption(4)}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.737 3H4.26316C3.56565 3 3 3.62424 3 4.39432V10.739C3 11.5091 3.56565 12.1333 4.26316 12.1333H4.73496V25.6057C4.73496 26.3758 5.30048 27 5.99812 27H24.0015C24.6991 27 25.2647 26.3758 25.2647 25.6057V12.1332H25.7368C26.4344 12.1332 27 11.509 27 10.7389V4.39432C27.0001 3.62424 26.4345 3 25.737 3ZM17.6571 15.446H12.3427C11.7856 15.446 11.3322 14.9456 11.3322 14.3305C11.3322 13.7155 11.7856 13.2151 12.3427 13.2151H17.6571C18.2143 13.2151 18.6677 13.7155 18.6677 14.3305C18.6677 14.9456 18.2143 15.446 17.6571 15.446ZM24.4738 9.34457H24.0016H5.99812H5.52633V5.78864H24.4738V9.34457Z"
                                    fill="black"/>
                            </svg>
                            <p>Nhập xuất kho</p>
                        </div>
                    </div>
                    <div className={cx("ui-employee-manager")}>
                        <div className={cx("option", {"optionActive": options === 5})}
                             onClick={() => handleClickOption(5)}>
                            <FontAwesomeIcon icon={faUserGear} className={cx("img")}/>
                            <p>Tài khoản</p>
                        </div>
                    </div>
                    <div className={cx("ui-setting")}>
                        <div className={cx("option", {"optionActive": options === 6})}
                             onClick={() => handleClickOption(6)}>
                            <FontAwesomeIcon icon={faGear} className={cx("img")}/>
                            <p>Đăng xuất</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("panel-function")}>
                {renderComponentBasedOnOption()}
            </div>
        </div>
    );
};

export default Admin;