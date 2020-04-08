export const CREATE_POST = 'CREATE_POST',
  REQUEST_POSTS = 'REQUEST_POSTS',
  FETCH_POSTS = 'FETCH_POSTS';

export const createPostAC = (post) => ({ type: CREATE_POST, post }),
  fetchPostsAC = (posts) => ({ type: FETCH_POSTS, posts }),
  fetchPostsTC = () => {
    return {
      type: REQUEST_POSTS
    }
    // saga

    // return async (dispatch) => {
    //   let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    //   res = await res.json();
    //   dispatch(fetchPostsAC(res));
    // }
    // thunk-и
  };