import reducer from "./reducer";
import {
  newCardAC, 
  deleteCardAC,
  deleteTaskAC,
  newTitleAC,
  finishSelectedTaskAC,
  changeSelectedTaskAC,
  newTaskAC
} from "./actions";

const state = {
  items: [{id: "reducer-test-id", title: "Рабочая доска моего кота", tasks: ["Задача 265", "Задача 771", "Задача 6"]}],
  finishTaskPosition: {position: null, cardId: null}
}

it("The new card was created successfully with the correct ID", () => {
	let action = newCardAC(17);
	let newState = reducer(state, action);
  expect(newState.items.length).toBe(2);
  expect(newState.items[1].id).toBe(17);
});

it("The new card was created successfully with the correct ID", () => {
	let action = newCardAC(17);
	let newState = reducer(state, action);
  expect(newState.items.length).toBe(2);
  expect(newState.items[1].id).toBe(17);
});

it("Deleting a new task was successful", () => {
	let action = deleteCardAC("reducer-test-id");
	let newState = reducer(state, action);
  expect(newState.items.length).toBe(0);
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