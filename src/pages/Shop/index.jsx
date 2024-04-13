import styles  from "./Shop.module.scss"
import component  from "../../layouts/component.module.scss"
import classNames from "classnames/bind"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import search from "../../assets/images/search.svg";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Combobox from "../../components/Combobox";
import {useState} from "react";
import PriceFilter from "../../components/PriceFilter";
import ProductItem from "../../components/ProductItem";
import GroupBox from "../../components/GroupBox";

const Shop = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [pricePage, setPricePage] = useState(5)
    const [priceSlider, setPriceSlider] = useState([0, 100000000]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([priceSlider[0], priceSlider[1]]);
    const [listCategory, setListCategory] = useState(['LapTop', 'Mouse', 'KeyBoard']);
    const handlePriceRangeChange = (newRange) => {
        setSelectedPriceRange(newRange);
    };
    const handleSelect = () => {

    }

    return (
        <div>
            <div className={cx("shop-container")}>
                <div className={cx("ui-shop")}>
                    <div className={cx("ui-shop-top")}>
                        <div className={cx("ui-search", "ui-option")}>
                            <div className={`${cx("next-input")} ${cd("next-input")}`}>
                                <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                    <input className={`${cx("input")} ${cd("input")}`} placeholder={"Search"}/>
                                    <div className={cx("ui-icon")}>
                                        <img src={search} alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("ui-combobox", "ui-option")}>
                            <Combobox listItem={listCategory}  handleSelect={handleSelect} isComboboxUI={true}/>
                        </div>
                        <div className={cx("ui-tow-bar", "ui-option")}>
                            <PriceFilter min={priceSlider[0]} max={priceSlider[1]}
                                         functionCallback={handlePriceRangeChange}/>
                        </div>
                        <div className={cx("ui-button")}>
                            <button className={`${cd("btn")} ${cx("btn-price-filter")}`}>Search</button>
                        </div>
                    </div>
                    <div className={cx("ui-shop-center")}>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>

                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </div>
                    <div className={cx("ui-shop-bottom")}>
                        <GroupBox quantity={pricePage}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;