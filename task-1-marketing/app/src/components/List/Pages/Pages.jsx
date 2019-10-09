import React from 'react';
import "./Pages.css";
import {newPageCreator} from "../../../redux/changePageReducer";

const Pages = (props) => {
    const arr = [];
    for (let i = 1; i <= props.page.pages; i++) {
        arr.push(i);
    }
    const pages = arr.map( (item, index) => {
        if (item <= props.page.usePage) {
            return (
                <div key={index} className="app-pages__page app-pages__page-active">{item}</div>
            )
        }
        return (
            <div key={index} className="app-pages__page">{item}</div>
        )
    })

    const selectPage = React.createRef();

    const change = (e) => {
        const action = newPageCreator(e.target, e.target.innerHTML);
        props.store.dispatch(action);
    }

    return (
        <div className="app-pages" ref={selectPage} onClick={change}>
            {pages}
        </div>
    )
}

export default Pages;