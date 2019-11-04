import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./Profile.css";


const Profile = (props) => {
 
  return (
    <div className="app-content">

        <ProfileInfo/>

        <MyPosts/>
        
    </div>
  );
};

export default Profile;
