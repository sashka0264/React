import React from 'react';
import "./Dates.css";
import {newDateCreator} from "../../redux/datesPageReducer";

const Dates = ({name, datesPage, store}) => {

    let dateValue;
    const date = React.createRef();

    if (name === "To") {
        dateValue = datesPage.to;
    } else if (name === "From") {
        dateValue = datesPage.from;
    }

    const inputChange = () => {
        const action = newDateCreator(name, date.current.value);
        store.dispatch(action);
    }
    return (
        <div className="app-dates__item">
            <div className="app-dates__item-name">{name}*</div>
            <input className="app-dates__item-input" value={dateValue} onChange={inputChange} ref={date} type="date"/>
        </div>   
    )
}

export default Dates;