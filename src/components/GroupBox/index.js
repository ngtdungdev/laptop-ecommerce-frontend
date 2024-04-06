import classNames from "classnames/bind";
import styles from "./GroupBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const GroupBox = ({quantity}) => {
    const cx = classNames.bind(styles)
    const [location, setLocation] = useState(1);
    const [options, setOptions] = useState([1, 2, 3]);
    const handleClickLeft = () => {
        const newLocation = Math.max(1, location - 1);
        setLocation(newLocation);

        if (location === options[0] && location > 1) {
            setOptions(options.map(option => option - 1));
        }
    };

    const handleClickRight = () => {
        const newLocation = Math.min(quantity, location + 1);
        setLocation(newLocation);
        if (location === options[2] && location < quantity) {
            setOptions(options.map(option => option + 1));
        }
    };
    const handleClickOption = (id) => {
        setLocation(id)
    };
    return (
        <div className={cx("group-box-container")}>
            <div className={cx("arrow-left")} onClick={handleClickLeft}>
                <FontAwesomeIcon icon={faAngleLeft} className={cx("img")}/>
            </div>
            <div className={cx("group-box")}>
                <>
                    {
                        options.map((option) => (
                        <p key={option}
                           className={cx("option", { "option-selected": location === option })}
                           onClick={() => handleClickOption(option)}>
                            {option}
                        </p>)
                        )
                    }
                </>
            </div>
            <div className={cx("arrow-right")} onClick={handleClickRight}>
                <FontAwesomeIcon icon={faAngleRight} className={cx("img")}/>
            </div>
        </div>
    )
}
export default GroupBox
