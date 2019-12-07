import {
  NEW_TASK, 
  CHANGE_SELECTED_TASK, 
  FINISH_SELECTED_TASK, 
  NEW_TITLE, 
  DELETE_TASK, 
  DELETE_CARD,
  NEW_CARD
} from "./actions";

const initialState = {
  items: [],
  selectedTaskPosition: {position: null, cardId: null},
  finishTaskPosition: {position: null, cardId: null}
};

const reducer = (state = initialState, action) => {
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
      const newItem = {id: action.nextId, title: "Тестовая доска", tasks: []}
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
      if (state.selectedTaskPosition.cardId === action.cardId) {
        return {
          ...state
        }
      }

      let message;
      state.items.forEach((item) => {
        if (item.id === state.selectedTaskPosition.cardId) {
          item.tasks.forEach((item, i) => {
            if (i === state.selectedTaskPosition.position) {
              message = item;
            }
          })
        } 
      });
 
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === state.selectedTaskPosition.cardId) {
            return {
              ...item,
              tasks: item.tasks.filter((item, i) => i !== state.selectedTaskPosition.position) 
            }
          }
          if (item.id === action.cardId) {
            return {
              ...item,
              tasks: [...item.tasks, message]
            }
          }
          return item;
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