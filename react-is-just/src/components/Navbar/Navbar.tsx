/* eslint-disable react/prop-types */
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import message from "./img/message.svg";
import news from "./img/news.svg";
import music from "./img/music.svg";
import setting from "./img/setting.svg";
import profile from "./img/profile.svg";
import friends from "./img/friends.svg";
import style from "./Navbar.module.css";

interface IProps {
  isAuth: boolean;
}

const Navbar = ({isAuth}:IProps) => {
  return (
    <nav className={style.appNav}>
      {isAuth && <NavLink to="/profile" className={style.appNavLink}>
        <img alt="profile-icon" src={profile} className={style.appNavImage}/>
        Профиль
      </NavLink>}

      {isAuth && <NavLink to="/news" className={style.appNavLink}>
        <img alt="news-icon" src={news} className={style.appNavImage}/>
        Новости
      </NavLink>}

      {isAuth &&<NavLink to="/dialogs" className={style.appNavLink}>
        <img alt="message-icon" src={message} className={style.appNavImage}/>
        Сообщения
      </NavLink>}

      <NavLink to="/users" className={style.appNavLink}>
        <img alt="friends-icon" src={friends} className={style.appNavImage}/>
        Найти друзей
      </NavLink>

      {isAuth && <NavLink to="/music" className={style.appNavLink}>
        <img alt="music-icon" src={music} className={style.appNavImage}/>
        Музыка
      </NavLink>}

      {isAuth &&<NavLink to="/settings" className={style.appNavLink}>
        <img alt="setting-icon" src={setting} className={style.appNavImage}/>
        Настройки
      </NavLink>}
    </nav>
  );
};

const mapStateToProps = ({global}:any) => ({
  isAuth: global.auth.isAuth
});

export default connect(mapStateToProps, null)(Navbar);