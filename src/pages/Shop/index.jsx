import styles  from "./Shop.module.scss"
import component  from "../../layouts/component.module.scss"
import classNames from "classnames/bind"
import search from "../../assets/images/search.svg";
import Combobox from "../../components/Combobox";
import {useEffect, useState} from "react";
import PriceFilter from "../../components/PriceFilter";
import ProductItem from "../../components/ProductItem";
import GroupBox from "../../components/GroupBox";
import {loadProducts} from "../../utils/load";

const Shop = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [pricePage, setPricePage] = useState(5)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [data, setData] = useState(null)
    const [listProduct, setListProduct] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [priceSlider, setPriceSlider] = useState([0, 100000000]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([priceSlider[0], priceSlider[1]]);
    const [listCategory, setListCategory] = useState(['LapTop', 'Mouse', 'KeyBoard']);
    const handlePriceRangeChange = (newRange) => {
        setSelectedPriceRange(newRange);
    };
    const handleSelect = () => {

    }
    useEffect(() => {
        loadListProduct();
    }, [page, listProduct]);
    const loadListProduct = async() => {
        try {
            await loadProducts(page,  size, setData);
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng");
        }
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
                        {(data.content ?? []).map((product) => (
                            <ProductItem key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} image={product.image}/>
                        ))}
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