import classNames from "classnames/bind";
import styles from "./GroupBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const GroupBox = ({quantity, page, setPage, location}) => {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const generateOptions = (page, quantity) => {
            let result = [];
            if (quantity <= 3) {
                for (let i = 1; i <= quantity; i++) {
                    result.push(i);
                }
            } else {
                if (page > 3) {
                    result = [page - 2, page - 1, page];
                } else {
                    result = [1, 2, 3];
                }
            }
            return result;
        };
        setOptions(generateOptions(page, quantity));
    }, [page, quantity]);

    const handleClickLeft = () => {
        const newPage = Math.max(1, page - 1);
        setPage(newPage - 1);
        navigate(`${location}page=${newPage}`);
    };

    const handleClickRight = () => {
        const newPage = Math.min(quantity, page + 1);
        setPage(newPage - 1);
        navigate(`${location}page=${newPage}`);
    };

    const handleClickOption = (option) => {
        setPage(option);
        navigate(`${location}page=${option}`);
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
