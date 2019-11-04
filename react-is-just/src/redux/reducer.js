import {
    UPDATE_NEW_MESSAGE_TEXT, 
    SEND_MESSAGE,
    UPDATE_NEW_POST_TEXT,
    ADD_POST,
    FOLLOW,
    UNFOLLOW,
    SET_USERS
} from "./actions";


const initialState = {
    profilePage: {
        posts: [ 
            {id: 2, message: "Как у вас всех дела? =)", likes: "12"}, 
            {id: 1, message: "Всем привет!", likes: "0"}
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
    sidebar: {},
    usersPage: {
        users: [
            // {id: 1, followed: false, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Франческо", status: "Рисую", location: {city: "Рим", country: "Италия"} },
            // {id: 2, followed: false, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Дмитрий", status: "Сижу в офисе :D", location: {city: "Москва", country: "Россия"} },
            // {id: 3, followed: true, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Лара", status: "Хожу по магазинам", location: {city: "Рейкьявик", country: "Исландия"} },
            // {id: 4, followed: true, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Лукас", status: "Стою в пробке", location: {city: "Нью-Йорк", country: "США"} }
        ]
    }
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                messagesPage: {
                    ...state.messagesPage, 
                    newMessageText: action.content
                }
            }
        case SEND_MESSAGE: 
            // с id нужно поработать
            const newMessage = {id: 4, content: action.content}
            return {
                ...state,
                messagesPage: {
                    ...state.messagesPage,
                    messages: [
                        ...state.messagesPage.messages,
                        newMessage
                    ],
                    newMessageText: ""
                }
            }
        case ADD_POST:
            // с id нужно поработать
            const newPost = {id: 3, message: action.postMessage, likes: 0};
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: [
                        newPost,
                        ...state.profilePage.posts
                    ],
                    newPostText: ""
                }
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state, 
                profilePage: {
                    ...state.profilePage,
                    newPostText: action.newText
                }
            }
        case FOLLOW:
            return {
                ...state, 
                usersPage: {
                    ...state.usersPage,
                    users: state.usersPage.users.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed: false}
                        } 
                        return user;
                    })    
                }
            }
        case UNFOLLOW:
            return {
                ...state, 
                usersPage: {
                    ...state.usersPage,
                    users: state.usersPage.users.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed: true}
                        } 
                        return user;
                    })    
                }
            }
        case SET_USERS:
            return {
                ...state,
                usersPage: {
                    ...state.usersPage,
                    users: [
                        ...state.usersPage.users,
                        ...action.users
                    ]
                }
            }
        default: 
            return state
    }
}

export default reducer;