import classNames from "classnames/bind";
import styles from "./product.module.scss";

const ProductItem = () => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx("product-container")}>

        </div>
    )
}
export default ProductItem