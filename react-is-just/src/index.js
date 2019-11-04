import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import './index.css';
import {App} from './App';
// import {addPost, updateNewPostText, updateNewMessageText} from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App state={store.state} dispatch={store.dispatch.bind(store)} store={store}/>
        </Router>
    </Provider>, document.getElementById('root')
);
