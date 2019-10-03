// import {rerenderEntireTree} from "../render";
let rerenderEntireTree = () => {};

let state = {
    profilePage: {
        posts: [ 
            {id: 2, message: "Как у вас всех дела? =)", likes: "12"}, 
            {id: 1, message: "Всем привет!", likes: "2"}
        ],
        newPostText: "Я - текст нового поста!"
    },
    messagesPage: {
        dialogs: [ 
            {id: 1, name: "Уля Мирзоева"}, 
            {id: 2, name: "Анна Потапова"}, 
            {id: 3, name: "Влад Балабкин"}, 
            {id: 4, name: "Тимур Костенко"}, 
            {id: 5, name: "Андрей Арчаков"}
        ],
        messages: [ 
            {id: 1, content: "Привет, Саня!"}, 
            {id: 2, content: "Как дела-то?"}, 
            {id: 3, content: "=)"}
        ],
        newMessageText: "Я - текст нового сообщения!"
    }
};

export const addPost = (postMessage) => {
    let newPost = {id: 3, message: postMessage, likes: 0};
    state.profilePage.posts.reverse().push(newPost);
    state.profilePage.posts.reverse();
    state.profilePage.newPostText = "";
    console.log(state.profilePage.posts);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

window.state = state;

export {state};