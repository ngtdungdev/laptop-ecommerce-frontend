import classNames from "classnames/bind";
import styles from "./Combobox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";

const Combobox = ({listItem, heightCombobox, handleSelect, isComboboxUI}) => {
    const cx = classNames.bind(styles)
    const [selectedOption, setSelectedOption] = useState(listItem[0]?.name);
    const handleSelectOption = (item, option) => {
        setSelectedOption(item);
        handleSelect(item)
    };
    const [styleDiv, setStyleDiv] = useState([0, 0]);
    const heightRef = useRef(null);
    const wightRef = useRef(null);
    useEffect(() => {
        if (heightRef.current) {
            if (heightRef.current) {
                const height = heightRef.current.offsetHeight;
                setStyleDiv(prevStyle => [height, prevStyle[1]]);
            }
        }
        if (wightRef.current) {
            const width = wightRef.current.offsetWidth;
            setStyleDiv(prevStyle => [prevStyle[0], width]);
        }
    }, []);

    const renderCategory = (listItem || []).map((item, index) => (
        <span
            className={cx("option")}
            key={index}
            onClick={() => handleSelectOption(item.name, index)}
        >
            {item.name}
        </span>
    ));
    return (
        isComboboxUI ?
        (
            <div className={cx("ui-select-container")}>
                <div className={cx("ui-select")} style={{width: `${styleDiv[1] + 15}px`, height: heightCombobox ? `${heightCombobox}rem` : ''}} ref={heightRef}>
                    <p className={cx("select")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option")} style={{ top: `${styleDiv[0]}px`}} ref={wightRef}>
                    {renderCategory}
                </div>
            </div>
        ) : (
            <div className={cx("ui-select-container", "container-white")}>
                <div className={cx("ui-select", "ui-select-white")} style={{width: `${styleDiv[1] + 15}px`, height: heightCombobox ? `${heightCombobox}rem`: ''}} ref={heightRef}>
                    <p className={cx("select", "select-white")}>{selectedOption}</p>
                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                </div>
                <div className={cx("list-option", "option-white")} style={{ top: `${styleDiv[0]}px`}} ref={wightRef}>
                    {renderCategory}
                </div>
            </div>
        )
    )
}
export default Combobox;