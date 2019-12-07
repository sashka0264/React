import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./app";

ReactDOM.render(<AppContainer/>, document.getElementById('root'));


// class List extends React.Component {
//   state = {...this.props}

//   dragStart = (e) => {
//     this.dragged = e.currentTarget;
//   }
//   // START, фиксируется то элемент, который мы взяли

//   dragEnd = () => {
//     let data = this.state.data;
//     // console.log(data) - тут фиксируется новая, созданная дата
//     let from = Number(this.dragged.dataset.id);
//     // console.log(from) - от какого элемента вытаскивали, его номер в списке
//     let to = Number(this.over.dataset.id);
//     // console.log(to) - на какое место в списке поместили этот элемент
//     data.splice(to, 0, data.splice(from, 1)[0]);
//     // Тут мы выполняем действие по обновлению нашего обьекта даты с элементами
//     this.setState({data: data});
//   }

//   dragOver = (e) => {
//     if (e.target.tagName !== "LI") {
//       return;
//     }
//     // если мы взяли не элемент LI
//     const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
//     // айдишка элемента который мы взяли
//     const taIndex = JSON.parse(e.target.dataset.item).newIndex;
//     // айдишка элемента, на который мы навели и держим
//     const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";
//     // если айдишка выбранного элемента больше, чем на который навели, то вверх, иначе вниз

//     if (this.over && e.target.dataset.item !== this.over.dataset.item) {
//       this.over.classList.remove("drag-up", "drag-down");
//     }

//     if(!e.target.classList.contains(animateName)) {
//       e.target.classList.add(animateName);
//       this.over = e.target;
//     }
//   }
//   render() {
//     let listItems = this.state.data.map((item, i) => {
//       return (
//         <li 
//           data-id={i}
//           key={i}
//           draggable='true'
//           onDragEnd={this.dragEnd}
//           onDragStart={this.dragStart}
//           data-item={JSON.stringify(item)}
//         >{item.color}</li>
//       )
//     });
//     return (
//       <ul onDragOver={this.dragOver}>{listItems}</ul>
//     )
//   }
// }



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           newIndex: 1,
//           color: "red"
//         },

//         {
//           newIndex: 2,
//           color: "green"
//         },

//         {
//           newIndex: 3,
//           color: "blue"
//         },

//         {
//           newIndex: 4,
//           color: "yellow"
//         },

//         {
//           newIndex: 5,
//           color: "orange"
//         },

//         {
//           newIndex: 6,
//           color: "black"
//         }
//       ]
//     }
//   }





//   render() {
//     console.log(this.state)
//     window.data = this.state.data;
//     return (
//       <div>
//         <List data={this.state.data} /> 
//       </div>
//     )
//   }
// }



// ReactDOM.render(
//   <App />,
//   document.getElementById('root'),
// );