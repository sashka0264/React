import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/redux-store";
import './index.css';
import {App} from './App';
// import {addPost, updateNewPostText, updateNewMessageText} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});
// Так как Redux не передает state, то нам нужно его запросить и передать, а не только
// rerenderEntireTree