import React from "react";
import defaultAvatar from "./img/defaultAvatar.png";

const ProfileInfo = (props) => {
    return (
        <div className="app-content-avatarAndDescription">
            <img className="app-content__avatar" src={defaultAvatar}></img>
            
            <div>
            <div className="app-content__name">Александр Колесников</div>
            <div className="app-content__status">изменить статус</div>
            </div>
        </div>
    )
}

export default ProfileInfo;