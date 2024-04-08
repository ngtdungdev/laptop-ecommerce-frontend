import classNames from "classnames/bind";
import styles from "./Combobox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";

const Combobox = ({listItem, styleCombobox, handleSelect, isComboboxUI}) => {
    const cx = classNames.bind(styles)
    const [selectedOption, setSelectedOption] = useState(listItem[0]);
    const handleSelectOption = (item, option) => {
        setSelectedOption(item);
        handleSelect(option)
    };
    const [divHeight, setDivHeight] = useState(0);
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current) {
            setDivHeight(divRef.current.offsetHeight);
        }
    }, []);
    const renderCategory = listItem.map((item, index) => (
        <span className={cx("option")} key={index} onClick={() => handleSelectOption(item, index)}>{item}</span>
    ));
    return (
        isComboboxUI ?
        (
            <div className={cx("ui-select-container")}>
                <div className={cx("ui-select")} style={styleCombobox} ref={divRef}>
                    <p className={cx("select")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option")} style={{ top: `${divHeight}px`}}>
                    {renderCategory}
                </div>
            </div>
        ) : (
            <div className={cx("ui-select-container", "container-white")}>
                <div className={cx("ui-select", "ui-select-white")} style={styleCombobox} ref={divRef}>
                    <p className={cx("select", "select-white")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option", "option-white")} style={{ top: `${divHeight}px`}}>
                    {renderCategory}
                </div>
            </div>
        )
    )
}
export default Combobox;