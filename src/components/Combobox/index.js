import classNames from "classnames/bind";
import styles from "./Combobox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Combobox = ({listItem, style, handleSelect, isComboboxUI}) => {
    const cx = classNames.bind(styles)
    const [selectedOption, setSelectedOption] = useState(listItem[0]);
    const handleSelectOption = (item, option) => {
        setSelectedOption(item);
        handleSelect(option)
    };
    const renderCategory = listItem.map((item, index) => (
        <span className={cx("option")} key={index} onClick={() => handleSelectOption(item, index)}>{item}</span>
    ));
    return (
        isComboboxUI ?
        (
            <div className={cx("ui-select-container")}>
                <div className={cx("ui-select")} style={{ width: `${style}rem` }}>
                    <p className={cx("select")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option")}>
                    {renderCategory}
                </div>
            </div>
        ) : (
            <div className={cx("ui-select-container", "container-white")}>
                <div className={cx("ui-select", "ui-select-white")} style={{width: `${style}rem`}}>
                    <p className={cx("select", "select-white")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option", "option-white")}>
                    {renderCategory}
                </div>
            </div>
        )
    )
}
export default Combobox;