const NEW_DATE = "NEW-DATE";

export const newDateCreator = (name, value) => ({type: NEW_DATE, name: name, value: value});

const datesPageReducer = (state, action) => {
    
    if (action.type === NEW_DATE) {
        if (action.name === "To") {
            state.to = action.value;
            action.value = "";
        } else if (action.name === "From") {
            state.from = action.value;
            action.value = "";
        }
    }

    return state;
}

export default datesPageReducer;