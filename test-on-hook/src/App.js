import React, {useState, useEffect} from 'react'
import TodoList from './TodoList'
import {Context} from "./context";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoTitle, setTodoTitle] = useState("");

//   const addToDo = (e) => {
//     if (e.key === "Enter" && e.target.value !== "") {
//       setTodos([
//         ...todos,
//         {
//           id: Date.now(), title: e.target.value, completed: false
//         }
//       ])
//     }
//   }

//   // useEffect(() => {
//   //   console.log("init");
//   // }, []);
//   // эмуляция хука componentDidMount(), т.к. срабатывает лишь 1 раз

//   // const handleClick = () => {
//   //   console.log("click")
//   // }

//   useEffect(() => {
//     const raw = localStorage.getItem("todos");
//     setTodos(JSON.parse(raw));
//   }, []);
//   // При первом запуске забираем из localStorage те todoTitle, которые были записаны

//   useEffect(() => {
//     // document.addEventListener("click", handleClick);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     // return () => {
//     //   document.removeEventListener("click", handleClick)
//     // }
//     // удаляем слушатель, чтобы не было утечки памяти
//   }, [todos]);
//   // При каждом изменении todoTitle мы сетаем его в localStorage

//   const removeTodo = id => {
//     setTodos(todos.filter(todo => {
//       return todo.id !== id
//     }))
//   }

//   const toggleTodo = id => {
//     setTodos(todos.map(todo => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed
//       }
//       return todo;
//     }))
//   }

//   return (
//     <Context.Provider value={{
//       removeTodo, toggleTodo
//     }}>
//       <div className="container">
//         <h1>Todo app</h1>

//           <div className="input-field">
//             <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} onKeyPress={addToDo}/>
//             <label>Todo name</label>
//           </div>

//           <TodoList todos={todos} />
//       </div>
//     </Context.Provider>
//   );
// }

const App = () => {
  return (
    <Hello render={data => (
      <h1>Привет, {data}</h1>
    )}/>
  )
}

const Hello = ({render}) => {
  return <>
    Привет Маша
    {render("sasha")}
  </>
}


export default App;