import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app-nav">
        <a className="app-nav__link">Profile</a>
        <a className="app-nav__link">Messages</a>
        <a className="app-nav__link">News</a>
        <a className="app-nav__link">Music</a>
        <a className="app-nav__link">Settings</a>
    </nav>
  );
};

export default Navbar;