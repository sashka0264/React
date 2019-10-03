import React from 'react';
import ReactDOM from 'react-dom';
import {state, subscribe} from "./redux/state";
import './index.css';
import {App} from './App';
import {addPost, updateNewPostText, updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);