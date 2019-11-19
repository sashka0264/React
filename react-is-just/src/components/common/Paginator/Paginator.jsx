import React from "react";
import style from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize),
		pages = [];
			
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
  }
  
	return (
		<>
      <div className={style.appUsersTotal}>Всего пользователей: <span>{totalUsersCount}</span></div>
      <div className={style.appUsersPageList}>
        {
          pages.map(item => <span 
            key={item}
            className={currentPage === item ? style.appUsersSelectedPage : style.appUsersPage}
            onClick={() => onPageChanged(item)}>
            {item}
          </span>)
        }
      </div>
    </>
	)
}

export default Paginator;