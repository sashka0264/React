import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./Profile.css";

const Profile = (props) => {
 
  return (
    <div className="app-content">

        <ProfileInfo/>

        <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        
    </div>
  );
};

export default Profile;
