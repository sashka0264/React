import React from 'react';
import "./List.css";

const List = (props) => {
    return (
        <div className="app-list">
            <div className="app-list__item">{props.day}</div>
            <div className="app-list__item">{props.impressions}</div>
            <div className="app-list__item">{props.conversions}</div>
            <div className="app-list__item">{props.money}</div>
        </div>
    )
}

export default List;