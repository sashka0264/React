import React from 'react';
import Pages from "./Pages/Pages";
import "./List.css";

const List = ({output, selectedGroup, store, page}) => {

    if (Object.keys(output).length !== 0) {

        const tableRow = output.rows.map( (item, i) => {
            return (
                <div key={i} className="app-list">
                    <div className="app-list__item">{i+1}</div>
                    
                    <div className="app-list__item">{item.impressions}</div>
                    <div className="app-list__item">{item.clicks}</div>
                    <div className="app-list__item">{item.money.toFixed(5)}</div>

                    <div className="app-list__item">{item[`${selectedGroup}`]}</div>
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
                    <div className="app-list__item">{selectedGroup}</div>     
                </div>
                {tableRow}
                
                <Pages store={store} page={page}/>
            </div>
        )
    } else {
        return false;
    }
}

export default List;