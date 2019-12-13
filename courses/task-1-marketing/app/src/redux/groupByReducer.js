const NEW_GROUP = "NEW-GROUP"

export const newGroupCreator = (value) => ({type: NEW_GROUP, value: value});

const groupByReducer = (state, action) => {
    
    if (action.type === NEW_GROUP) {
        state.selectedGroup = action.value;
    }

    return state;
}

export default groupByReducer;