import reducer, {initialState} from "./reducer";
import {
	addPostCreator,
	deletePost
} from "./actions";

let state: typeof initialState = initialState;

it("length of new post should be incremented", () => {
	let action = addPostCreator("test-post");
	let newState = reducer(state, action);
	expect(newState.profilePage.posts.length).toBe(3);
});

it("name of new post corresponds to his number", () => {
	let action = addPostCreator("test-post");
	let newState = reducer(state, action);
	expect(newState.profilePage.posts[0].message).toBe("test-post");
});

it("after deleting length of post should be decrement", () => {
	let action = deletePost(1);
	let newState = reducer(state, action);
	expect(newState.profilePage.posts.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
	let action = deletePost(1000);
	let newState = reducer(state, action);
	expect(newState.profilePage.posts.length).toBe(2);
});
