const initialState = {
    menu: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU-LOADED": 
            return {
                menu: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;