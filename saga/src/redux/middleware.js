import { CREATE_POST } from './actions';

const spam = ['php'];

function noSpamWords({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = spam.filter((item) => action.post.title.includes(item)); 
        // содержится ли в строке искомое значение
        if (found.length) {
          return dispatch({ type: "ERROR" });
        }
      }
      return next(action);
    }
  }
}

export default noSpamWords;