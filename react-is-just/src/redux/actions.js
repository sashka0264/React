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
	SET_USER_DATA = "SET-USER-DATA",
	TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS",
	SET_USER_STATUS = "SET-USER-STATUS",
	UPDATE_USER_STATUS = "UPDATE-USER-STATUS",
	CHANGE_EDIT_MODE = "CHANGE-EDIT-MODE",
	INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS",
	DISABLED_EDIT_MODE = "DISABLED-EDIT-MODE";

export const sendMessageCreator = (text) => ({type: SEND_MESSAGE, content: text}),
	addPostCreator = (text) => ({type: ADD_POST, postMessage: text}),
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
	changeEditMode = (status) => ({type: CHANGE_EDIT_MODE, status}),
	initializedSuccess = () => ({type: INITIALIZED_SUCCESS}),
	disabledEditMode = (status) => ({type: DISABLED_EDIT_MODE, status});

export const getUsersTC = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsLoadingAC(true));
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsLoadingAC(false));

			dispatch(setUsersAC(data.items));
			dispatch(setTotalUsersCountAC(data.totalCount));
		});
	};
},
unfollowTC = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgressAC(true, id));
		usersAPI.getDeleteUser(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowAC(id));
			}
			dispatch(toggleIsFollowingProgressAC(false, id));
		});
	}
},
followTC = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingProgressAC(true, id));
		usersAPI.getPostUser(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(followAC(id));
			}
			dispatch(toggleIsFollowingProgressAC(false, id));
		});
	}
},
getProfileTC = (id) => {
	return (dispatch) => {
    profileAPI.getProfile(id).then(data => {
      dispatch(setUserProfileAC(data));
    });
	}
},
getUserStatusTC = (id) => {
	return (dispatch) => {
		profileAPI.getStatus(id).then(data => {
			dispatch(setUserStatusAC(data));
		});
	}
},
updateUserStatusTC = (status) => {
	return (dispatch) => {
		dispatch(disabledEditMode(true));
		profileAPI.updateStatus(status).then(data => {
			if (data.resultCode === 0) {
				dispatch(setUserStatusAC(status));
				dispatch(disabledEditMode(false));
				dispatch(changeEditMode(false));
			}
		});
	}
},
getMeTC = () => {
	return (dispatch) => {
		return authAPI.getMe().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
	}
},
loginTC = (email, password, rememberMe = false) => (dispatch) => {
	authAPI.logIn(email, password, rememberMe).then(data => {
		// с помощью этого return мы возвращаем promise, который потом используем в initializeAppTC, 
		// используя .then
		if (data.resultCode === 0) {
			dispatch(getMeTC());
		} else {
			const message = (data.messages.length > 0) ? data.messages[0] : "Something wrong",
				action = stopSubmit("login", {_error: `${message}`});
			dispatch(action);
		}
	})
},
logoutTC = () => {
	return (dispatch) => {
		authAPI.logOut().then(data => {
			if (data.data.resultCode === 0) {
				dispatch(setUserData(null, null, null, false));
			}
		})
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



    


