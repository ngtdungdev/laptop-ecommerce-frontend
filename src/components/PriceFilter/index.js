import classNames from "classnames/bind";
import styles from "./Pricefilter.module.scss";
import "rc-slider/assets/index.css"
import {useEffect, useState} from "react";
import Slider from "rc-slider";
import {formatter} from "../../utils/currency";

const PriceFilter = ({ min, max, functionCallback }) => {
    const cx = classNames.bind(styles)
    const [range, setRange] = useState([]);

    const handleChange = (newRange) => {
        setRange(newRange);
        functionCallback(newRange);
    };

    useEffect(() => {
        setRange([min, max])
    }, [min, max])
    return (
        <div className={cx("slider-container")}>
            <div className={cx("name-slider")}>Giá Tiền</div>
            <div className={cx("ui-slider")}>
                <span className={cx("price-from", "price")}>{formatter.format(range[0])}</span>
                <Slider className={cx("slider")} range value={range}  onChange={handleChange} min={min} max={max}/>
                <span className={cx("price-to", "price")}>{formatter.format(range[1])}</span>
            </div>
        </div>
    )
}
export default PriceFilter