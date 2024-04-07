import star from "../../../assets/images/star.svg";
import profit from "../../../assets/images/profit.svg";
import revenue from "../../../assets/images/revenue.svg";
import expense from "../../../assets/images/expense.svg";
import Combobox from "../../../components/Combobox";
import {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Statistics.module.scss";

const Statistics = () => {
    const [listChart, setListChart] = useState(['Tổng quát', 'Thống kê theo ngày', 'Thống kê theo tháng']);
    const cx = classNames.bind(styles)
    const [option, setOption] = useState(1);
    const handleSelect = (option) => {
        setOption(option)
    }
    return (
        <div className={cx("container")}>
            <div className={cx("info-container")}>
                <div className={cx("panel", "panel-profit")}>
                    <div className={cx("panel-ui")}>
                        <img src={star} alt={""} className={cx("star")}/>
                        <p className={cx("name")}>Lợi nhuận</p>
                        <img src={profit} alt={""} className={cx("img")}/>
                    </div>
                    <div className={cx("money")}>
                        <p>15.000.000VNĐ</p>
                    </div>
                </div>
                <div className={cx("panel", "panel-revenue")}>
                    <div className={cx("panel-ui")}>
                        <img src={star} alt={""} className={cx("star")}/>
                        <p className={cx("name")}>Doanh thu</p>
                        <img src={revenue} alt={""} className={cx("img")}/>
                    </div>
                    <div className={cx("money")}>
                        <p>30.000.000VNĐ</p>
                    </div>
                </div>
                <div className={cx("panel", "panel-expense")}>
                    <div className={cx("panel-ui")}>
                        <img src={star} alt={""} className={cx("star")}/>
                        <p className={cx("name")}>Chi phí</p>
                        <img src={expense} alt={""} className={cx("img")}/>
                    </div>
                    <div className={cx("money")}>
                        <p>10.000.000VNĐ</p>
                    </div>
                </div>
                <div className={cx("combobox")}>
                    <Combobox listItem={listChart} style={11} handleSelect={handleSelect} isComboboxUI={true}/>
                </div>
            </div>
            <div className={cx("chart-container")}>
                <div className={cx("panel-chart")}>
                </div>
            </div>
        </div>
    );
};

export default Statistics;