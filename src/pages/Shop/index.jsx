import styles  from "./Shop.module.scss"
import component  from "../../layouts/component.module.scss"
import classNames from "classnames/bind"
import search from "../../assets/images/search.svg";
import Combobox from "../../components/Combobox";
import {useEffect, useState} from "react";
import PriceFilter from "../../components/PriceFilter";
import ProductItem from "../../components/ProductItem";
import GroupBox from "../../components/GroupBox";
import {findProducts, loadCategories, loadProducts} from "../../utils/load";
import {useLocation, useNavigate} from "react-router-dom";
import {login, signInWithGoogle, signUp} from "../../utils/firebase/auth";
import SignIn from "../Login/Components/SignIn";
import SignUp from "../Login/Components/SignUp";
import ForgotPassword from "../Login/Components/ForgotPassword";

const Shop = () => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const navigate = useNavigate();
    const location = useLocation();
    const [size, setSize] = useState(10);
    const [pricePage, setPricePage] = useState(5);
    const [data, setData] = useState(null);
    const [selectCombobox, setSelectCombobox] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [searchText, setSearchText] = useState("");
    const [priceSlider, setPriceSlider] = useState([0, 100000000]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([priceSlider[0], priceSlider[1]]);
    const [listCategory, setListCategory] = useState(null);
    const handlePriceRangeChange = (newRange) => {
        setSelectedPriceRange(newRange);
        console.log(selectedPriceRange[0], selectedPriceRange[1]);
    };
    const handleInputChange = (e) => {
        setSearchText(e.target.value); // Cập nhật giá trị của input
    };

    const handleSelect = (text) => {
        setSelectCombobox(text);
    };
    const extractPageAndSize = (url) => {
        const urlObj = new URL(url, 'http://example.com');
        return urlObj.searchParams.get('page');
    };
    const result = extractPageAndSize(location.pathname + location.search);
    const [page, setPage] = useState(result != null ? result - 1 : 0)
    useEffect( () => {
        const loadListCategories = async() => {
            try {
                await loadCategories(setListCategory);
            } catch (error) {
                setErrorMessage("Vui lòng kiểm tra kết nối mạng");
            }
        }
        loadListCategories().then(r => {});
    }, []);
    useEffect(() => {
        console.log(page)
        console.log(location);
        if (location.search.startsWith("?search")) {
            const searchProducts = async () => {
                try {
                    const searchRequest = {
                        text: searchText,
                        category: selectCombobox !== "Tất cả" ? "" : selectCombobox,
                        sliderStart: selectedPriceRange[0],
                        sliderEnd: selectedPriceRange[1],
                        page: page,
                        size: size
                    };
                    await findProducts(setData, searchRequest);
                } catch (error) {
                    setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
                }
            }
            searchProducts().then(r => {})
        } else {
            const loadListProduct = async () => {
                try {
                    await loadProducts(page, size, setData);
                } catch (error) {
                    setErrorMessage("Vui lòng kiểm tra kết nối mạng");
                }
            }
            loadListProduct().then(r => {});
        }
    }, [size, page, location]);

    const searchProducts = ()=> {
        setPage(0);
        navigate(`/shop?search&page=${page + 1}`);
    };
    return (
        <div>
            <div className={cx("shop-container")}>
                <div className={cx("ui-shop")}>
                    <div className={cx("ui-shop-top")}>
                        <div className={cx("ui-search", "ui-option")}>
                            <div className={`${cx("next-input")} ${cd("next-input")}`}>
                                <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                    <input className={`${cx("input")} ${cd("input")}`} placeholder={"Search"}
                                           value={searchText}
                                           onChange={handleInputChange} />
                                    <div className={cx("ui-icon")} onClick={searchProducts}>
                                        <img src={search} alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("ui-combobox", "ui-option")}>
                            <Combobox listItem={listCategory} handleSelect={handleSelect} isComboboxUI={true}/>
                        </div>
                        <div className={cx("ui-tow-bar", "ui-option")}>
                            <PriceFilter min={priceSlider[0]} max={priceSlider[1]}
                                         functionCallback={handlePriceRangeChange}/>
                        </div>
                        <div className={cx("ui-button")}>
                            <button className={`${cd("btn")} ${cx("btn-price-filter")}`} onClick={searchProducts}>Search</button>
                        </div>
                    </div>
                    <div className={cx("ui-shop-center")}>
                        {(data?.content ?? []).map((product) => (
                            <ProductItem key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} image={product.image}/>
                        ))}
                    </div>
                    <div className={cx("ui-shop-bottom")}>
                        <GroupBox quantity={data?.totalPages ?? 1} page={page + 1} setPage={setPage}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;