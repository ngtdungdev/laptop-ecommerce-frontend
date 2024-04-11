import classNames from "classnames/bind";
import styles from "./SupportClient.module.scss"
import {useState} from "react";
import component from "../../../layouts/component.module.scss";
import UpdateNotification from "../Product/UpdateProduct/UpdateNotification";
import Notification from "../../../components/Notification";
import OrderProcessing from "./OrderProcessing";
import OrderCompleted from "./OrderCompleted";
import OrderCancelled from "./OrderCancelled";
import OrderDetail from "./OrderDetail";
const Support = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [options, setOptions] = useState(1);
    const [status, setStatus] = useState(false);
    const optionComponents = {
        1: {
            backgroundColor: 'orange',
            transform: 'translateX(0)'
        },
        2: {
            backgroundColor: 'green',
            width: '31vh',
            transform: 'translateX(100%)'
        },
        3: {
            backgroundColor: 'red',
            transform: 'translateX(200%)'
        }
    };

    const optionPanel = {
        1: OrderProcessing,
        2: OrderCompleted,
        3: OrderCancelled,
    };
    const optionButtons = {
        0: null,
        1: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cd("ui-notification-container")}>
                    <OrderDetail handleClickNo={handleClickButton}/>
                </div>
            </div>
        ),
        2: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <Notification text={"Bạn có chắc chắn muốn xóa sản phẩm"} type={"warning"}
                              handleBtnNotification={handleClickReceive} handleClickNo={handleClickButton}/>
            </div>
        )
    };
    const [clickButton, setClickButton] = useState(0);
    const handleClickReceive = () => {
        setStatus(!status)
        handleClickButton(0)
    };
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const renderButtonBasedOnOption = () => {
        const SelectedButton = optionButtons[clickButton];
        return SelectedButton ? <SelectedButton/> : null;
    };
    const handleClickOption = (id) => {
        setOptions(id)
    };
    const renderPanel = () => {
        const Panel = optionPanel[options];
        switch (options) {
            case 1: return Panel ? <Panel handleClickButton={handleClickButton} status={status}/> : null;
            case 2: return Panel ? <Panel/> : null;
            case 3: return Panel ? <Panel/> : null;
        }
    };
    return (
        <div className={cx("ui-supportClient")}>
            {renderButtonBasedOnOption()}
            <div className={cx("top-container")}>
                <div className={cx("nameTab-top-container")}>
                    <div className={cx("icon-name", {"active-icon-name1": options === 1})} onClick={() => {handleClickOption(1)}}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_910_396)">
                                <path
                                    d="M12.5 22.5C12.5 19.5125 13.81 16.8325 15.8863 15H5V12.5H17.5V13.8388C18.9713 12.9875 20.6787 12.5 22.5 12.5V3.75C22.5 1.6825 20.8175 0 18.75 0H3.75C1.6825 0 0 1.6825 0 3.75V30H15.8863C13.81 28.1675 12.5 25.4875 12.5 22.5ZM5 6.25H17.5V8.75H5V6.25ZM10 21.25H5V18.75H10V21.25Z"
                                    fill="black"/>
                                <g clipPath="url(#clip1_910_396)">
                                    <path
                                        d="M30 22.5C30 26.6356 26.6356 30 22.5 30C20.8106 30 19.1888 29.4131 17.8819 28.3919L16.2738 30V26.2369C16.2738 25.9075 16.5413 25.6406 16.8706 25.64H20.6337L19.2181 27.0556C20.1656 27.7369 21.3106 28.125 22.5 28.125C25.6019 28.125 28.125 25.6019 28.125 22.5H30ZM22.5 16.875C23.695 16.875 24.8381 17.2612 25.7844 17.9419L24.3663 19.36H28.01C28.4056 19.36 28.7262 19.0394 28.7262 18.6437V15L27.1181 16.6081C25.8131 15.5862 24.1962 15 22.5 15C18.3644 15 15 18.3644 15 22.5H16.875C16.875 19.3981 19.3988 16.875 22.5 16.875ZM24.375 20C25.0656 20 25.625 20.5594 25.625 21.25V25H19.375V21.25C19.375 20.5594 19.9344 20 20.625 20H24.375ZM23.4375 21.25H21.5625V22.5H23.4375V21.25Z"
                                        fill="black"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_910_396">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_910_396">
                                    <rect width="15" height="15" fill="white" transform="translate(15 15)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Đang sử lý</span>
                    </div>
                    <div className={cx("icon-name", {"active-icon-name2": options === 2})} onClick={() => {handleClickOption(2)}}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_910_373)">
                                <path
                                    d="M22.5 15C18.3575 15 15 18.3575 15 22.5C15 26.6425 18.3575 30 22.5 30C26.6425 30 30 26.6425 30 22.5C30 18.3575 26.6425 15 22.5 15ZM23.1687 25.6475C22.7837 26.0338 22.26 26.25 21.7025 26.25C21.145 26.25 20.6225 26.0325 20.2288 25.6387L17.9225 23.4038L19.6637 21.6088L21.7013 23.5838L25.7363 19.615L27.4887 21.3975L23.1687 25.6475ZM12.5 22.5C12.5 19.5125 13.81 16.8325 15.8863 15H5V12.5H17.5V13.8388C18.9713 12.9875 20.6787 12.5 22.5 12.5V3.75C22.5 1.6825 20.8175 0 18.75 0H3.75C1.6825 0 0 1.6825 0 3.75V30H15.8863C13.81 28.1675 12.5 25.4875 12.5 22.5ZM5 6.25H17.5V8.75H5V6.25ZM10 21.25H5V18.75H10V21.25Z"
                                    fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_910_373">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Hoàn thành</span>
                    </div>
                    <div className={cx("icon-name", {"active-icon-name3": options === 3})} onClick={() => {handleClickOption(3)}}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30 22.5C30 26.6375 26.6375 30 22.5 30C18.3625 30 15 26.6375 15 22.5C15 18.3625 18.3625 15 22.5 15C26.6375 15 30 18.3625 30 22.5ZM24.2625 22.5L25.875 20.8875C26.3625 20.4 26.3625 19.6125 25.875 19.125C25.3875 18.6375 24.6 18.6375 24.1125 19.125L22.5 20.7375L20.8875 19.125C20.4 18.6375 19.6125 18.6375 19.125 19.125C18.6375 19.6125 18.6375 20.4 19.125 20.8875L20.7375 22.5L19.125 24.1125C18.6375 24.6 18.6375 25.3875 19.125 25.875C19.375 26.125 19.6875 26.2375 20.0125 26.2375C20.3375 26.2375 20.65 26.1125 20.9 25.875L22.5125 24.2625L24.125 25.875C24.375 26.125 24.6875 26.2375 25.0125 26.2375C25.3375 26.2375 25.65 26.1125 25.9 25.875C26.3875 25.3875 26.3875 24.6 25.9 24.1125L24.2875 22.5H24.2625Z"
                                fill="black"/>
                            <path
                                d="M12.5 22.5C12.5 19.5125 13.81 16.8325 15.8863 15H5V12.5H17.5V13.8388C18.9713 12.9875 20.6787 12.5 22.5 12.5V3.75C22.5 1.6825 20.8175 0 18.75 0H3.75C1.6825 0 0 1.6825 0 3.75V30H15.8863C13.81 28.1675 12.5 25.4875 12.5 22.5ZM5 6.25H17.5V8.75H5V6.25ZM10 21.25H5V18.75H10V21.25Z"
                                fill="black"/>
                        </svg>
                        <span>Đã hủy</span>
                    </div>
                </div>
                <div className={cx("ui-scroll-bar")}>
                    <span className={cx("view-bar")}></span>
                    <span className={cx("scroll-bar")} style={optionComponents[options]}></span>
                </div>
            </div>
            <div className={cx("bottom-container")}>
                <div className={cx("ui-container")}>
                    {renderPanel()}
                </div>
            </div>
        </div>
    );
};

export default Support;