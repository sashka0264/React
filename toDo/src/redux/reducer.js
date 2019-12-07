import {NEW_TASK} from "./actions";

const initialState = {
  items: [
    {id: 1, name: "Тестовая доска 1", tasks: ["Пример таска 1", "Пример таска 2"]},
    {id: 2, name: "Тестовая доска 2", tasks: ["Пример таска 3", "Пример таска 4"]}
  ]
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case NEW_TASK: 
      const newMessage = action.text;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              tasks: [...item.tasks, newMessage]
            };
          }
          return item;
        })
      };
    default: 
      return state;
  }
}

export default reducer;