/* eslint-disable react/prop-types */
import React from "react";
import style from "./Paginator.module.css";

interface IProps {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged(item:number): void;
}

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}:IProps) => {
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
            onClick={() => {onPageChanged(item); console.log(item)}}>
            {item}
          </span>)
        }
      </div>
    </>
  );
};

export default Paginator;