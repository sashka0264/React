import React, {useState} from 'react';
import plus from "./img/plus.svg";
import style from  "./Card.module.css";
import editPng from "./img/edit.png";
import deletePng from "./img/delete.png";

const Card = ({changeSelectedTaskAC, newTaskAC, createNextId, id, newTitleAC, tasks, itemTitle, deleteTaskAC, deleteCardAC}) => {
  const [state, setState] = useState({
    mode: false,
    message: "",
    modeTitle: false,
    modeTitleValue: ""
  });

  const dragStart = (index, cardId) => {
    changeSelectedTaskAC(index, cardId);
  }
  // START, фиксируется тот элемент, который мы взяли

  const createNewTask = () => {
    if (state.mode && state.message.trim() !== "") {
      newTaskAC(id, state.message);
      setState({...state, message: "", mode: false});
    } else {
      setState({...state, mode: true});
    }
  }


  const modeNewTask = (e) => {
    if (e.key === undefined) {
      setState({...state, message: e.target.value});
    } else if (e.key === "Enter") {
      createNewTask();
    }

  }

  const modeTitle = () => {
    setState({...state, modeTitle: true});
  }

  const titleModeCancel = () => {
    setState({...state, modeTitle: false});
  }

  const titleModeChange = (e) => {
    if (e.key === undefined) {
      setState({...state, modeTitleValue: e.target.value})
    } else if (e.key === "Enter") {
      updateNewTitle();
    }
  }

  const updateNewTitle = () => {
    if (state.modeTitleValue.trim() !== "") {
      newTitleAC(state.modeTitleValue, id);
      setState({...state, modeTitleValue: "", modeTitle: false});
    }
  }

  const deleteTask = (position, cardId) => {
    deleteTaskAC(position, cardId);
  }

  const deleteCard = (cardId) => {
    deleteCardAC(cardId);
  }

  return (
    <div className={style.appCard + " card"} id={id}>
      <div className={style.appCardContent + " content"}>
        {!state.modeTitle ? <div className={style.appCardTitle}>
          {itemTitle} 
          <div className={style.appCardSetting}>
            <img src={editPng} alt="edit-icon" onClick={modeTitle}/>
            <img src={deletePng} alt="delete-icon" onClick={() => deleteCard(id)}/>
          </div>
        </div> :

        <div className={style.appCardTitleMode}>
          <input maxLength="15" value={state.modeTitleValue} onChange={titleModeChange} onKeyPress={titleModeChange} autoFocus/>

          <div>
            <button className={style.appCardTitleModeCancel} onClick={titleModeCancel}>Отмена</button>
          </div>
        </div>}

      
        <div>
          {tasks.map((task, i) => <div 
            className={style.appCardTaskItem + " task"} 
            id={i}
            draggable='true'
            
            onDragStart={(e) => {dragStart(i, id)}}
            key={i}>
            {task}
            <img src={deletePng} alt="delete-icon" onClick={() => deleteTask(i, id)}/>
          </div>)}
        </div>

        {
          state.mode ? 
          <textarea maxLength="15" className={style.appCardNewTask} value={state.message} onKeyPress={modeNewTask} onChange={modeNewTask} autoFocus/> : 
          null
        }
      </div>

      <div className={!state.mode ? style.appCardPlus : style.appCardPlusActive} onClick={createNewTask}>
        <img className={style.appCardPlusImage} src={plus} alt="plus"/>
        {state.mode ? "Добавить задачу" : "Создать задачу"}
      </div>

      
    </div>
  )
  
}

export default Card;