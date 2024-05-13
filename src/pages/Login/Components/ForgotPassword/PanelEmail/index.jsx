import classNames from "classnames/bind";
import styles from "../ForgotPassword.module.scss";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const PanelEmail = () => {
    const cx = classNames.bind(styles)
    return (
        <div>
            <div className={cx("account-lookup")}>
                <div className={cx("combined-email")}>
                    <div className={cx("next-email")}>
                        <label className={cx("next-email-label")}>Email</label>
                        <div className={cx("next-input")}>
                            <div className={cx("combined-input")}>
                                <input className={cx("email")} type={"email"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("button-login-container")}>
                    <Link to={"/forgot-password/pin"}>
                        <button className={cx("ui-button")}>
                            <span className={cx("content")}>
                                <span className={cx("ui-button-text")}>Continue</span>
                                <span className={cx("ui-button-hover-icon")}>
                                    <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )};

export default PanelEmail;