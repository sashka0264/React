const menuLoaded = (newMenu) => {
    return {
        type: "MENU-LOADED",
        payload: newMenu
    }
}

const menuRequested= () => {
    return {
        type: "MENU-REQUESTED"
    }
}

const menuNotLoaded = (newError) => {
    return {
        type: "MENU-NOT-LOADED",
        error: newError
    }
}

const addedToCard = (id) => {
    return {
        type: "ADDED-TO-CARD",
        payload: id
    }
}

const deleteFromCard = (id) => {
    return {
        type: "DELETE-FROM-CARD",
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuNotLoaded, 
    addedToCard,
    deleteFromCard
}