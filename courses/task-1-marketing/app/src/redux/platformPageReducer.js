const NEW_PLATFORM = "NEW-PLATFORM";

export const newPlatformCreator = (value) => ({type: NEW_PLATFORM, value: value})

const platformPageReducer = (state, action) => {
    
    if (action.type === NEW_PLATFORM) {
        state.selectPlatform.forEach( (item) => {
            if (item.label === action.value) {
                state.selectedPlatform = item;
            }
        });
    }

    return state;
}

export default platformPageReducer;