import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status}) => {
	return (
		<>
			<ProfileInfo profile={profile} status={status}/>
			<MyPosts/>
		</>
	)
}

export default Profile;