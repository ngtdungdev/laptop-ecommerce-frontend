import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {removeAllTokens} from "../../utils/token";
import {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss"

const Navbar = () => {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();
    const {userLoggedIn, currentUser} = useAuth();

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

    const doSignOut = () => {
        removeAllTokens();
        window.location.href = "/";
    };

    return (
        <nav className={cx({"navbar-container": true, "scrolled": isScrolled})}>
            <div className={cx("navbar-content")}>
                <div className={cx("navbar-left")}>
                    <ul className={cx("navbar-links")}>
                        {items.map((item, index) =>
                            <li key={index} className={cx("ui-navbar")}>
                                <Link to={item.link} className={cx("ui-navbar-links")}>{item.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={cx("navbar-right")}>
                    <div className={cx("navbar-avatar")}>
                        {userLoggedIn
                            ?
                            <>
                                <button onClick={doSignOut}>Sign out</button>
                            </>
                            :
                            <>
                                <Link to={cx("/login")}>Login</Link>
                                <Link to={cx("/signup")}>Sign up</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;