import classNames from "classnames/bind";
import styles from "./GroupBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const GroupBox = ({quantity, page, setPage}) => {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();
    const [options, setOptions] = useState([1, 2, 3]);
    const handleClickLeft = () => {
        const newLocation = Math.max(1, page - 1);
        navigate(`?page=${newLocation}`);
        setPage(newLocation - 1);
        if (page === options[0] && page > 1) {
            setOptions(options.map(option => option - 1));
        }
    };

    const handleClickRight = () => {
        const newLocation = Math.min(quantity, page + 1);
        navigate(`?page=${newLocation}`);
        setPage(newLocation - 1);
        if (page === options[2] && page < quantity) {
            setOptions(options.map(option => option + 1));
        }
    };
    const handleClickOption = (index) => {
        navigate(index);
        setPage(index - 1);
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
                           className={cx("option", { "option-selected": page === option })}
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
