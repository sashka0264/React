import React from 'react';
import "./Pages.css";
import {newPageCreator} from "../../../redux/changePageReducer";

const Pages = ({page, store}) => {

    const arr = [];
    for (let i = 1; i <= page.pages; i++) {
        arr.push(i);
    }
    const pages = arr.map( (item, index) => {
        if (item <= page.usePage) {
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
        store.dispatch(action);
    }

    return (
        <div className="app-pages" ref={selectPage} onClick={change}>
            {pages}
        </div>
    )
}

export default Pages;