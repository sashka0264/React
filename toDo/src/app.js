import React, { Component} from 'react';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import nextId from "react-id-generator";
import {store} from "./redux/store";
import {newTaskAC, changeSelectedTaskAC, deleteCardAC, finishSelectedTaskAC, deleteTaskAC, newCardAC, newTitleAC} from "./redux/actions";
import Card from "./components/Card/Card";
import style from  "./app.module.css";
import plus from "./components/Card/img/plus.svg"

const AppContainer = () => {
  return (
    <Provider store={store}>
        <AppWithState/>
    </Provider>
  )
}

class App extends Component {

  state = {
    positionElementEnd: null,
    cardIdElementEnd: null
  }

  createNextId = () => {
    return nextId();
  }

  dragOver = (e) => {
    if (!e.target.classList.contains("task")) {
      if (e.target.classList.contains("content")) {
        this.setState({
          positionElementEnd: e.target.childNodes[0].parentNode.id,
          cardIdElementEnd: e.target.parentNode.id
        })
      }
      return;
    } 

    this.setState({
      positionElementEnd: e.target.childNodes[0].parentNode.id,
      cardIdElementEnd: e.target.parentNode.parentNode.parentNode.id
    })
  }

  dragEnd = () => {
    const {finishSelectedTaskAC} = this.props;
    finishSelectedTaskAC(this.state.positionElementEnd, this.state.cardIdElementEnd);
  }

  createNewCard = () => {
    const {newCardAC} = this.props;
    newCardAC(this.createNextId());
  }
  
  render() {
    const {itemList, newTaskAC, changeSelectedTaskAC, deleteCardAC, newTitleAC, deleteTaskAC} = this.props;
    return (
      <div onDragOver={this.dragOver} onDragEnd={this.dragEnd} className={style.appCards}>
        {
          itemList.map((item) => <Card 
            itemTitle={item.title}
            key={item.id} 
            id={item.id} 
            deleteTaskAC={deleteTaskAC}
            deleteCardAC={deleteCardAC}
            tasks={item.tasks} 
            changeSelectedTaskAC={changeSelectedTaskAC}
            newTitleAC={newTitleAC}
            newTaskAC={newTaskAC}/>
          )
        }
        <div className={style.appAddCards} onClick={this.createNewCard}>
          <img className={style.appCardPlusImage} src={plus} alt="plus"/>
          <span>Добавить карточку</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({items, selectedTaskPosition}) => ({
  itemList: items,
  selectedTaskPosition: selectedTaskPosition
});

const mapDispatchToProps = {
  deleteCardAC, newTaskAC, deleteTaskAC, newCardAC, changeSelectedTaskAC, finishSelectedTaskAC, newTitleAC
}

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

