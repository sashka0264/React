import React from 'react';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from './components/Login/Login';
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.appWrapper}>
      <HeaderContainer/>
      <Navbar/>

      <div className={style.appReference}>
        <Route path="/profile/:userId?" component={ProfileContainer}/>
        <Route path="/dialogs" component={Dialogs}/> 
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/users" component={UsersContainer}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    </div>
  );
};

export default App;
