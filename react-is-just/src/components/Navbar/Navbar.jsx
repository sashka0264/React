import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app-nav">
        <a href="/profile" className="app-nav__link">Profile</a>
        <a href="/dialogs" className="app-nav__link">Messages</a>
        <a href="/news" className="app-nav__link">News</a>
        <a href="/music" className="app-nav__link">Music</a>
        <a href="/settings" className="app-nav__link">Settings</a>
    </nav>
  );
};

export default Navbar;