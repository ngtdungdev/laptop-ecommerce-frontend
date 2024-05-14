import classNames from "classnames/bind";
import styles from "../ForgotPassword.module.scss";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const PanelPin = () => {
    const cx = classNames.bind(styles);
    const numInputs = 6;
    const inputs = useRef(new Array(numInputs).fill(null));
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    const [count, setCount] = useState(formatTime(90));
    useEffect(() => {
        inputs.current = inputs.current.map((_, index) => inputs.current[index] || document.createElement("input"));
        let timoutFunc;
        if (count !== "Hãy nhấn nút reset password") {
            timoutFunc = setTimeout(() => {
                const totalSeconds = parseInt(count.split(":").reduce((acc, time) => (60 * acc) + +time));
                if (totalSeconds > 0) setCount(formatTime(totalSeconds - 1));
                else {
                    setCount("Hãy nhấn nút reset password");
                    clearTimeout(timoutFunc);
                }
            }, 1000);
        }
        return () => clearTimeout(timoutFunc);
    }, [count]);

    const handleKeyUp = (event, index) => {
        if ((event.key >= '0' && event.key <= '9') && index < numInputs - 1) {
            inputs.current[index + 1].focus();
        } else if (event.key === "Backspace" && index > 0) {
            inputs.current[index - 1].focus();
        }
    };
    const handleInput = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value.length > 1) {
            event.target.value = value.charAt(0);
        } else {
            event.target.value = value;
        }
    };

    const handleSendConfirmationCode = () => {
        if (count === "Hãy nhấn nút reset password") {
            setCount(formatTime(90));
        }
    };

    return (
        <div className={cx("ui-reset-password")}>
            <div className={cx("pin-wrapper")}>
                {inputs.current.map((_, index) => (
                    <input
                        key={index}
                        ref={el => inputs.current[index] = el}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        pattern="[0-9]*"
                        className={cx("pin-input")}
                        onInput={handleInput}
                        onKeyUp={(event) => handleKeyUp(event, index)}
                        autoFocus={index === 0}
                    />
                ))}
            </div>
            <div className={cx("reset-password")}>
                <div>{count}</div>
                <span onClick={handleSendConfirmationCode}>Gửi lại mã?</span>
            </div>
            <div className={cx("button-container")}>
                <Link to={"/forgot-password/reset-password"}>
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
    );
};

export default PanelPin;
