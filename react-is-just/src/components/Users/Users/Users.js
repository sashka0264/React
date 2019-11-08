import React from "react";
import {NavLink} from "react-router-dom";
import {getDeleteUser, getPostUser} from "../../../services/services";
import style from "./Users.module.css";
import defaultAvatar from "./img/defaultAvatar.png";

const Users = (props) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
		pages = [];
			
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div className={style.appUsers}>
			<div>
				<div className={style.appUsersTotal}>Всего пользователей: <span>{props.totalUsersCount}</span></div>
				<div className={style.appUsersPageList}>
					{
						pages.map(item => <span 
						className={props.currentPage === item ? style.appUsersSelectedPage : style.appUsersPage}
						onClick={() => props.onPageChanged(item)}>{item}</span>)
					}
				</div>
			</div>
			{
				props.users.map((item) => {
					return (
						<div key={item.id} className={style.appUsersItem}>
							<div className={style.appUsersItemPersonBlock}>
								<NavLink to={"/profile/" + item.id}>
									<img src={item.photos.small ? item.photos.small : defaultAvatar} 
										className={style.appUsersItemImage}
									/>
								</NavLink>
								<div>
									{
										item.followed ? 
										<button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
											props.toggleIsFollowingProgressAC(true, item.id);

											getDeleteUser(item.id).then(data => {
												if (data.resultCode === 0) {
													props.unfollowAC(item.id)
												}
												props.toggleIsFollowingProgressAC(false, item.id);
											});
										}}>Отписаться</button> :

										<button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
											props.toggleIsFollowingProgressAC(true, item.id);

											getPostUser(item.id).then(data => {
												if (data.resultCode === 0) {
													props.followAC(item.id)
												}
												props.toggleIsFollowingProgressAC(false, item.id);
											});
										}}>Подписаться</button> 
									}
								</div>
							</div>

							<div className={style.appUsersItemAboutBlock}>

								<div>
									<div className={style.appUsersItemFullname}>{item.name}</div>
									<div className={style.appUsersItemStatus}>{item.status}</div>
								</div>

								<div>
									<div className={style.appUsersItemCity}>{"item.location.city"},</div>
									<div>{"item.location.country"}</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Users;