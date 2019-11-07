import React from "react";
import Spinner from "../../../Spinner/Spinner";
import defaultAvatar from "./img/defaultAvatar.png";
import "./ProfileInfo.css";

const ProfileInfo = ({profile}) => {
    return (
        (Object.keys(profile).length === 0) ?
        
        <Spinner/> :
        <>
            <div className="app-content-avatarAndDescription">
                <img className="app-content__avatar" src={profile.photos.large}></img>
                
                <div>
                    <div className="app-content__name">{profile.fullName}</div>
                    <div className="app-content__status">изменить статус</div>

                    <div className="app-content__basis">
                        <div>Основная информация</div>
                        <span><span>Обо мне: </span> {profile.aboutMe ? profile.aboutMe : "-"}</span>
                        <span><span>Работа: </span> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "-"}</span>
                    </div>
    
                    <div className="app-content__contacts">
                        <div>Контактная информация</div>
                        <span><span>facebook: </span> {profile.contacts.facebook ? profile.contacts.facebook : "-"}</span>
                        <span><span>website: </span> {profile.contacts.website ? profile.contacts.website : "-"}</span>
                        <span><span>vk: </span> {profile.contacts.vk ? profile.contacts.vk : "-"}</span>
                        <span><span>twitter: </span> {profile.contacts.twitter ? profile.contacts.twitter : "-"}</span>
                        <span><span>instagram: </span> {profile.contacts.instagram ? profile.contacts.instagram : "-"}</span>
                        <span><span>youtube: </span> {profile.contacts.youtube ? profile.contacts.youtube : "-"}</span>
                        <span><span>github: </span> {profile.contacts.github ? profile.contacts.github : "-"}</span>
                    </div>

                </div>
            </div>

            <div>
            
            </div>
        </>
    )
}

export default ProfileInfo;