import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="app-nav">
      <NavLink to="/profile" className="app-nav__link">Profile</NavLink>
      <NavLink to="/dialogs" className="app-nav__link">Messages</NavLink>
      <NavLink to="/news" className="app-nav__link">News</NavLink>
      <NavLink to="/music" className="app-nav__link">Music</NavLink>
      <NavLink to="/settings" className="app-nav__link">Settings</NavLink>
      
      <div className="app-nav-friends">
        <div className="app-nav-friends__title">Friends:</div>

        <div className="app-nav-friends__items">
          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>

          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;