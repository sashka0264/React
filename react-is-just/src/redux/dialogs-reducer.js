const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, content: text});
export const sendMessageCreator = (text) => ({type: SEND_MESSAGE, content: text});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.content;
    } else if (action.type === SEND_MESSAGE && action.content !== "") {
        state.messages.push({id: 4, content: action.content});
        state.newMessageText = "";
    }

    return state;
};

export default dialogsReducer;