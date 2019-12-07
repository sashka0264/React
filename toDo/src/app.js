import React, { Component} from 'react';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import {store} from "./redux/store";
import {newTaskAC, changeSelectedTaskAC, finishSelectedTaskAC} from "./redux/actions";
import Card from "./components/Card/Card";
import style from  "./app.module.css";

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

  dragOver = (e) => {
    if (!e.target.classList.contains("task")) {
      if (e.target.classList.contains("content")) {
        this.setState({
          positionElementEnd: Number(e.target.childNodes[0].parentNode.id),
          cardIdElementEnd: Number(e.target.parentNode.id)
        })
      }
      return;
    } 

    this.setState({
      positionElementEnd: Number(e.target.childNodes[0].parentNode.id),
      cardIdElementEnd: Number(e.target.parentNode.parentNode.parentNode.id)
    })
  }

  dragEnd = () => {
    this.props.finishSelectedTaskAC(this.state.positionElementEnd, this.state.cardIdElementEnd);
  }
  
  render() {
    const {itemList, newTaskAC, changeSelectedTaskAC} = this.props;
    return (
      <div onDragOver={this.dragOver} onDragEnd={this.dragEnd} className={style.appCards}>
        {
          itemList.map((item) => <Card 
            key={item.id} 
            id={item.id} 
            tasks={item.tasks} 
            changeSelectedTaskAC={changeSelectedTaskAC}
            newTaskAC={newTaskAC}/>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({items, selectedTaskPosition}) => ({
  itemList: items,
  selectedTaskPosition: selectedTaskPosition
});


const AppWithState = connect(mapStateToProps, {newTaskAC, changeSelectedTaskAC, finishSelectedTaskAC})(App);

export default AppContainer;

