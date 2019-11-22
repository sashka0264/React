import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

// eslint-disable-next-line react/prop-types
const Header = ({isAuth, login, logoutTC}) => {
  return (
    <header className={style.appHeader}>
      <img className={style.appHeaderImage} src="https://siliconprice.com/img/mobileMenuIcon.png"/>

      <div className={style.appHeaderLoginBlock}>
        <NavLink className={style.appHeaderLogIn} to="/login">{isAuth ? `${login}` : "Войти"}</NavLink>

        <span onClick={() => logoutTC()} className={style.appHeaderLogOut}>
          {isAuth ? "Выйти" : null}
        </span>
      </div>
    </header>
  );
};

export default Header;