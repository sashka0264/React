import {
	SEND_MESSAGE,
	ADD_POST,
	FOLLOW,
	UNFOLLOW,
	SET_USERS,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	TOGGLE_IS_LOADING,
	SET_USER_PROFILE,
	SET_USER_DATA,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	SET_USER_STATUS,
	INITIALIZED_SUCCESS,
	DELETE_POST
} from "./actions";


const initialState = {
	app: {
		initialized: false
	},
	auth: {
		userId: null,
		email: null,
		login: null,
		isAuth: false
	},
	profilePage: {
		posts: [ 
			{id: 2, message: "Как у вас всех дела? =)", likes: "12"}, 
			{id: 1, message: "Всем привет!", likes: "0"}
		],
		profile: {},
		status: ""
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
		]
	}, 
	sidebar: {},
	usersPage: {
		pageSize: 30,
		totalUsersCount: 0,
		currentPage: 1,
		users: [],
		loading: false,
		followingInProgress: [] 
	}
};

const reducer = (state = initialState, action) => {

	console.log(action);

	switch (action.type) {
		case SEND_MESSAGE: 
			// с id нужно поработать
			const newMessage = {id: 4, content: action.content};
			return {
				...state,
				messagesPage: {
					...state.messagesPage,
					messages: [
						...state.messagesPage.messages,
						newMessage
					]
				}
			};
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
					]
				}
			};
		case FOLLOW:
			return {
				...state, 
				usersPage: {
					...state.usersPage,
					users: state.usersPage.users.map(user => {
						if (user.id === action.id) {
							return {...user, followed: true};
						} 
						return user;
					})    
				}
			};
		case UNFOLLOW:
			return {
				...state, 
				usersPage: {
					...state.usersPage,
					users: state.usersPage.users.map(user => {
						if (user.id === action.id) {
							return {...user, followed: false};
						} 
						return user;
					})    
				}
			};
		case SET_USERS:
			return {
				...state,
				usersPage: {
					...state.usersPage,
					users: [...action.users]
				}
			};
		case SET_CURRENT_PAGE: 
			return {
				...state,
				usersPage: {
					...state.usersPage,
					currentPage: action.page
				}
			};
		case SET_TOTAL_USERS_COUNT: 
			return {
				...state,
				usersPage: {
					...state.usersPage,
					totalUsersCount: action.count
				}
			};
		case TOGGLE_IS_LOADING:
			return {
				...state,
				usersPage: {
					...state.usersPage,
					loading: action.loadingStatus
				}
			};
		case SET_USER_PROFILE: 
			return {
				...state,
				profilePage: {
					...state.profilePage,
					profile: {...action.profile}
				}
			};
		case SET_USER_DATA:
			return {
				...state,
				auth: {
					...state.auth,
					userId: action.userId,
					email: action.email,
					login: action.login,
					isAuth: action.isAuth
				}
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS: 
			return {
				...state,
				usersPage: {
					...state.usersPage,
					followingInProgress: action.status 
					? [...state.usersPage.followingInProgress, action.userId] 
					: state.usersPage.followingInProgress.filter(id => id !== action.userId) 
				}
			};
		case SET_USER_STATUS:
			return {
				...state,
				profilePage: {
					...state.profilePage,
					status: action.status
				}
			};
		case INITIALIZED_SUCCESS:
			return {
				...state,
				app: {
					...state.app,
					initialized: true
				}
			};
		case DELETE_POST:
			return {
				...state,
				profilePage: {
					...state.profilePage,
					posts: state.profilePage.posts.filter((post) => post.id !== action.id)
				}
			};
		default: 
			return state;
	}
};

export default reducer;