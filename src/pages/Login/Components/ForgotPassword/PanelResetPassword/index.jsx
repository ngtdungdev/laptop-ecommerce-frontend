import classNames from "classnames/bind";
import styles from "../ForgotPassword.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
const PanelResetPassword = ({OnClickPanel}) => {
    const cx = classNames.bind(styles)
    return (
        <div>
            <div className={cx("captcha-element")}></div>
            <form className={cx("web_authn_form")}></form>
            <form className={cx("account-lookup")}>
                <div className={cx("combined-password")}>
                    <div className={cx("next-password")}>
                        <label className={cx("next-password-label")}>Password</label>
                        <div className={cx("next-input")}>
                            <div className={cx("combined-input")}>
                                <input className={cx("password")} type={"password"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("combined-newPassword")}>
                    <div className={cx("next-newPassword")}>
                        <label className={cx("next-newPassword-label")}>Confirm new password</label>
                        <div className={cx("next-input")}>
                            <div className={cx("combined-input")}>
                                <input className={cx("newPassword")} type={"password"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("button-login-container")}>
                    <button className={cx("ui-button")}>
                        <span className={cx("content")}>
                            <span className={cx("ui-button-text")}>Confirm</span>
                            <span className={cx("ui-button-hover-icon")}>
                                <FontAwesomeIcon icon={faArrowRightLong}
                                                 className={cx("icons")}/>
                            </span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PanelResetPassword;