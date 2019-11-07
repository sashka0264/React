import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
    return (
        <div className="app-content">
            <ProfileInfo profile={profile}/>
            <MyPosts/>
        </div>
    )
}

export default Profile;