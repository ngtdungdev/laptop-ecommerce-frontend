import Combobox from "../../../components/Combobox";
import {useState} from "react";
import Import from "./Import";
import Supplier from "./Supplier";
import classNames from "classnames/bind";
import styles from "./Warehouse.module.scss";
import HistoryImport from "./HistoryImport";
import component from "../../../layouts/component.module.scss"
import HistoryImportDetail from "./HistoryImportDetail";

const Warehouse = () => {
    const cx = classNames.bind(styles)
    const cd = classNames.bind(component)
    const [listChoice, setListChoice] = useState([{name: 'Nhập hàng'}, {name: 'Lịch sử nhập hàng'}, {name: 'Nhà cung cấp'}]);
    const [option, setOption] = useState(0);
    const handleSelect = (option) => {
        setOption(option)
    }
    const optionPanels = {
        0: Import,
        1: HistoryImport,
        2: Supplier,
    };
    const [clickButton, setClickButton] = useState(0);
    const handleClickButton = (index) => {
        setClickButton(index)
    };
    const optionDialog = {
        0: null,
        1: () => (
            <div className={cd("notification-container")}>
                <div className={cd("ui-background")} onClick={() => handleClickButton(0)}></div>
                <div className={cd("ui-notification-container")}>
                    <HistoryImportDetail handleClickNo={handleClickButton}/>
                </div>
            </div>
        )
    };

    const renderDialog = () => {
        const SelectedDialog = optionDialog[clickButton];
        return SelectedDialog ? <SelectedDialog/> : null;
    };
    const handleSelectOption = () => {
        const SelectedPanel = optionPanels[option];
        if (option === 1) return SelectedPanel ? <SelectedPanel handleClickButton={handleClickButton}/> : null
        else return SelectedPanel ? <SelectedPanel/> : null
    };

    return (
        <div>
            {renderDialog()}
            <div className={cx("ui-container")}>
                <div className={cx("combobox")}>
                    <Combobox listItem={listChoice} handleSelect={handleSelect} isComboboxUI={true}/>
                </div>
                <div className={cx("UI")}>
                    {handleSelectOption()}
                </div>
            </div>
        </div>
    )
};

export default Warehouse;