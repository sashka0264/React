const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostCreator = (text) => ({type: ADD_POST, postMessage: text});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [ 
        {id: 2, message: "Как у вас всех дела? =)", likes: "12"}, 
        {id: 1, message: "Всем привет!", likes: "2"}
    ],
    newPostText: "Я - текст нового поста!"
};

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {id: 3, message: action.postMessage, likes: 0};

        state.posts.reverse().push(newPost);
        state.posts.reverse();
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    } 

    return state;
};

export default profileReducer;