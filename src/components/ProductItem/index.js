import classNames from "classnames/bind";
import styles from "./product.module.scss";
import laptop from "../../assets/images/laptopTest.png";
import asus from "../../assets/images/logo-asus.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {loadProducts, saveCartItem} from "../../utils/load";

const ProductItem = ({product, handleClick}) => {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();
    const {userLoggedIn, currentUser, isAdmin} = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const handleClickButtonCart = () => {
        if (!userLoggedIn) {
            navigate("/login", {replace: true});
        }
        else {
            setIsClicked(!isClicked);
            saveCart().then(r => {})
        }
    };
    const saveCart = async () => {
        try {
            const cart = {
                userId: currentUser.id,
                cartItems: [
                    {
                        productId: product.id,
                        quantity: 1
                    }
                ]
            };
            await saveCartItem(cart);
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng");
        }
    }
    return (
        <div className={cx("product-container")} key={product.id}>
            <div className={cx("product-top")}>
                <img src={product.image} alt={""}/>
            </div>
            <div className={cx("product-bottom")}>
                <div className={cx("ui-data")}>
                    <div className={cx("icon")}>
                        <img src={asus} alt={""}/>
                    </div>
                    <div className={cx("name-laptop")}>
                        <p>{product.name}</p>
                    </div>
                </div>
                <div className={cx("price")}>
                    <p>{product.price}VNĐ</p>
                </div>
                <div className={cx("button-cart")}>
                    <div className={cx("button")} onClick={() => handleClick(product, 1)}>
                        <p>Xem chi tiết</p>
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