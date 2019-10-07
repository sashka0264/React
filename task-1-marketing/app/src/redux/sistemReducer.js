const NEW_SISTEM = "NEW-SISTEM";

export const newSistemCreator = (result) => ({type: NEW_SISTEM, value: result});

const changeSistem = (state, action) => {

    if (action.type === NEW_SISTEM) {
        state.selectSistem.forEach( (item) => {
     
            if (item.label === action.value) {
                if (item.checked === false) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            }
        });
    
        let arr = [];
        state.selectSistem.forEach( (item) => {
            if (item.checked === true) {
                arr.push("&operatingSystems[]=", item.value);
            }
        })
        state.requestSistem = arr.join("");
    }

    return state;
}

export default changeSistem;