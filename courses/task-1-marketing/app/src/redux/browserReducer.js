const NEW_BROWSER = "NEW-BROWSER";

export const newBrowserCreator = (result) => ({type: NEW_BROWSER, value: result});

const browserReducer = (state, action) => {
    if (action.type === NEW_BROWSER) {
        state.selectBrowser.forEach( (item) => {
     
            if (item.label === action.value) {
                if (item.checked === false) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            }
        })
    
        const arr = [];
        state.selectBrowser.forEach( (item) => {
        
            if (item.checked === true) {
                arr.push("&browsers[]=", item.value);
            }
        })
        state.requestBrowser = arr.join("");
    }

    return state;
}

export default browserReducer;