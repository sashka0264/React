import React from 'react';
import style from './Paginator.module.css';
import leftArrow from './img/leftArrow.png';
import rightArrow from './img/rightArrow.png';

type PaginatorType = {
  totalUsersCount: number; // всего пользователей
  pageSize: number; // длина страницы
  currentPage: number; // текущая страница
  setPagePeroid: (usePage: number) => void,
  pagePeriod: Record<string, number>,
  onPageChanged(item: number): void;
}

const Paginator = ({totalUsersCount, setPagePeroid, pageSize, currentPage, onPageChanged, pagePeriod}: PaginatorType) => {
  const pagesCount: number = Math.ceil(totalUsersCount / pageSize), // кол-во страниц
    pages: Array<number> = [],
    startPage: number = pagePeriod.usePage === 1 ? 1 : (pagePeriod.usePage * 10) - 9;
			
  for (let i = startPage; i < startPage + 10; i++) {
    if (i > 0 && i <= pagesCount) pages.push(i);
  }

  return (
    <>
      <div className={style.appUsersTotal}>Всего пользователей: <span>{totalUsersCount}</span></div>
      <div className={style.appUsersPageList}>
        {
          startPage > 1 && <img 
            src={ leftArrow } 
            className={style.arrows}
            onClick={() => {
              setPagePeroid(pagePeriod.usePage - 1);
            }}
          /> 
        }
        {
          pages.map(item => <span 
            key={item}
            className={currentPage === item ? style.appUsersSelectedPage : style.appUsersPage}
            onClick={() => {
              onPageChanged(item); 
            }}>
            {item}
          </span>)
        }
        {
          (startPage + 10) < pagesCount && <img 
            src={ rightArrow } 
            className={style.arrows}
            onClick={() => {
              setPagePeroid(pagePeriod.usePage + 1);
            }}
          /> 
        }
      </div>
    </>
  );
};

export default Paginator;