import React, {Component} from 'react';
import plus from "./img/plus.svg";
import style from  "./Card.module.css";
import editSvg from "./img/edit.png";

class Card extends Component {
  state = {
    mode: false,
    message: "",
    modeTitle: false,
    modeTitleValue: ""
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
    if (this.state.modeTitleValue !== "") {
      this.props.newTitleAC(this.state.modeTitleValue, this.props.id);
      this.setState({modeTitleValue: "", modeTitle: false});
    }
  }

  render() {
    
    const {tasks} = this.props;

  
    return (
      <div className={style.appCard} id={this.props.id}>
        <div className={style.appCardContent + " content"}>
          {!this.state.modeTitle ? <div className={style.appCardTitle}>
            {this.props.itemTitle} <img src={editSvg} alt="edit-icon" onDoubleClick={this.modeTitle}/>
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