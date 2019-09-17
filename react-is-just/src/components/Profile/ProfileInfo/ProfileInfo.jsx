import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className="app-content-avatarAndDescription">
            <img className="app-content__avatar" src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
            
            <div>
            <div className="app-content__name">Alexandr Kolesnikov</div>
            <div className="app-content__status">изменить статус</div>
            </div>
        </div>
    )
}

export default ProfileInfo;