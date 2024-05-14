import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {removeAllTokens} from "../../utils/token";
import {useEffect, useState} from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import avatar from "../../assets/images/logo.svg"
import styles from "./Navbar.module.scss"
import logo from "../../assets/images/logoWeb.svg";
import {logout} from "../../utils/firebase/auth";

const Navbar = () => {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();
    const [userLoggedIn, setUserLoggedIn] =  useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const items = [
        {title: "Home", link: "/"},
        {title: "Shop", link: "/shop"},
        {title: "Cart", link: "/cart"},
        {title: "My orders", link: "/orders"},
        {title: "About us", link: "/about-us"},
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={cx({"navbar-container": true, "scrolled": isScrolled})}>
            <div className={cx("navbar-content")}>
                <div className={cx("navbar-left")}>
                    <ul className={cx("navbar-links")}>
                        {items.map((item, index) =>
                            <li key={index} className={cx("ui-navbar")}>
                                <div className={cx("ui-links")}>
                                    <Link to={item.link} className={cx("ui-navbar-links")}>{item.title}</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={cx("navbar-right")}>
                    <div className={cx("navbar-avatar")}>
                        {userLoggedIn
                            ?
                            <>
                                <div className={cx("ui-navbar-login")}>
                                    <div className={cx("ui-avatar")}>
                                        <div className={cx("avatar-container")}>
                                            <div className={cx("avatar")}>
                                                <img src={avatar} alt={""}/>
                                                <span className={cx("user-name")}>Nguyễn Tiến Dũng</span>
                                            </div>
                                            <div className={cx("ui-info")}>
                                                <div className={cx("ui-arrow")}>
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </div>
                                            <div className={cx("list-option-arrow")}></div>
                                            <div className={cx("list-option")}>
                                                <Link to={"/profile"} className={cx("option")}>Thông tin cá nhân</Link>
                                                {/*<span className={cx("option")} onClick={}>Thông tin cá nhân</span>*/}
                                                <span className={cx("option")} onClick={logout}>Đăng xuất</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("ui-cart")}>
                                        <div className={cx("cart")}>
                                            <FontAwesomeIcon icon={faCartShopping}/>
                                            <div className={cx("quantity")}></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className={cx("ui-button")}>
                                    <button className={cx("btn-Login")}>Login</button>
                                    <button className={cx("btn-SignUp")}>Sign up</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;