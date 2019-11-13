import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.appHeader}>
      <img className={style.appHeaderImage} src="https://siliconprice.com/img/mobileMenuIcon.png"/>

      <div className={style.appHeaderLoginBlock}>
        <NavLink className={style.appHeaderLogIn} to="/login">{props.isAuth ? `${props.login}` : "Войти"}</NavLink>

        <span onClick={() => props.logoutTC()} className={style.appHeaderLogOut}>
          {props.isAuth ? "Выйти" : null}
        </span>
      </div>
    </header>
  );
}

export default Header;