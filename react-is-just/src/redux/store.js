import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk"; 
import logger from "redux-logger";

import reducer from "./reducer";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({global: reducer, form: formReducer});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;