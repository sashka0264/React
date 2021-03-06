import React from 'react';
import {Provider} from "react-redux";
import {connect} from "react-redux";
import {store} from "./redux/store";
import nextId from "react-id-generator";
import {
  newTaskAC, 
  changeSelectedTaskAC, 
  deleteCardAC, 
  finishSelectedTaskAC, 
  deleteTaskAC,
  newCardAC, 
  newTitleAC
} from "./redux/actions";
import Card from "./components/Card/Card";
import AddOrCreateTask from "./components/AddOrCreateTask/AddOrCreateTask";
import style from  "./app.module.css";

const AppContainer = () => {
  return (
    <Provider store={store}>
        <AppWithState/>
    </Provider>
  )
}
export default AppContainer;

const App = ({finishSelectedTaskAC, newTitleAC, deleteTaskAC, deleteCardAC, 
  changeSelectedTaskAC, newCardAC, itemList, newTaskAC}) => {

  const createNextId = () => {
    return nextId();
  }

  let positionElementEnd, cardIdElementEnd;

  const dragOver = (e) => {
    
    if (e.target.closest(".card") !== null) {
      cardIdElementEnd = e.target.closest(".card").id;

      if (e.target.closest(".content") !== null) {
        positionElementEnd = +e.target.closest(".content").id;
      }
      if (e.target.closest(".task") !== null) {
        positionElementEnd = +e.target.closest(".task").id;
      }
    } 
  }
  
  const dragEnd = () => {
    finishSelectedTaskAC(positionElementEnd, cardIdElementEnd);
  }

  const createNewCard = () => {
    newCardAC(createNextId());
  }
  
  return (
    <div onDragOver={dragOver} onDragEnd={dragEnd} className={style.appCards}>
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
          newTaskAC={newTaskAC}
        />)
      }
      <AddOrCreateTask createNewCard={createNewCard}/>
    </div>
  )
}

const mapStateToProps = ({items}) => ({
  itemList: items
});

const mapDispatchToProps = {
  deleteCardAC, 
  newTaskAC, 
  deleteTaskAC, 
  newCardAC, 
  changeSelectedTaskAC, 
  finishSelectedTaskAC, 
  newTitleAC
}

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);


