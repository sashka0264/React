import React from 'react';
import "./PlatformPage.css";

const PlatformPage = (props) => {
    let selectElements = (props.platformPage.selectPlatform).map( (item, index) => {

        return (
            <option key={index} className="app-platform-select__option">{item.label}</option>
        );
    });

    let selectValue = React.createRef();

    let changeValue = () => {
        let value = selectValue.current.value;
        props.changePlatform(value);
    }

    return (
        <div className="app-platform">
            <div className="app-platform__name">{props.name}</div>
            <select className="app-platform-select" value={props.platformPage.selectedPlatform["label"]} onChange={changeValue} ref={selectValue}>{selectElements}</select>
        </div>
    )
}

export default PlatformPage;