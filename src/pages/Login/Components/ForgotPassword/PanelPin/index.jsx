import classNames from "classnames/bind";
import styles from "../ForgotPassword.module.scss";
import {useEffect, useRef} from "react";

const PanelPin = ({ OnClickPanel }) => {
    const cx = classNames.bind(styles);
    const numInputs = 4; // Define the number of inputs
    const inputs = useRef(new Array(numInputs).fill(null));
    useEffect(() => {
        inputs.current = inputs.current.map((_, index) => inputs.current[index] || document.createElement("input"));
    }, []);

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
            event.target.value = value.charAt(0); // Keep only the first digit
        } else {
            event.target.value = value;
        }
    };

    return (
        <div>
            <div className={cx("pinWrapper")}>
                {inputs.current.map((_, index) => (
                    <input
                        key={index}
                        ref={el => inputs.current[index] = el}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        pattern="[0-9]*"
                        className={cx("pinInput")}
                        onInput={handleInput}
                        onKeyUp={(event) => handleKeyUp(event, index)}
                        autoFocus={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default PanelPin;
