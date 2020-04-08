import { createStore, applyMiddleware, compose  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import noSpamWords from './middleware';
import sagaWatcher from './sagas'
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunkMiddleware, noSpamWords, saga))
);

saga.run(sagaWatcher);

export default store;