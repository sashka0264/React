import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, isAuthUserId, status, updateUserStatusTC, disabledEditMode, changeEditMode, editMode}) => {
	return (
		<>
			<ProfileInfo 
				disabledEditMode={disabledEditMode}
				profile={profile} 
				editMode={editMode} 
				status={status} 
				changeEditMode={changeEditMode} 
				isAuthUserId={isAuthUserId}
				updateUserStatusTC={updateUserStatusTC}/>
			<MyPosts/>
		</>
	)
}

export default Profile;