import React from 'react';
import "./App.css";
import HeaderAPI from "./components/Header/HeaderAPI";
import Navbar from "./components/Navbar/Navbar";
import ProfileAPI from "./components/Profile/ProfileAPI";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersAPI from "./components/Users/UsersAPI";
import {Route, Switch} from "react-router-dom";


const App = () => {
  return (
    
      <div className="app-wrapper">
        <HeaderAPI/>

        <Navbar/>

        <div className="app-reference">
          <Switch>
            <Route path="/profile/:userId?" component={ProfileAPI}/>
            <Route path="/dialogs" render={() => <Dialogs/>}/> 
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={UsersAPI}/>
          </Switch>
      </div>
    </div>
 
  );
};

export {App};
