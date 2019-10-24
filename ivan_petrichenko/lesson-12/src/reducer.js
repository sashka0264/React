const initialState = {
    num: 0,
    width: 300,
    height: 300
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            state.num += 1;
            state.width += 1;
            state.height += 1;
            return state;
        case "DEC":
            if (state.width !== 0 & state.height !== 0) {
                state.num -= 1;
                state.width -= 1;
                state.height -= 1;
            }
            return state;
        case "RND":
            state.num = 0;
            state.width = 300;
            state.height = 300;
            return state;
        default: 
            return state;
    }
};

export default reducer;