import { CREATE_POST, FETCH_POSTS } from './actions';

const initialState = {
  posts: [],
  fetchedPosts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post
        ]
      }
    case FETCH_POSTS: 
      return {
        ...state,
        fetchedPosts: action.posts
      }
    default:
      return state;
  }
}

export default reducer;