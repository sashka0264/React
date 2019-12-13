import reducer from "./reducer";
import {
  newCardAC, 
  deleteCardAC,
  deleteTaskAC,
  newTitleAC,
  newTaskAC,
  finishSelectedTaskAC,
  changeSelectedTaskAC,
} from "./actions";

const state = {
  items: [
    {id: "reducer-test-id", title: "Рабочая доска моего кота", tasks: ["Задача 265", "Задача 771", "Задача 6"]},
    {id: "reducer-test-id2", title: "Еще одна!", tasks: ["Задача, которую нужно перенести отсюда", "Обычная задача"]}
  ],
  selectedTaskPosition: {position: 0, cardId: "reducer-test-id2"}
}

it("The task selection was successful", () => {
	let action = finishSelectedTaskAC(2, "reducer-test-id");
	let newState = reducer(state, action);
  expect(newState.items[0].tasks.length).toBe(4);
  expect(newState.items[1].tasks.length).toBe(1);
  expect(newState.items[0].tasks[2]).toBe("Задача, которую нужно перенести отсюда");
});

it("The selected task has been successfully modified", () => {
	let action = changeSelectedTaskAC(100, 5);
	let newState = reducer(state, action);
  expect(newState.selectedTaskPosition.position).toBe(100);
  expect(newState.selectedTaskPosition.cardId).toBe(5);
});

it("A new task has been successfully created. The ID and text are correct and match", () => {
	let action = newTaskAC("reducer-test-id", "Хм, чтобы такое придумать?");
	let newState = reducer(state, action);
  expect(newState.items[0].tasks.length).toBe(4);
  expect(newState.items[0].tasks[3]).toBe("Хм, чтобы такое придумать?");
});

it("The new card was created successfully with the correct ID", () => {
	let action = newCardAC(17);
	let newState = reducer(state, action);
  expect(newState.items.length).toBe(3);
  expect(newState.items[2].id).toBe(17);
});

it("Deleting a new card was successful", () => {
	let action = deleteCardAC("reducer-test-id");
	let newState = reducer(state, action);
  expect(newState.items.length).toBe(1);
  expect(newState.items[0].id).toBe("reducer-test-id2");
});

it("Deleting a task was successful with the correct ID and POSITION", () => {
	let action = deleteTaskAC(1, "reducer-test-id");
	let newState = reducer(state, action);
  expect(newState.items[0].tasks.length).toBe(2);
  expect(newState.items[0].tasks[0]).toBe("Задача 265");
  expect(newState.items[0].tasks[1]).toBe("Задача 6");
});

it("The title was successfully changed. The card ID and TITLE are correct", () => {
	let action = newTitleAC("Правильное название", "reducer-test-id");
	let newState = reducer(state, action);
  expect(newState.items[0].title).toBe("Правильное название");
});