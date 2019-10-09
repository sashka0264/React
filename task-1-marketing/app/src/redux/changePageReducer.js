const NEW_PAGE = "NEW-PAGE";

export const newPageCreator = (obj, number) => ({type: NEW_PAGE, element: obj, page: number});

const changePageReducer = (state, action) => {
    if (action.type === NEW_PAGE) {
        if (action.element.classList.contains("app-pages__page")) {
            state.usePage = +action.page;
        } 
    }

    return state;
}

export default changePageReducer;