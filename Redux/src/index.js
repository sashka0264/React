import './styles.css'
import createStore from './createStore';
import rootReducer from './redux/rootReducer';

const counter = document.getElementById('counter'),
  add = document.getElementById('add'),
  del = document.getElementById('sub');

const store = createStore(rootReducer, 0);

add.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

del.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
});

store.subscribe(() => {
  counter.textContent = store.getState();
});

store.dispatch({type: 'INIT'});