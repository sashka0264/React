import React, {Component} from 'react';
import plus from "./img/plus.svg";
import style from  "./Card.module.css";
import editPng from "./img/edit.png";
import deletePng from "./img/delete.png";

class Card extends Component {
  state = {
    mode: false,
    message: "",
    modeTitle: false,
    modeTitleValue: ""
  }

  dragStart = (index, cardId) => {
    const {changeSelectedTaskAC} = this.props;
    changeSelectedTaskAC(index, cardId);
  }
  // START, фиксируется то элемент, который мы взяли

  createNewTask = (e) => {
    const {newTaskAC, id} = this.props;
    if (this.state.mode && this.state.message !== "") {
      newTaskAC(id, this.state.message);
      this.setState({message: "", mode: false});
    } else {
      this.setState({mode: true});
    }
  }

  modeNewTask = (e) => {
    this.setState({message: e.target.value});
  }

  modeTitle = () => {
    this.setState({modeTitle: true});
  }

  titleModeCancel = () => {
    this.setState({modeTitle: false});
  }

  titleModeChange = (e) => {
    this.setState({modeTitleValue:e.target.value})
  }

  updateNewTitle = () => {
    const {newTitleAC, id} = this.props;
    if (this.state.modeTitleValue !== "") {
      newTitleAC(this.state.modeTitleValue, id);
      this.setState({modeTitleValue: "", modeTitle: false});
    }
  }

  deleteTask = (position, cardId) => {
    const {deleteTaskAC} = this.props;
    deleteTaskAC(position, cardId);
  }

  deleteCard = (cardId) => {
    const {deleteCardAC} = this.props;
    deleteCardAC(cardId);
  }

  render() {
    const {tasks, id, itemTitle} = this.props;

    return (
      <div className={style.appCard} id={id}>
        <div className={style.appCardContent + " content"}>
          {!this.state.modeTitle ? <div className={style.appCardTitle}>
            {itemTitle} 
            <div className={style.appCardSetting}>
              <img src={editPng} alt="edit-icon" onDoubleClick={this.modeTitle}/>
              <img src={deletePng} alt="delete-icon" onDoubleClick={() => this.deleteCard(id)}/>
            </div>
          </div> :

          <div className={style.appCardTitleMode}>
            <input value={this.state.modeTitleValue} onChange={this.titleModeChange} autoFocus/>

            <div>
              <button className={style.appCardTitleModeSave} onClick={this.updateNewTitle}>Сохранить</button>
              <button className={style.appCardTitleModeCancel} onClick={this.titleModeCancel}>Отмена</button>
            </div>
          </div>}

        
          <div>
            {tasks.map((task, i) => <div 
              className={style.appCardTaskItem + " task"} 
              id={i}
              draggable='true'
              
              onDragStart={(e) => {this.dragStart(i, id)}}
              key={i}>
              {task}
              <img src={deletePng} alt="delete-icon" onClick={() => this.deleteTask(i, id)}/>
            </div>)}
          </div>

          {
            this.state.mode ? <textarea className={style.appCardNewTask} value={this.state.message} onChange={this.modeNewTask} autoFocus/> : null
          }
        </div>

        <div className={!this.state.mode ? style.appCardPlus : style.appCardPlusActive} onClick={this.createNewTask}>
          <img className={style.appCardPlusImage} src={plus} alt="plus"/>
          {this.state.mode ? "Добавить задачу" : "Создать задачу"}
        </div>
      </div>
    )
  }
}

export default Card;