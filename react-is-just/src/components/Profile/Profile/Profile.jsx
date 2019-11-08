import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
	return (
		<>
			<ProfileInfo profile={profile}/>
			<MyPosts/>
		</>
	)
}

export default Profile;