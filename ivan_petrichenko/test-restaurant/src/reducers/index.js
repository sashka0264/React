const initialState = {
    menu: [], 
    loading: true,
    error: false,
    items: []
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "MENU-LOADED": 
            return {
                ...state,
                menu: action.payload, 
                loading: false,
                error: false
            }
        case "MENU-REQUESTED": 
            return {
                ...state,
                menu: state.menu, 
                loading: true,
                error: false
            }
        case "MENU-NOT-LOADED": 
            return {
                ...state,
                menu: state.menu, 
                loading: false,
                error: true
            }
        case "ADDED-TO-CARD":
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            }
            return {
                ...state, 
                items: [...state.items, newItem]
            }
        case "DELETE-FROM-CARD":
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state, 
                items: [
                    ...state.items.slice(0, itemIndex), 
                    ...state.items.slice(itemIndex + 1), 
                ]
            }
        default: 
            return state;
    }
}

export default reducer;