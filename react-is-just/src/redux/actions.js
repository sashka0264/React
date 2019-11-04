export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_POST = "ADD-POST",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET-USERS";

export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, content: text}),
    sendMessageCreator = (text) => ({type: SEND_MESSAGE, content: text}),
    updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}),
    addPostCreator = (text) => ({type: ADD_POST, postMessage: text}),
    followAC = (id) => ({type: FOLLOW, id}),
    unfollowAC = (id) => ({type: UNFOLLOW, id}),
    setUsersAC = (users) => ({type: SET_USERS, users});


