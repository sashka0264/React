import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>

        <Navbar/>

        <div className="app-reference">
          <Route path="/profile" render={ () => <Profile posts={props.posts}/> }/>
          <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/> 
          {/* Когда Route срабатывает, функция возвращает компонент */}

          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
      </div>
    </div>
  </BrowserRouter>
  );
};

export {App};
