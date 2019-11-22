import React from "react";
import {NavLink} from "react-router-dom";
import message from "./img/message.svg";
import news from "./img/news.svg";
import music from "./img/music.svg";
import setting from "./img/setting.svg";
import profile from "./img/profile.svg";
import friends from "./img/friends.svg";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.appNav}>
      <NavLink to="/profile" className={style.appNavLink}>
        <img src={profile} className={style.appNavImage}/>
        Профиль
      </NavLink>

      <NavLink to="/news" className={style.appNavLink}>
        <img src={news} className={style.appNavImage}/>
        Новости
      </NavLink>

      <NavLink to="/dialogs" className={style.appNavLink}>
        <img src={message} className={style.appNavImage}/>
        Сообщения
      </NavLink>

      <NavLink to="/users" className={style.appNavLink}>
        <img src={friends} className={style.appNavImage}/>
        Найти друзей
      </NavLink>

      <NavLink to="/music" className={style.appNavLink}>
        <img src={music} className={style.appNavImage}/>
        Музыка
      </NavLink>

      <NavLink to="/settings" className={style.appNavLink}>
        <img src={setting} className={style.appNavImage}/>
        Настройки
      </NavLink>
    </nav>
  );
};

export default Navbar;