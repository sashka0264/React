import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Users.module.css";
import defaultAvatar from "./img/defaultAvatar.png";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollowTC, followTC}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize),
		pages = [];
			
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div className={style.appUsers}>
			<div>
				<div className={style.appUsersTotal}>Всего пользователей: <span>{totalUsersCount}</span></div>
				<div className={style.appUsersPageList}>
					{
						pages.map(item => <span 
						className={currentPage === item ? style.appUsersSelectedPage : style.appUsersPage}
						onClick={() => onPageChanged(item)}>{item}</span>)
					}
				</div>
			</div>
			{
				users.map((item) => {
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
										<button 
											disabled={followingInProgress.some(id => id === item.id)} 
											onClick={() => {unfollowTC(item.id)}
											}>Отписаться</button> :

										<button 
											disabled={followingInProgress.some(id => id === item.id)} 
											onClick={() => {followTC(item.id)}
										}>Подписаться</button> 
									}
								</div>
							</div>

							<div className={style.appUsersItemAboutBlock}>

								<div>
									<div className={style.appUsersItemFullname}>{item.name}</div>
									<div className={style.appUsersItemStatus}>{item.status ? item.status : "-"}</div>
								</div>

								<div>
									<div className={style.appUsersItemCity}>city,</div>
									<div>country</div>
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