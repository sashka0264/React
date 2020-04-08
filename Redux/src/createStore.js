const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, {type: '__INIT__'});
  
  const subscribers = [];

  return {
    dispatch(action) { // что-то поменялось
      state = rootReducer(state, action);
      subscribers.forEach((item) => item());
    },
    subscribe(callback) { // механизм подписки
      subscribers.push(callback);
    },
    getState() {
      return state;
    }
  }
};

export default createStore;

const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: "INIT" });

  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((item) => item()); // вызов всех callback-ов, которые подписаны на изменения в store
    },
    subscribe(callback) { // механизм подписки
      subscribers.push(callback)
    },
    getState() {
      return state;
    }
  }
}