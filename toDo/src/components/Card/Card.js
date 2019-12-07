import React, {Component} from 'react';
import plus from "./img/plus.svg";
import style from  "./Card.module.css";

class Card extends Component {
  state = {
    mode: false,
    message: ""
  }

 

  dragStart = (index, cardId) => {
    this.props.changeSelectedTaskAC(index, cardId);
 
  }
  // START, фиксируется то элемент, который мы взяли

  dragEnd = (e) => {
    // console.log(e.target);
    // не то
  }

  createNewTask = (e) => {
    if (this.state.mode && this.state.message !== "") {
      this.props.newTaskAC(this.props.id, this.state.message);
      this.setState({message: "", mode: false});
    } else {
      this.setState({mode: true});
    }
  }

  modeNewTask = (e) => {
    this.setState({message: e.target.value});
  }

  render() {
    
    const {tasks} = this.props;

  
    return (
      <div className={style.appCard} id={this.props.id}>
        <div className={style.appCardContent + " content"}>
          <div className={style.appCardTitle}>Название карточки</div>

          Список задач
          <div>
            {tasks.map((task, i) => <div 
              className={style.appCardTaskItem + " task"} 
              id={i}
              draggable='true'
              onDragEnd={this.dragEnd}
              onDragStart={(e) => {this.dragStart(i, this.props.id)}}
              key={i}>{task}
            </div>)}
          </div>

          {/* Создание таска */}
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