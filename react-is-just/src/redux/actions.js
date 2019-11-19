import {usersAPI, profileAPI, authAPI} from "../services/services";
import {stopSubmit} from "redux-form";

export const SEND_MESSAGE = "SEND-MESSAGE",
	ADD_POST = "ADD-POST",
	FOLLOW = "FOLLOW",
	UNFOLLOW = "UNFOLLOW",
	SET_USERS = "SET-USERS",
	SET_CURRENT_PAGE = "SET-CURRENT-PAGE",
	SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT",
	TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING",
	SET_USER_PROFILE = "SET-USER-PROFILE",
	SET_USER_DATA = "network/auth/SET-USER-DATA",
	TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS",
	SET_USER_STATUS = "SET-USER-STATUS",
	UPDATE_USER_STATUS = "UPDATE-USER-STATUS",
	DELETE_POST = "DELETE-POST",
	INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export const sendMessageCreator = (text) => ({type: SEND_MESSAGE, content: text}),
	addPostCreator = (text) => ({type: ADD_POST, postMessage: text}),
	deletePost = (id) => ({type: DELETE_POST, id}),
	followAC = (id) => ({type: FOLLOW, id}),
	unfollowAC = (id) => ({type: UNFOLLOW, id}),
	setUsersAC = (users) => ({type: SET_USERS, users}),
	setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page}),
	setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count}),
	toggleIsLoadingAC = (loadingStatus) => ({type: TOGGLE_IS_LOADING, loadingStatus}),
	setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile}),
	setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, userId, email, login, isAuth}),
	toggleIsFollowingProgressAC = (status, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, status, userId}),
	setUserStatusAC = (status) => ({type: SET_USER_STATUS, status}),
	updateUserStatusAC = () => ({type: UPDATE_USER_STATUS}),
	initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

const followFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleIsFollowingProgressAC(true, id));
	const data = await apiMethod(id);
	if (data.resultCode === 0) {
		dispatch(actionCreator(id));
	}
	dispatch(toggleIsFollowingProgressAC(false, id));
}

export const unfollowTC = (id) => async (dispatch) => {
	const apiMethod = usersAPI.getDeleteUser.bind(usersAPI),
		actionCreator = unfollowAC;
	followFlow(dispatch, id, apiMethod, actionCreator);
},
followTC = (id) => async (dispatch) => {
	const apiMethod = usersAPI.getPostUser.bind(usersAPI),
		actionCreator = followAC;
	followFlow(dispatch, id, apiMethod, actionCreator);
},
getUsersTC = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsLoadingAC(true));
	const data = await usersAPI.getUsers(currentPage, pageSize);
	dispatch(toggleIsLoadingAC(false));
	dispatch(setUsersAC(data.items));
	dispatch(setTotalUsersCountAC(data.totalCount));
},
getProfileTC = (id) => async (dispatch) => {
	const data = await profileAPI.getProfile(id);
	dispatch(setUserProfileAC(data));
},
getUserStatusTC = (id) => async (dispatch) => {
	const data = await profileAPI.getStatus(id);
	dispatch(setUserStatusAC(data));	
},
updateUserStatusTC = (status) => async (dispatch) => {
	const data = await profileAPI.updateStatus(status);
	if (data.resultCode === 0) {
		dispatch(setUserStatusAC(status));
	}
},
getMeTC = () => async (dispatch) => {
	const data = await authAPI.getMe();
	if (data.resultCode === 0) {
		const {id, email, login} = data.data;
		dispatch(setUserData(id, email, login, true));
	}
},
loginTC = (email, password, rememberMe = false) => async (dispatch) => {
	const data = await authAPI.logIn(email, password, rememberMe)
	if (data.resultCode === 0) {
		dispatch(getMeTC());
	} else {
		const message = (data.messages.length > 0) ? data.messages[0] : "Something wrong",
			action = stopSubmit("login", {_error: `${message}`});
		dispatch(action);
	}
},
logoutTC = () => async (dispatch) => {
	const data = await authAPI.logOut();
	if (data.data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false));
	}
},
initializeAppTC = () => (dispatch) => {
	let promiseGetMe = dispatch(getMeTC());
	promiseGetMe.then(() => {
		dispatch(initializedSuccess())
	})
	Promise.all([promiseGetMe]).then(() => {
		dispatch(initializedSuccess())
	})
	// Если будет много dispatch
};



    


