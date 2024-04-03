import classNames  from "classnames/bind";
import styles from "./Footer.module.scss"
import logo from "../../assets/images/logoWeb.svg";
import {Link} from "react-router-dom";
import component from "../../layouts/component.module.scss"

const Footer = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div>
            <div className={cx("footer-container")}>
                <div className={cx("gradient-background-wrapper")}>
                    <div className={cx("gradient-background")}>
                        <div className={cx("gradient-background-left")}></div>
                        <div className={cx("gradient-background-right")}></div>
                    </div>
                    <div className={cx("gradient-background-noise")}></div>
                </div>
                <div className={cx("ui-footer")}>
                    <div className={cx("ui-footer-top")}>
                        <div className={cx("row")}>
                            <div className={cx("column", "ui-column-1")}>
                                <div className={cx("logo")}>
                                    <Link to={"/login"}>
                                        <img src={logo} alt={""}/>
                                    </Link>
                                </div>
                                <div className={cx("text")}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className={cx("column", "ui-column-2")}>
                                <div className={cx("title")}>
                                    <p>
                                        CONTACT US
                                    </p>
                                </div>
                                <div className={cx("address")}>
                                    <p>
                                        555 Arabica Springs Rd, Crawford, TN 38554
                                    </p>
                                </div>
                                <div className={cx("number-phone")}>
                                    <label>Call Us :</label>
                                    <p>0812.535.278</p>
                                </div>
                                <div className={cx("email")}>
                                    <label>Email :</label>
                                    <Link to={""}>
                                        quangduy201@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className={cx("column", "ui-column-3")}>
                                <div className={cx("title")}>
                                    <p>SUBSCRIBE TO NEWSLETTER</p>
                                </div>
                                <div className={cx("editTextEmail")}>
                                    <div className={`${cx("next-input")} ${cd("next-input")}`}>
                                        <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                            <input className={`${cx("input")} ${cd("input")}`} type={"email"} placeholder={"Your e-mail address"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("buttonEmail")}>
                                    <button className={`${cx("btn")} ${cd("btn")}`}>Subscribe</button>
                                </div>
                                <div className={cx("note")}>
                                    <p>Sign up with your email address to receive news and updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-footer-bottom")}>
                        <div className={cx("footer-credit")}>
                            <p>Copyright ©2024 LapTop. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;