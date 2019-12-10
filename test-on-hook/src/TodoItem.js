import React, {useContext} from 'react'
import {Context} from "./context"

const TodoItem = ({title, id, completed}) => {

  const {removeTodo, toggleTodo} = useContext(Context);


  const cls = ["todo"];

  if (completed) {
    cls.push("complited");
  }

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => removeTodo(id)}
        >
          delete
        </i>
      </label>
    </li>
  )
}

export default TodoItem;