import classNames from "classnames/bind";
import styles from "./product.module.scss";
import laptop from "../../assets/images/laptopTest.png";
import asus from "../../assets/images/logo-asus.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const ProductItem = () => {
    const cx = classNames.bind(styles)
    const [isClicked, setIsClicked] = useState(false);
    const handleClickButtonCart = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div className={cx("product-container")}>
            <div className={cx("product-top")}>
                <img src={laptop} alt={""}/>
            </div>
            <div className={cx("product-bottom")}>
                <div className={cx("ui-data")}>
                    <div className={cx("icon")}>
                        <img src={asus} alt={""}/>
                    </div>
                    <div className={cx("name-laptop")}>
                        <p>MACBOOK AIR 13 2020 - M1 256GB</p>
                    </div>
                </div>
                <div className={cx("price")}>
                    <p>26.000.000VNĐ</p>
                </div>
                <div className={cx("button-cart")}>
                    <div className={cx("button")}>
                        <p>Add to Cart</p>
                        <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                    </div>
                </div>
            </div>
            <div className={cx("ui-cart", isClicked ? 'clicked-choice' : 'clicked-unChoice')} onClick={handleClickButtonCart}>
                <div className={cx("cart")}>

                </div>
            </div>
        </div>
    )
}
export default ProductItem