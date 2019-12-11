export const NEW_TASK = "NEW-TASK",
  CHANGE_SELECTED_TASK = "CHANGE-SELECTED-TASK",
  FINISH_SELECTED_TASK = "FINISH-SELECTED-TASK",
  NEW_TITLE = "NEW-TITLE",
  DELETE_TASK = "DELETE-TASK",
  NEW_CARD = "NEW-CARD",
  DELETE_CARD = "DELETE-CARD",
  NEW_ID = "NEW-ID";

export const newTaskAC = (id, text) => ({type: NEW_TASK, id, text}),
  changeSelectedTaskAC = (position, cardId) => ({type: CHANGE_SELECTED_TASK, position, cardId}),
  finishSelectedTaskAC = (position, cardId) => ({type: FINISH_SELECTED_TASK, position, cardId}),
  newTitleAC = (newTitle, cardId) => ({type: NEW_TITLE, newTitle, cardId}),
  deleteTaskAC = (position, cardId) => ({type: DELETE_TASK, position, cardId}),
  deleteCardAC = (cardId) => ({type: DELETE_CARD, cardId}),
  newIdAC = (id) => ({type: NEW_ID, id}),
  newCardAC = (nextId) => ({type: NEW_CARD, nextId});