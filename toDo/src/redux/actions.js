export const NEW_TASK = "NEW-TASK",
  CHANGE_SELECTED_TASK = "CHANGE-SELECTED-TASK",
  FINISH_SELECTED_TASK = "FINISH-SELECTED-TASK";

export const newTaskAC = (id, text) => ({type: NEW_TASK, id, text}),
  changeSelectedTaskAC = (position, cardId) => ({type: CHANGE_SELECTED_TASK, position, cardId}),
  finishSelectedTaskAC = (position, cardId) => ({type: FINISH_SELECTED_TASK, position, cardId});