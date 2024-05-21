import styles from "./UpdateProduct.module.scss"
import classNames from "classnames/bind";
import search from "../../../../assets/images/search.svg";
import component from "../../../../layouts/component.module.scss";
import Combobox from "../../../../components/Combobox";
import {useEffect, useState} from "react";
import laptopTest from "../../../../assets/images/laptopTest.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight ,faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import GroupBox from "../../../../components/GroupBox";
import image from "../../../../assets/images/imageIcon.svg";
import UpdateNotification from "./UpdateNotification";
import Notification from "../../../../components/Notification";
import {loadProducts} from "../../../../utils/load";
import {formatter} from "../../../../utils/currency";
import {useLocation} from "react-router-dom";

const UpdateProduct = () => {
    const cx = classNames.bind(styles);
    const cd = classNames.bind(component);
    const location = useLocation();
    const [locationProduct, setLocationProduct] = useState("/admin/products?")
    const [data, setData] = useState(null);
    const [listCategory, setListCategory] = useState([{name: 'Laptop'}, {name: 'Chuột'}, {name: 'Bàn phím'}, {name: 'Tai nghe'}]);
    const [clickButton, setClickButton] = useState(0);
    const [clickedProduct, setClickedProduct] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const extractPageAndSize = (url) => {
        const urlObj = new URL(url, 'http://example.com');
        return urlObj.searchParams.get('page');
    };
    const result = extractPageAndSize(location.pathname + location.search);
    const [page, setPage] = useState(result != null ? result - 1 : 0)
    const [size, setSize] = useState(10);
    const handleCategory = () => {

    };
    const handleClickButton = (index, product) => {
        setClickedProduct(product);
        setClickButton(index);
    };
    const renderButtonBasedOnOption = () => {
        const SelectedButton = optionButtons[clickButton];
        return SelectedButton ? <SelectedButton/> : null;
    };
    const handleBtnNotification = () => {

    };
    const optionButtons = {
        0: null,
        1: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cd("ui-notification-container")}>
                    <UpdateNotification product={clickedProduct}/>
                </div>
            </div>
        ),
        2: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <Notification text={"Bạn có chắc chắn muốn xóa sản phẩm"} type={"warning"}
                                  handleBtnNotification={handleBtnNotification}/>
            </div>
        )
    };

    useEffect(() => {
        const loadListProduct = async () => {
            try {
                await loadProducts(page, size, setData);
            } catch (error) {
                setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
            }
        };

        loadListProduct().then();
    }, [page, size, setData]);

    return (
        <div className={cx("updateProduct-container")}>
            {renderButtonBasedOnOption()}
            <div className={cx("top-container")}>
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
                <div>
                    <Combobox listItem={listCategory}  heightCombobox={2} handleSelect={handleCategory}
                              isComboboxUI={true}/>
                </div>
            </div>
            <div className={cx("bottom-container")}>
                <div className={cx("ui-container")}>
                    <div className={cx("ui-table")}>
                        <table className={cx("table-container")}>
                            <thead>
                            <tr>
                                <th>TT</th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Thể loại</th>
                                <th>Hãng sản xuất</th>
                                <th>Giới thiệu</th>
                                <th>Giá tiền</th>
                                <th>Số lượng</th>
                                <th>Trưng bày</th>
                                <th>Cập nhật</th>
                                <th>Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(data?.content ?? []).map((product, index) => (
                                <tr className={cx("item-product")} key={index}>
                                    <td className={cx("index")}>{index + 1}</td>
                                    <td className={cx("id")}>{product.id}</td>
                                    <td className={cx("name")}>{product.name}</td>
                                    <td className={cx("image")}>
                                        <img src={product.image} alt={""} className={cx("img")}/>
                                    </td>
                                    <td className={cx("category")}>{product.category?.name}</td>
                                    <td className={cx("brand")}>{product.supplier?.name}</td>
                                    <td className={cx("description")}>{product.description}</td>
                                    <td className={cx("price")}>{formatter.format(product.price)}</td>
                                    <td className={cx("quantity")}>{product.quantity}</td>
                                    <td className={cx("display")}>Có</td>
                                    <td className={cx("update")}>
                                        <button className={`${cd("btn")} ${cx("btn-update")}`}
                                                onClick={() => handleClickButton(1, product)}>
                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                        </button>
                                    </td>
                                    <td className={cx("delete")}>
                                        <button className={`${cd("btn")} ${cx("btn-delete")}`}
                                                onClick={() => handleClickButton(2, product)}>
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr className={cx("ui-group-box")}>
                            <td colSpan={12}>
                                    <GroupBox quantity={data?.totalPages ?? 1} page={page + 1} setPage={setPage} location={locationProduct}></GroupBox>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateProduct