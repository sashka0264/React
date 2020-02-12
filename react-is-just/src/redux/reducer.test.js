import reducer, {initialState as state} from "./reducer";
import {
	addPostAC,
	deletePostAC,
	sendMessageAC
} from "./actions";

describe("Блок работы с постами", () => {
	test("Новые посты добавляются корректно", () => { // test и it - одно и то же
		let action = addPostAC("test-post"),
			prevLength = state.profilePage.posts.length,
			newState = reducer(state, action);
		expect(newState.profilePage.posts.length).toBeGreaterThan(prevLength); // >, чем prevLength
		expect(newState.profilePage.posts.length).toBeLessThanOrEqual(prevLength + 1); // <=, чем prevLength + 1
		expect(newState.profilePage.posts[0].message).toEqual("test-post"); // toEqual может немного округлить значение, а toBe нет
	});
	
	it("Пост по ID удаляется корректно", () => {
		state.profilePage.posts.push({id: 99, message: "Тестовый пост", likes: 12});
		let action = deletePostAC(99),
			prevLength = state.profilePage.posts.length,
			newState = reducer(state, action);
		expect(newState.profilePage.posts.length).toBe(prevLength - 1);
	});
});

describe("Блок работы с личными сообщениями", () => {
	it("Новые сообщения добавляются корректно", () => {
		let action = sendMessageAC("Привет, я новый текст!"),
			prevLength = state.messagesPage.messages.length,
			newState = reducer(state, action);
		expect(newState.messagesPage.messages[prevLength].content).toBe("Привет, я новый текст!");
	});
});
