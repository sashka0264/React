import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  console.log()
    return (
        <header className="app-header">
            <img className="app-header__image" src="https://siliconprice.com/img/mobileMenuIcon.png"/>
    
            <div className="appHeaderLoginBlock">
              <NavLink to={"/login"}>{props.isAuth ? `${props.login}` : "Регистрация"}</NavLink>
            </div>
        </header>
      );
}

export default Header;