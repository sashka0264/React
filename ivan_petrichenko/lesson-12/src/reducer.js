const initialState = {
    num: 0,
    width: 300,
    height: 300
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {...state, num: state.num + 1, width: state.width + 1, height: state.height + 1}
        case "DEC":
            if (state.width !== 0 & state.height !== 0) {
                return {...state, num: state.num - 1, width: state.width - 1, height: state.height - 1}
            }
            return state;
        case "RND":
            return {...state, num: state.num + action.value, width: state.width + action.value, height: state.height + action.value}
        default: 
            return state;
    }
};

export default reducer;