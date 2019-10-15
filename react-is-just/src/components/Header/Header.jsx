import React from 'react';
import "./Header.css";

const Header = (props) => {
  return (
    <header className="app-header">
        <img className="app-header__image" src="https://siliconprice.com/img/mobileMenuIcon.png"></img>
        <input className="app-header__search" placeholder="Найти Друга"/>
    </header>
  );
};


 
export default Header;