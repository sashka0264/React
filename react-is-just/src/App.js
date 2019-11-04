import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import {Route, Switch} from "react-router-dom";


const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header/>

        <Navbar/>

        <div className="app-reference">
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" render={() => <Dialogs/>}/> 
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={Users}/>
          </Switch>
      </div>
    </div>
 
  );
};

export {App};
