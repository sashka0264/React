import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.css';
import GotService from "../src/services/gotService"

const got = new GotService();
got.getAllCharacters()
    .then( res => (console.log(res)) )

ReactDOM.render(<App />, document.getElementById('root'));
