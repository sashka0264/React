import React from 'react';
import "./SelectSistem.css";
import {newSistemCreator} from "../../redux/sistemReducer";

const SelectSistem = (props) => {

    let selectElements = props.sistem.selectSistem.map( (item, index) => {

        return (
            <div key={index} className="app-browsers-items__item">
                <input className="app-browsers-items__item-input" readOnly checked={item.checked} type="checkbox" value={item.label}/>
                <div className="app-browsers-items__item-name">{item.label}</div> 
            </div>
        )
    });

    let selectList = React.createRef();

    let changeValue = (e) => {
        let action = newSistemCreator(e.target.value);
        props.store.dispatch(action);
    }

    return (
        <div className="app-sistems"> 
            <div className="app-sistems__name">{props.name}</div>
            <div className="app-sistems-items" onChange={changeValue} ref={selectList}>{selectElements}</div> 
        </div> 
    )
}

export default SelectSistem;