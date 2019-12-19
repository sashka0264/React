import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <Router>
                <AppHeader total={50}/>

                <Switch>
                    <Route path="/order" exact render={() => <CartPage/>}/> 
                    <Route render={() => <MainPage/>}/> 
                </Switch>

                {/* <Switch>
                    <Route path="/" exact render={() => <MainPage/>}/>
                    <Route path="/order" exact render={() => <CartPage/>}/>
                    <Route render={() => 
                    <div>
                        Такой страницы нет, поэтому Switch отрендерил первый компонент без пути, который нашел
                    </div>}/>
                </Switch> */}
            </Router>
        </div>
    )
}

export default App;