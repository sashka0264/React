import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {state, getServerData, subscribe} from "./redux/state";
import {App} from './App'
import {overwrite, changePlatform, changeGroup, changeBrowser, changeSistem, createSend, changePage} from "./redux/state";

let rerenderEntireTree = (state) => {
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

getServerData("browsers", state.browser.selectBrowser);
// Данные о браузерах
getServerData("operating-systems", state.sistem.selectSistem);
// Данные о системах
getServerData("platforms", state.platformPage.selectPlatform);
// Данные о платформах
getServerData("groups", state.groupBy.selectGroup);
// Данные о группировках

subscribe(rerenderEntireTree);

