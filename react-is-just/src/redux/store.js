import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// Обработчики данных (полученных с UI)

let store = {
    _state: {
        profilePage: {
            posts: [ 
                {id: 2, message: "Как у вас всех дела? =)", likes: "12"}, 
                {id: 1, message: "Всем привет!", likes: "2"}
            ],
            newPostText: ""
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
        }, 
        sidebar: {}
    },
    // Обьект со всеми данными

    _rerenderEntireTree() {},
    // Наш _rerenderEntireTree

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    // Наш _rerenderEntireTree

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this._state);
    }
    // Тут происходит преобразование state и перерисовка в конце
};
window.store = store;

export {store};

