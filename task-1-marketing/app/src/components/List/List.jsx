import React from 'react';
import Pages from "./Pages/Pages";
import "./List.css";

const List = (props) => {
    if (Object.keys(props.output).length !== 0) {

        const tableRow = props.output.rows.map( (item, i) => {
            return (
                <div key={i} className="app-list">
                    <div className="app-list__item">{i+1}</div>
                    
                    <div className="app-list__item">{item.impressions}</div>
                    <div className="app-list__item">{item.clicks}</div>
                    <div className="app-list__item">{item.money.toFixed(5)}</div>

                    <div className="app-list__item">{item[`${props.selectedGroup}`]}</div>
                </div>
            )
        });

        return (
            <div>
                <div className="app-list">
                    <div className="app-list__item">ID</div>
                    <div className="app-list__item">Impressions</div>
                    <div className="app-list__item">Clicks</div>
                    <div className="app-list__item">Money</div>
                    <div className="app-list__item">{props.selectedGroup}</div>     
                </div>
                {tableRow}
                
                <Pages store={props.store} page={props.page}/>
            </div>
        )
    } else {
        return false;
    }
}

export default List;