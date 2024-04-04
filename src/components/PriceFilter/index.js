import classNames from "classnames/bind";
import styles from "./Pricefilter.module.scss";
import "rc-slider/assets/index.css"
import {useEffect, useState} from "react";
import Slider from "rc-slider";

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
                <span className={cx("price-from", "price")}>{range[0]} VND</span>
                <Slider className={cx("slider")} range value={range}  onChange={handleChange} min={min} max={max}/>
                <span className={cx("price-to", "price")}>{range[1]} VND</span>
            </div>
        </div>
    )
}
export default PriceFilter