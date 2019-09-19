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

    </nav>
  );
};

export default Navbar;