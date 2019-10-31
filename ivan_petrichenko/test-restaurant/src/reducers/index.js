const initialState = {
    menu: [], 
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "MENU-LOADED": 
            return {
                menu: action.payload, 
                loading: false,
                error: false
            }
        case "MENU-REQUESTED": 
            return {
                menu: state.menu, 
                loading: true,
                error: false
            }
        case "MENU-NOT-LOADED": 
            return {
                menu: state.menu, 
                loading: false,
                error: true
            }
        default: 
            return state;
    }
}

export default reducer;