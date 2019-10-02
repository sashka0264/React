import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {App} from './App'
import {overwrite, changePlatform, changeGroup, changeBrowser, changeSistem, createSend, changePage} from "./redux/state";

export let rerenderEntireTree = (state) => {
    let to = state.datesPage.to,
        from = state.datesPage.from;
        
    if (to !== "" && from !== "" && to >= from) {
        createSend()

        .then( () => {
            ReactDOM.render(<App state={state} changeSistem={changeSistem} changeBrowser={changeBrowser} changeGroup={changeGroup} changePlatform={changePlatform} overwrite={overwrite} changePage={changePage}/>, document.getElementById('root'));
        }) 
    } else {
        state.output = {};
        ReactDOM.render(<App state={state} changeSistem={changeSistem} changeBrowser={changeBrowser} changeGroup={changeGroup} changePlatform={changePlatform} overwrite={overwrite} changePage={changePage}/>, document.getElementById('root'));
    }
}
