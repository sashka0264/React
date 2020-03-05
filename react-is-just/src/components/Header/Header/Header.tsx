import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

interface IProps {
  isAuth: boolean;
  login: string | null;
  logoutTC: any;
}

const Header = ({isAuth, login, logoutTC}: IProps) => {
  return (
    <header className={style.appHeader}>
      <img alt="menu-burger" className={style.appHeaderImage} src="https://siliconprice.com/img/mobileMenuIcon.png"/>

      <div className={style.appHeaderLoginBlock}>
        <NavLink className={style.appHeaderLogIn} to="/login">
          <span>{isAuth ? `${login}` : "Войти"}</span>
        </NavLink>
        
        <span onClick={() => logoutTC()} className={style.appHeaderLogOut}>
          {isAuth ? "Выйти" : null}
        </span>
      </div>
    </header>
  );
};

export default Header;