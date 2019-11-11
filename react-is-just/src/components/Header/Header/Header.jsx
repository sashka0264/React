import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  console.log()
  return (
    <header className={style.appHeader}>
      <img className={style.appHeaderImage} src="https://siliconprice.com/img/mobileMenuIcon.png"/>

      <div className={style.appHeaderLoginBlock}>
        <NavLink to={"/login"}>{props.isAuth ? `${props.login}` : "Войти"}</NavLink>
      </div>
    </header>
  );
}

export default Header;