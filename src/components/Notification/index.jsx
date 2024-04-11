import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import iconWarning from "../../assets/images/warning.svg";
import iconSuccess from "../../assets/images/success.svg";
import component from "../../layouts/component.module.scss";

const Notification = ({text, type, handleBtnNotification, handleClickNo}) => {
    const optionIcon = {
        success: iconSuccess,
        warning: iconWarning,
    }
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    return (
        <div className={cx("ui-notification")}>
            <div className={cx("notification-container")}>
                <div className={cx("title")}>
                    <span>Thông báo</span>
                </div>
                <div className={cx("ui-image")}>
                    <img src={optionIcon[type]} alt={""}/>
                </div>
                <div className={cx("name")}>
                    <span>{text}</span>
                </div>
                <div className={cx("button-container")}>
                    <button className={`${cx("btn-yes")} ${cd("btn")}`} onClick={handleBtnNotification}>Yes</button>
                    <button className={`${cx("btn-no")} ${cd("btn")}`} onClick={() => handleClickNo(0)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default Notification