import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="app-nav">

      <NavLink to="/profile" className="app-nav__link">
        <img src="https://image.flaticon.com/icons/svg/126/126486.svg"/>Профиль
      </NavLink>

      <NavLink to="/dialogs" className="app-nav__link">
        <img src="https://image.flaticon.com/icons/svg/126/126475.svg"/>Сообщения
      </NavLink>

      <NavLink to="/news" className="app-nav__link">
        <img src="https://image.flaticon.com/icons/svg/126/126495.svg"/>Новости
      </NavLink>

      <NavLink to="/music" className="app-nav__link">
        <img src="https://image.flaticon.com/icons/svg/126/126493.svg"/>Музыка
      </NavLink>

      <NavLink to="/settings" className="app-nav__link">
        <img src="https://image.flaticon.com/icons/svg/126/126472.svg"/>Настройки
      </NavLink>

    </nav>
  );
};

export default Navbar;