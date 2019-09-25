import React from 'react';
import "./SelectSistem.css";

const SelectSistem = (props) => {

    let selectElements = props.sistem.selectSistem.map( (item) => {
        let checked;

        props.sistem.selectedSistem.forEach( (selectedSistem) => {
            if (selectedSistem === item) {
                checked = true;
            } else {
                checked = false;
            }
        });

        return (
            <div className="app-sistems-items__item">
                {/* <input className="app-sistems-items__item-input" defaultChecked={checked} type="checkbox" value={item}/>
                <div className="app-sistems-items__item-name">{item}</div> */}
            </div>
        )
    })

    let selectList = React.createRef();

    let changeValue = () => {
        props.changeSistem(selectList);
    }

    return (
        <div className="app-sistems"> 
            <div className="app-sistems__name">{props.name}</div>
            <div className="app-sistems-items" onChange={changeValue} ref={selectList}>{selectElements}</div> 
        </div> 
    )
}

export default SelectSistem;