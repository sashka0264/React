/* eslint-disable react/prop-types */
import React from "react";
import {NavLink} from "react-router-dom";
import style from "./User.module.css";
import defaultAvatar from "../img/defaultAvatar.png";

const User = ({followingInProgress, unfollowTC, followTC, user}) => {
	return (
    <div key={user.id} className={style.appUsersItem}>
      <div className={style.appUsersItemPersonBlock}>
        <NavLink to={"/profile/" + user.id}>
          <img src={user.photos.small ? user.photos.small : defaultAvatar} 
            className={style.appUsersItemImage}
          />
        </NavLink>
        <div>
          {
            user.followed ? 
            <button 
              disabled={followingInProgress.some(id => id === user.id)} 
              onClick={() => {unfollowTC(user.id);}
              }>Отписаться</button> :

            <button 
              disabled={followingInProgress.some(id => id === user.id)} 
              onClick={() => {followTC(user.id);}
            }>Подписаться</button> 
          }
        </div>
      </div>

      <div className={style.appUsersItemAboutBlock}>

        <div>
          <div className={style.appUsersItemFullname}>{user.name}</div>
          <div className={style.appUsersItemStatus}>{user.status ? user.status : "-"}</div>
        </div>
      </div>
    </div>
  );
};

export default User;