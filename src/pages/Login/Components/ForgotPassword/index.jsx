import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import PanelEmail from "./PanelEmail";
import PanelPin from "./PanelPin";
import PanelResetPassword from "./PanelResetPassword";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import {useLocation} from "react-router-dom";

const ForgotPassword = () => {
    const cx = classNames.bind(styles)
    const location = useLocation();
    const [option, setOption] = useState(0);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const renderPanels = () => {
        switch (location.pathname) {
            case "/forgot-password/email":
                return <PanelEmail />;
            case "/forgot-password/pin":
                return <PanelPin />;
            case "/forgot-password/reset-password":
                return <PanelResetPassword />;
            default:
                return <PanelEmail />;
        }
    };
    return (
        <div className={cx("login-cart-content")}>
            <div className={cx("main-cart-section")}>
                <div className={cx("headings-container")}>
                    <div>
                        <h1 className={cx("ui-heading")}>Forgot Password</h1>
                        <h3 className={cx("ui-subheading")}>Continue to change the Laptop account password</h3>
                    </div>
                </div>
                {renderPanels()}
            </div>
        </div>
    );
};

export default ForgotPassword;