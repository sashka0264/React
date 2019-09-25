import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {App} from './App'
import {overwrite, changePlatform, changeGroup, changeBrowser, changeSistem, createSend} from "./redux/state";

export let rerenderEntireTree = (state) => {

    if (state.datesPage.to !== "" && state.datesPage.from !== "" && state.datesPage.to >= state.datesPage.from) {
        let request = new XMLHttpRequest();
        createSend(request);
        // В этой функции расписаны настройки нашего запроса
        
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                state.output = JSON.parse(request.response);
                ReactDOM.render(<App state={state} changeSistem={changeSistem} changeBrowser={changeBrowser} changeGroup={changeGroup} changePlatform={changePlatform} overwrite={overwrite}/>, document.getElementById('root'));
            }
        });   
    } else {
        state.output = {};
        ReactDOM.render(<App state={state} changeSistem={changeSistem} changeBrowser={changeBrowser} changeGroup={changeGroup} changePlatform={changePlatform} overwrite={overwrite}/>, document.getElementById('root'));
    }
}
