import React from 'react';
import "./GroupBy.css";

const GroupBy = (props) => {
    let selectElements = (props.groupBy.selectGroup).map( (item) => {
        return (
            <option className="app-group-select__option">{item}</option>
        );
    });
    
    let selectValue = React.createRef();

    let changeValue = () => {
        let value = selectValue.current.value;
        props.changeGroup(value);
    }

    return (
        <div className="app-group">
            <div className="app-group__name">{props.name}</div>
            <select className="app-group-select" value={props.groupBy.selectedGroup} onChange={changeValue} ref={selectValue}>{selectElements}</select>
        </div>
    )
}

export default GroupBy;