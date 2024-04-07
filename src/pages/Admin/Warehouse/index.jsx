import styles from "./Warehouse.module.scss"
import classNames from "classnames/bind";
import Combobox from "../../../components/Combobox";
import {useState} from "react";
import AddProduct from "../Product/AddProduct";
import UpdateProduct from "../Product/UpdateProduct";
const Warehouse = () => {
    const cx = classNames.bind(styles)
    const [option, setOption] = useState(0);
    const optionPanels = {
        0: AddProduct,
        1: UpdateProduct,
    };
    const handleSelectOption = () => {
        const SelectedPanel = optionPanels[option];
        return SelectedPanel ? <SelectedPanel /> : null;
    }
    const handleSelect = (option) => {
        setOption(option)
        console.log(option)
    }
    const [listWarehouse, setWarehouse] = useState(['Thêm sản phẩm', 'Cập nhật sản phẩm']);
    return (
        <div className={cx("warehouse-container")}>
            <div className={cx("combobox")}>
                <Combobox listItem={listWarehouse} style={10.5} handleSelect={handleSelect} isComboboxUI={true}/>
            </div>
            {handleSelectOption()}
        </div>
    );
};

export default Warehouse;