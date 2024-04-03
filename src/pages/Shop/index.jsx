import styles  from "./Shop.module.scss"
import component  from "../../layouts/component.module.scss"
import classNames from "classnames/bind"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import search from "../../assets/images/search.svg";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    return (
        <div>
            <div className={cx("shop-container")}>
                <div className={cx("ui-shop")}>
                    <div className={cx("ui-shop-top")}>
                        <div className={cx("ui-search", "ui-option")}>
                            <div className={`${cx("next-input")} ${cd("next-input")}`}>
                                <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                    <input className={`${cx("input")} ${cd("input")}`} placeholder={"Search"}/>
                                    <div className={cx("ui-search")}>
                                        <img src={search} alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("ui-combobox", "ui-option")}>
                            <div className={cx("ui-select-container")}>
                                <div className={cx("ui-select")}>
                                    <p className={cx("select")}>LapTop</p>
                                    <FontAwesomeIcon icon={faAngleDown} className={cx("img")}/>
                                </div>
                                <div className={cx("list-option")}>
                                    <div className={"ui-option"}>LapTop</div>
                                    <div className={"ui-option"}>Mouse</div>
                                    <div className={"ui-option"}>KeyBoard</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("ui-tow-bar", "ui-option")}>

                        </div>
                    </div>
                    <div className={cx("ui-shop-bottom")}>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;