import Navbar from "../Navbar";
import classNames  from "classnames/bind";
import styles from "./Header.module.scss"
import {Link} from "react-router-dom";
import logo from "../../assets/images/logoWeb.svg";
const Header = () => {
    const cx = classNames.bind(styles)
    return (
        <div>
            <div className={cx("page-container")}>
                <div className={cx("gradient-background-wrapper")}>
                    <div className={cx("gradient-background")}>
                        <div className={cx("gradient-background-left")}></div>
                        <div className={cx("gradient-background-right")}></div>
                    </div>
                    <div className={cx("gradient-background-noise")}></div>
                </div>
                <div className={cx("main-page")}>
                    <div className={cx("cart-helder")}>
                        <h1 className={cx("cart-logo")}>
                            <header className={cx("loginCart-helder")}>
                                <Link to={""}>
                                    <img src={logo} alt={""}/>
                                </Link>
                            </header>
                        </h1>
                    </div>
                    <div className={cx("navbar")}>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;