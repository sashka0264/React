import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"; 
// thunk-и - это то, что мы создавали в action.js, а то, что мы импортируем тут - тоже
// под этим именем, но это другое, это промежуточный уровень, thunkMiddleware, который мы внедряем в наш store
import reducer from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

