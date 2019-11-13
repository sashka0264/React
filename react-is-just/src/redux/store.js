import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk"; 
// thunk-и - это то, что мы создавали в action.js, а то, что мы импортируем тут - тоже
// под этим именем, но это другое, это промежуточный уровень, thunkMiddleware, который мы внедряем в наш store
import reducer from "./reducer";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({global: reducer, form: formReducer});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;