import classNames from "classnames/bind";
import styles from "../ForgotPassword.module.scss";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {Link} from "react-router-dom";
import {callApi} from "../../../../../utils/fetch";
import {apiUrl} from "../../../../../utils/config";

const PanelEmail = () => {
    const cx = classNames.bind(styles);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleContinue = async () => {
        const response = await callApi(`${apiUrl}/auth/send-otp`, "POST", email);
        console.log(response);
        if (response.status === 404) {
            setErrorMessage("Email này chưa được liên kết với tài khoản nào.");
        } else if (response.status === 400) {
            setErrorMessage("Bạn không thể đổi mật khẩu vì tài khoản này được tạo thông qua Google. Vui lòng đăng nhập bằng tài khoản Google.");
        } else {
            // link to the next step
        }
    };

    return (
        <div>
            {/*<div className={cx("captcha-element")}></div>*/}
            {/*<form className={cx("web_authn_form")}></form>*/}
            <div className={cx("account-lookup")}>
                <div className={cx("combined-email")}>
                    <div className={cx("next-email")}>
                        <label className={cx("next-email-label")}>Email</label>
                        <div className={cx("next-input")}>
                            <div className={cx("combined-input")}>
                                <input
                                    className={cx("email")}
                                    type={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("combined-error-message")}>
                    <p>{errorMessage}</p>
                </div>

                <div className={cx("button-login-container")}>
                    <Link to={"/forgot-password/pin"}>
                        <button className={cx("ui-button")} onClick={handleContinue}>
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