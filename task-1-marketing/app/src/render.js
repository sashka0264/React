import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {App} from './App'
import {overwrite, changePlatform, changeGroup, changeBrowser, changeSistem} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} changeSistem={changeSistem} changeBrowser={changeBrowser} changeGroup={changeGroup} changePlatform={changePlatform} overwrite={overwrite}/>, document.getElementById('root'));
    
}
