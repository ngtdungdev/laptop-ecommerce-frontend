import classNames from "classnames/bind";
import styles from "./Combobox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Combobox = ({listItem}) => {
    const cx = classNames.bind(styles)
    const renderCategory = listItem.map((item, index) => (
        <div className={cx("option")} key={index}>{item}</div>
    ));
    return (
        <div className={cx("ui-select-container")}>
            <div className={cx("ui-select")}>
                <p className={cx("select")}>LapTop</p>
                <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
            </div>
            <div className={cx("list-option")}>
                {renderCategory}
            </div>
        </div>
    )
}
export default Combobox;