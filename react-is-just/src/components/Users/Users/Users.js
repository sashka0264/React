import React from "react";
import * as axios from "axios";
import style from "./Users.module.css";
import defaultAvatar from "./img/defaultAvatar.png";
import {NavLink} from "react-router-dom";

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
										<button onClick={() => {
											axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
												withCredentials: true,
												headers: {"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}
											})
												.then(response => {
													if (response.data.resultCode === 0) {
														props.unfollowAC(item.id)
													}
												});
										}}>Отписаться</button> :

										<button onClick={() => {
											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
												{},
												{withCredentials: true, headers: {"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}
											})
												.then(response => {
														if (response.data.resultCode === 0) {
																props.followAC(item.id)
														}
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