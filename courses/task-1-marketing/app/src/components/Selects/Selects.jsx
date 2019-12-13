import React from 'react';
import "./Selects.css";
import {newBrowserCreator} from "../../redux/browserReducer";
import {newSistemCreator} from "../../redux/sistemReducer";

const Selects = ({name, selectBrowser, selectSistem, store}) => {
    
    let arr, creator;

    if (name === "Browsers") {
        arr = selectBrowser;
        creator = newBrowserCreator;
    } else if (name === "Select sistem") {
        arr = selectSistem;
        creator = newSistemCreator;
    }   
    
    const selectElements = arr.map( (item, i) => {
        return (
            <div key={i} className="app-selects-items__item">
                <input className="app-selects-items__item-input" readOnly checked={item.checked} type="checkbox" value={item.label}/>
                <div className="app-selects-items__item-name">{item.label}</div> 
            </div>
        )
    });

    const changeValue = (e) => {
        const action = creator(e.target.value);
        store.dispatch(action);
    }

    return (
        <div className="app-selects"> 
            <div className="app-selects__name">{name}</div>
            <div className="app-selects-items" onChange={changeValue}>{selectElements}</div> 
        </div> 
    )
}

export default Selects;