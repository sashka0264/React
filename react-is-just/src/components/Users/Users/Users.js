/* eslint-disable react/prop-types */
import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import style from "./Users.module.css";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollowTC, followTC}) => {
	return (
		<div className={style.appUsers}>
			<Paginator 
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
			/>
			{
				users.map((user) => <User 
					user={user} 
					followingInProgress={followingInProgress}
					unfollowTC={unfollowTC}
					followTC={followTC}
					key={user.id}
				/>)
			}
		</div>
	);
};

export default Users;