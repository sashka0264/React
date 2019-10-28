import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from "../hoc";
import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <Router>
                <AppHeader total={50}/>
                <Route path="/" exact render={() => <MainPage/>}/> 
                <Route path="/order" render={() => <CartPage/>}/> 
            </Router>
        </div>
    )
}

export default WithRestoService()(App);