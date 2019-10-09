import React from 'react';
import "./Groups.css";
import {newGroupCreator} from "../../redux/groupByReducer";
import {newPlatformCreator} from "../../redux/platformPageReducer";

const Groups = ({name, groupBy, platformPage, store}) => {

    let arr, creator, value;

    if (name === "Group by") {
        arr = groupBy.selectGroup;
        creator = newGroupCreator;
        value = groupBy.selectedGroup;
    } else if (name === "Platform") {
        arr = platformPage.selectPlatform;
        creator = newPlatformCreator;
        value = platformPage.selectedPlatform["label"];
    }   

    const selectElements = arr.map( (item, i) => {
        let x;
        if (name === "Group by") {
            x = item;
        } else if (name === "Platform") {
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

        store.dispatch(action);
    }

    return (
        <div className="app-groups">
            <div className="app-groups__name">{name}</div>
            <select className="app-groups-select" value={value} onChange={changeValue} ref={selectValue}>{selectElements}</select>
        </div>
    )
}

export default Groups;