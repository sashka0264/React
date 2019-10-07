const NEW_PAGE = "NEW-PAGE";

export const newPageCreator = (e) => ({type: NEW_PAGE, obj: e})

const changePageReducer = (state, action) => {
    if (action.type === NEW_PAGE) {
        if (action.obj.target.classList.contains("app-pages__page")) {
            state.usePage = +action.obj.target.innerHTML;
        } 
    }

    return state;
}

export default changePageReducer;