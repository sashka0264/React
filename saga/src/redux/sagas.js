import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_POSTS, fetchPostsAC } from './actions';

const fetchPosts = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  res = await res.json();
  return res;
}

// ...
 
function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    // yield put(action_creator()) // put для диспатчей, call для вызова
    const res = yield call(fetchPosts);
    yield put(fetchPostsAC(res));
  } catch (err) {

  }
}

export default sagaWatcher;