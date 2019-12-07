import React, {Component} from 'react';
import plus from "./img/plus.svg";
import style from  "./Card.module.css";
import {DragSource} from 'react-dnd'

class Card extends Component {
  state = {
    mode: false,
    message: ""
  }

  dragStart = (e) => {
    this.dragged = e.currentTarget;
    console.log(this.dragged)
  }
  // START, фиксируется то элемент, который мы взяли

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
      <div className={style.appCard}>
        <div className={style.appCardContent}>
          <div className={style.appCardTitle}>Название карточки</div>

          Список задач
          <div>
            {tasks.map((task, i) => <div 
              className={style.appCardTaskItem} 
              draggable='true'
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}
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