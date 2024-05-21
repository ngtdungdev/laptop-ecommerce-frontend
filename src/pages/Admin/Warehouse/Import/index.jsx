import classNames from "classnames/bind";
import styles from "./Import.module.scss"
import Combobox from "../../../../components/Combobox";
import {useState} from "react";
import GroupBox from "../../../../components/GroupBox";
import component from "../../../../layouts/component.module.scss";
import search from "../../../../assets/images/search.svg";
import laptopTest from "../../../../assets/images/laptopTest.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
const Import = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [listCategory, setListCategory] = useState([{ name: 'Lap Top'}, { name: 'Chuột'}, { name: 'Bàn Phím'}, { name: 'Tai nghe'}]);
    const [listProducer, setListProducer] = useState([{ name:'Lenovo'}, { name:'Dell'}, { name:'Asus'}, { name:'Apple'},  { name:'Hewlett-Packard'}, { name:'Toshiba'}]);
    const handleSelectSupplier = () => {

    }
    const handleSelectCategory = () => {

    }
    return (
        <div className={cx("ui-import")}>
            <div className={cx("ui-data-product")}>
                <div className={cx("ui-data")}>
                    <div className={cx("ui-top")}>
                        <div className={cx("ui-idProduct")}>
                            <label className={cd("next-label")}>Mã sản phẩm</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>UR0000001</span>
                            </div>
                        </div>
                        <div className={cx("ui-nameProduct")}>
                            <label className={cd("next-label")}>Tên sản phẩm</label>
                            <div className={`${cd("panel-text")} ${cx("panel-text")}`}>
                                <span>MACBOOK AIR 13 2020 - M1 256GB</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-center")}>
                        <div className={cx("ui-category")}>
                            <label className={cd("next-label")}>Thể loại</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>UR0000001</span>
                            </div>
                        </div>
                        <div className={cx("ui-supplier")}>
                            <label className={cd("next-label")}>Hãng sản xuất</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>UR0000001</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-right")}>
                        <div className={cx("ui-image")}>
                            <label className={cd("next-label")}>Hình ảnh</label>
                            <div className={cx("")}>
                                <img src={laptopTest} alt={""} className={cx("img")}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-bottom")}>
                        <div className={cx("ui-quantity")}>
                            <label className={cd("next-label")}>Số lượng</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>2</span>
                            </div>
                        </div>
                        <div className={cx("ui-price")}>
                            <label className={cd("next-label")}>Giá tiền</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>10.000.000VND</span>
                            </div>
                        </div>
                        <div className={cx("ui-total-amount")}>
                            <label className={cd("next-label")}>Tổng Tiền</label>
                            <div className={`${cd("panel-text")}`}>
                                <span>20.000.000VND</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("ui-button")}>
                        <button className={`${cx("btn-add")} ${cd("btn")}`}>Thêm sản phẩm</button>
                        <button className={`${cx("btn-cancel")} ${cd("btn")}`}>Hủy</button>
                    </div>
                </div>
            </div>
            <div className={cx("ui-list-products")}>
                <div className={cx("ui-table")}>
                    <div className={cx("ui-search")}>
                        <div>
                            <label className={cd("next-label")}>Tìm kiếm</label>
                            <div className={cx("ui-search", "ui-option")}>
                                <div className={`${cx("next-input")} ${cd("next-input")}`}>
                                    <div className={`${cx("combined-input")} ${cd("combined-input")}`}>
                                        <input className={`${cx("input")} ${cd("input")}`}
                                               placeholder={"Search"}/>
                                        <div className={cx("ui-icon")}>
                                            <img src={search} alt={""}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combobox-supplier")}>
                            <label className={cd("next-label")}>Nhà cung cấp</label>
                            <Combobox listItem={listProducer}
                                      handleSelect={handleSelectSupplier} isComboboxUI={true}/>
                        </div>
                        <div className={cx("combobox-category")}>
                            <label className={cd("next-label")}>Loại sản phẩm</label>
                            <Combobox listItem={listCategory}
                                      handleSelect={handleSelectCategory} isComboboxUI={true}/>
                        </div>
                    </div>
                    <table className={cx("table-container")}>
                        <thead>
                        <tr>
                            <th>TT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Thể loại</th>
                            <th>Giá tiền</th>
                            <th>Nhà cung cấp</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        <tr className={cx("item-product")}>
                            <td className={cx("index")}>1</td>
                            <td className={cx("idProduct")}>PR00000001</td>
                            <td className={cx("name-product")}>US00000002</td>
                            <td className={cx("image")}>5-5-2024</td>
                            <td className={cx("category")}>Máy Tính</td>
                            <td className={cx("price")}>Chờ xác nhận</td>
                            <td className={cx("supplier")}>Chưa thanh toán</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={cx("ui-choice-group-box")}>
                        <GroupBox quantity={5}></GroupBox>
                    </div>
                </div>
            </div>
            <div className={cx("ui-bill")}>
                <div className={cx("panel")}>
                    <div className={cx("ui-bill")}>
                        <label className={cd("next-label")}>Mã hóa đơn</label>
                        <div className={`${cd("panel-text")}`}>
                            <span>UR0000001</span>
                        </div>
                    </div>
                    <div className={cx("ui-time")}>
                        <label className={cd("next-label")}>Thời gian</label>
                        <div className={`${cd("panel-text")}`}>
                            <span>05-04-2024 13:37:40</span>
                        </div>
                    </div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("ui-staff")}>
                        <label className={cd("next-label")}>Mã nhân viên</label>
                        <div className={`${cd("panel-text")}`}>
                            <span>ST0000001</span>
                        </div>
                    </div>
                    <div className={cx("ui-nameStaff")}>
                        <label className={cd("next-label")}>Tên nhân viên</label>
                        <div className={`${cd("panel-text")}`}>
                            <span>Nguyễn Thành Long</span>
                        </div>
                    </div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("scroll")}>
                        <div className={cx("item")}>
                            <div className={cx("name")}>
                                <label className={cd("next-label")}>Tên sản phẩm: </label>
                                <span>MACBOOKAIR132020-M1 256GBMACBOOK AIR 13 2020 - M1 256GB</span>
                            </div>
                            <div className={cx("supplier")}>
                                <label className={cd("next-label")}>Nhà cung cấp: </label>
                                <span>Apple</span>
                            </div>
                            <div className={cx("parameter")}>
                                <div className={cx("quantity")}>
                                    <label className={cd("next-label")}>Số lượng: </label>
                                    <span>5</span>
                                </div>
                                <div className={cx("total-amount")}>
                                    <label className={cd("next-label")}>Giá tiền: </label>
                                    <span>50.000.000VND</span>
                                </div>
                            </div>
                            <div className={cx("btn-delete")}>
                                <td className={cx("delete")}>
                                    <button className={`${cd("btn")} ${cx("btn-delete")}`}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("ui-btn")}>
                        <button className={`${cx("btn-confirm")} ${cd("btn")}`}>Xác Nhận</button>
                        <button className={`${cx("btn-cancel")} ${cd("btn")}`}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Import;