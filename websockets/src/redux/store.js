import {createStore} from "redux";
import {reducer} from "redux-form";

export const store = createStore(reducer);

window.store = store;