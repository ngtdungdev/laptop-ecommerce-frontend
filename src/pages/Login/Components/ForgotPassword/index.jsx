import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import PanelEmail from "./PanelEmail";
import PanelPin from "./PanelPin";
import PanelResetPassword from "./PanelResetPassword";

const ForgotPassword = ({OnClickPanel}) => {
    const cx = classNames.bind(styles)
    const [option, setOption] = useState(0);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const optionPanels = {
        0: PanelEmail,
        1: PanelPin,
        2: PanelResetPassword,
    };
    const handleSelectOption = (index) => {
        setOption(index);
    }
    const renderPanels = () => {
        const Panel = optionPanels[option];
        return Panel ? <Panel OnClickPanel={handleSelectOption}/> : null;
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