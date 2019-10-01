import React from 'react';
import "./GroupBy.css";

const GroupBy = (props) => {
    let selectElements = (props.groupBy.selectGroup).map( (item, index) => {
        item = item[0].toUpperCase() + item.slice(1);
        return (
            <option key={index} className="app-group-select__option">{item}</option>
        );
    });
    
    let selectValue = React.createRef();

    let changeValue = () => {
        let value = selectValue.current.value;
        value = value[0].toLowerCase() + value.slice(1);
        props.changeGroup(value);
    }

    let valueFromProps = props.groupBy.selectedGroup;
    valueFromProps = valueFromProps[0].toUpperCase() + valueFromProps.slice(1);

    return (
        <div className="app-group">
            <div className="app-group__name">{props.name}</div>
            <select className="app-group-select" value={valueFromProps} onChange={changeValue} ref={selectValue}>{selectElements}</select>
        </div>
    )
}

export default GroupBy;