import {
  NEW_TASK, 
  CHANGE_SELECTED_TASK, 
  FINISH_SELECTED_TASK, 
  NEW_TITLE, 
  DELETE_TASK, 
  DELETE_CARD,
  NEW_CARD
} from "./actions";

let initialState;
if (localStorage["redux-tesla-store"] === undefined) {
  initialState = {
    items: [
      {id: "id-1", title: "s", tasks: ["Задача 265", "Задача 771", "Задача 6"]},
      {id: "id-0", title: "sdsd", tasks: ["Задача 771", "Задача 6"]}
    ],
    selectedTaskPosition: {position: null, cardId: null},
    finishTaskPosition: {position: null, cardId: null}
  }
} else {
  initialState = JSON.parse(localStorage["redux-tesla-store"]);
}

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    
    case DELETE_CARD: 
      return {
        ...state,
        items: state.items.filter((item) => action.cardId !== item.id)
      }
    case DELETE_TASK: 
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.cardId) {
            return {
              ...item,
              tasks: item.tasks.filter((item, i) => i !== action.position) 
            }
          }
          return item;
        })
      }
    case NEW_CARD: 
      const newItem = {id: action.nextId, title: "Новая доска", tasks: []}
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      }
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
    case CHANGE_SELECTED_TASK:
      return {
        ...state,
        selectedTaskPosition: {
          ...state.selectedTaskPosition,
          position: action.position,
          cardId: action.cardId
        }
      }
    case FINISH_SELECTED_TASK: 
      if (state.selectedTaskPosition.cardId === action.cardId && state.selectedTaskPosition.position === action.position) {
        return {
          ...state
        }
      }
      // Если мы хотим перенсти туда же, откуда взяли, то ничего не делаем
      let task;
      state.items.forEach((item) => (item.id === state.selectedTaskPosition.cardId) && 
        item.tasks.forEach((item, i) => (i === state.selectedTaskPosition.position) && (task = item))
      );
      // Получаем task в виде строки, которуй мы хотим перенести

      return {
        ...state,
        items: state.items.map((item) => {

          if (state.selectedTaskPosition.cardId === action.cardId) {
            if (item.id === state.selectedTaskPosition.cardId) {
          
              let arr = item.tasks.filter((item, i) => {
        
                return i !== state.selectedTaskPosition.position;
              });
      
              let left = arr.filter((item, i) => {
                return i < action.position;
              })
      
              let right = arr.filter((item, i) => {
                return i >= action.position;
              })
              return {
                ...item,
                tasks: [...left, task, ...right]
              };
            }
            return item;
          }

          if (state.selectedTaskPosition.cardId !== action.cardId) {
            if (item.id === state.selectedTaskPosition.cardId) {
              return {
                ...item,
                tasks: item.tasks.filter((item, i) => i !== state.selectedTaskPosition.position) 
              }
            }
            // Удаляем таск из старой карточки
            if (item.id === action.cardId) {
              // action position не учел
              // console.log(item.tasks)

              let left = item.tasks.filter((item, i) => {
                return i < action.position;
              })

              let right = item.tasks.filter((item, i) => {
                return i >= action.position;
              })
              

              return {
                ...item,
                tasks: [...left, task, ...right]
              }
            }
            return item;
          }
        }) 
      }
    case NEW_TITLE: 
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.cardId) {
            return {
              ...item,
              title: action.newTitle
            }
          }
          return item;
        })
      }
    default: 
      return state;
  }
}

export default reducer;