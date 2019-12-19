import React from "react";
import ReactDOM from "react-dom"
import {createStore} from "redux";
import {Provider} from "react-redux";// Использует внутри себя Context API 
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector("#root")
);










