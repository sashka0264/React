import React from "react";
import style from  "./AddOrCreateTask.module.css";
import plus from "../Card/img/plus.svg";

const AddOrCreateTask = ({createNewCard}) => {
  return (
    <div className={style.appAddCards} onClick={createNewCard}>
      <img className={style.appCardPlusImage} src={plus} alt="plus"/>
      <span>Добавить карточку</span>
    </div>
  )
}

export default AddOrCreateTask;