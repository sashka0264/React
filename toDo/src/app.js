import React, { Component} from 'react';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import {store} from "./redux/store";
import {newTaskAC} from "./redux/actions";
import Card from "./components/Card/Card";
import style from  "./app.module.css";
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const AppContainer = () => {
  return (
    <Provider store={store}>
        <AppWithState/>
    </Provider>
  )
}

class App extends Component {

  dragOver = (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName !== "LI") {
      return;
    }
    // если мы взяли не элемент LI
    // const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
    // // айдишка элемента который мы взяли
    // const taIndex = JSON.parse(e.target.dataset.item).newIndex;
    // // айдишка элемента, на который мы навели и держим
    // const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";
    // // если айдишка выбранного элемента больше, чем на который навели, то вверх, иначе вниз

    // if (this.over && e.target.dataset.item !== this.over.dataset.item) {
    //   this.over.classList.remove("drag-up", "drag-down");
    // }

    // if(!e.target.classList.contains(animateName)) {
    //   e.target.classList.add(animateName);
    //   this.over = e.target;
    // }
  }
  
  render() {
    const {itemList, newTaskAC} = this.props;
    return (
      <div onDragOver={this.dragOver} className={style.appCards}>
        {
          itemList.map((item) => <Card key={item.id} id={item.id} tasks={item.tasks} newTaskAC={newTaskAC}/>)
        }
      </div>
    )
  }
}

const mapStateToProps = ({items}) => ({
  itemList: items
});


const AppWithState = connect(mapStateToProps, {newTaskAC})(App);

export default AppContainer;

