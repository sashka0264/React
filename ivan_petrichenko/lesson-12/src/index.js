import {createStore} from "redux";

const counterElement = document.querySelector(".counter-block"),
    incElement = document.querySelector("#inc"),
    decElement = document.querySelector("#dec"),
    rndElement = document.querySelector("#rnd");

const INC = "INC";
const DEC = "DEC";
const RND = "RND";

const initialState = {
    num: 0,
    width: 300,
    height: 300
};

const inc = () => ({type: INC});
const dec = () => ({type: DEC});
const rnd = () => ({type: RND});
// action-creator

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            state.num += 1;
            state.width += 1;
            state.height += 1;
            return state;
        case DEC:
            if (state.width !== 0 & state.height !== 0) {
                state.num -= 1;
                state.width -= 1;
                state.height -= 1;
            }
            return state;
        case RND:
            state.num = 0;
            state.width = 300;
            state.height = 300;
            return state;
        default: 
            return state;
    }
};

const store = createStore(reducer);

const update = () => {
    document.getElementById("counter").textContent = store.getState().num;
}

store.subscribe(() => {
    counterElement.style.width = `${store.getState().width}px`;
    counterElement.style.height = `${store.getState().height}px`;
    update();
});
// В subscribe - все, что будет выполнятся, при каждом изменении store

incElement.addEventListener("click", () => {
    store.dispatch(inc());
});
decElement.addEventListener("click", () => {
    store.dispatch(dec());
});
rndElement.addEventListener("click", () => {
    store.dispatch(rnd());
});



