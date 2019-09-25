import React from 'react';
import "./SelectSistem.css";

const SelectSistem = (props) => {

    let selectElements = props.sistem.selectSistem.map( (item) => {

        return (
            <div className="app-browsers-items__item">
                <input className="app-browsers-items__item-input" readOnly checked={item.checked} type="checkbox" value={item.value}/>
                <div className="app-browsers-items__item-name">{item.value}</div> 
            </div>
        )
    });

    let selectList = React.createRef();

    let changeValue = (e) => {
        props.changeSistem(e);
    }

    return (
        <div className="app-sistems"> 
            <div className="app-sistems__name">{props.name}</div>
            <div className="app-sistems-items" onChange={changeValue} ref={selectList}>{selectElements}</div> 
        </div> 
    )
}

export default SelectSistem;