import {createStore} from "redux";
import reducer from "./reducer";

export const store = createStore(reducer);
// store.subscribe(() => {
//   localStorage.setItem("redux-tesla-store", JSON.stringify(store.getState()));
// });
// конфликт с "react-id-generator", можно заморочиться и написать свой генератор, но
// думаю, правильнее сделать это на back-end 