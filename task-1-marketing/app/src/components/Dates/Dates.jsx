import React from 'react';
import "./Dates.css";

const Dates = (props) => {
    let dateValue;
    let date = React.createRef();

    if (props.name === "To") {
        dateValue = props.datesPage.to;
    } else if (props.name === "From") {
        dateValue = props.datesPage.from;
    }

    let inputChange = () => {
        props.overwrite(props.name, date.current.value);
    }
    return (
        <div className="app-dates__item">
            <div className="app-dates__item-name">{props.name}*</div>
            <input className="app-dates__item-input" value={dateValue} onChange={inputChange} ref={date} type="date"/>
        </div>   
    )
}

export default Dates;