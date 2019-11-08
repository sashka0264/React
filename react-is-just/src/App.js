import React from 'react';
import {Route} from "react-router-dom";
import HeaderAPI from "./components/Header/HeaderAPI";
import Navbar from "./components/Navbar/Navbar";
import ProfileAPI from "./components/Profile/ProfileAPI";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersAPI from "./components/Users/UsersAPI";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.appWrapper}>
      <HeaderAPI/>
      <Navbar/>

      <div className={style.appReference}>
        <Route path="/profile/:userId?" component={ProfileAPI}/>
        <Route path="/dialogs" component={Dialogs}/> 
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/users" component={UsersAPI}/>
      </div>
    </div>
  );
};

export default App;
