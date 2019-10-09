import React from 'react';
import "./Groups.css";
import {newGroupCreator} from "../../redux/groupByReducer";
import {newPlatformCreator} from "../../redux/platformPageReducer";

const Groups = (props) => {
    let arr, creator, value;

    if (props.name === "Group by") {
        arr = props.groupBy.selectGroup;
        creator = newGroupCreator;
        value = props.groupBy.selectedGroup;
    } else if (props.name === "Platform") {
        arr = props.platformPage.selectPlatform;
        creator = newPlatformCreator;
        value = props.platformPage.selectedPlatform["label"];
    }   

    const selectElements = arr.map( (item, i) => {
        let x;
        if (props.name === "Group by") {
            x = item;
        } else if (props.name === "Platform") {
            x = item.label;
        }

        return (
            <option key={i} className="app-groups-select__option">{x}</option>
        );
    });
    
    const selectValue = React.createRef();

    const changeValue = () => {
        const value = selectValue.current.value,
            action = creator(value);

        props.store.dispatch(action);
    }

    return (
        <div className="app-groups">
            <div className="app-groups__name">{props.name}</div>
            <select className="app-groups-select" value={value} onChange={changeValue} ref={selectValue}>{selectElements}</select>
        </div>
    )
}

export default Groups;