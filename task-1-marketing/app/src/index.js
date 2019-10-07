import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {store} from "./redux/state";
import {App} from './App'

let rerenderEntireTree = (state) => {
    let to = state.datesPage.to,
        from = state.datesPage.from;
        
    if (to !== "" && from !== "" && to >= from) {
        store.createSend()

        .then( () => {
            ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
        }) 
    } else {
        state.output = {};
        ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
    }
}

store.getServerData("browsers", store._state.browser.selectBrowser);
// Данные о браузерах
store.getServerData("operating-systems", store._state.sistem.selectSistem);
// Данные о системах
store.getServerData("platforms", store._state.platformPage.selectPlatform);
// Данные о платформах
store.getServerData("groups", store._state.groupBy.selectGroup);
// Данные о группировках
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});

