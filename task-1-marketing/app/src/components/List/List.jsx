import React from 'react';
import "./List.css";

const List = (props) => {

    

    if (Object.keys(props.output).length !== 0) {

        let createElements = props.output.rows.map( (item) => {
            return (
                <div className="app-list">
                    <div className="app-list__item">{item.day}</div>
                    <div className="app-list__item">{item.clicks}</div>
                    <div className="app-list__item">{item.impressions}</div>
                    <div className="app-list__item">{item.money.toFixed(5)}</div>
                </div>
            )
        });

        return (
            <div>
                <div className="app-list">
                    <div className="app-list__item">Day</div>
                    <div className="app-list__item">Clicks</div>
                    <div className="app-list__item">Impressions</div>
                    <div className="app-list__item">Money</div>
                </div>
                {createElements}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

    

    
    
}

export default List;