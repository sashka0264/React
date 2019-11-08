export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    SEND_MESSAGE = "SEND-MESSAGE",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_POST = "ADD-POST",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET-USERS",
    SET_CURRENT_PAGE = "SET-CURRENT-PAGE",
    SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT",
    TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_USER_DATA = "SET-USER-DATA",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, content: text}),
    sendMessageCreator = (text) => ({type: SEND_MESSAGE, content: text}),
    updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}),
    addPostCreator = (text) => ({type: ADD_POST, postMessage: text}),
    followAC = (id) => ({type: FOLLOW, id}),
    unfollowAC = (id) => ({type: UNFOLLOW, id}),
    setUsersAC = (users) => ({type: SET_USERS, users}),
    setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page}),
    setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count}),
    toggleIsLoadingAC = (loadingStatus) => ({type: TOGGLE_IS_LOADING, loadingStatus}),
    setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile}),
    setUserData = (userId, email, login) => ({type: SET_USER_DATA, userId, email, login}),
    toggleIsFollowingProgressAC = (status, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, status, userId});


