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

export {
    menuLoaded,
    menuRequested,
    menuNotLoaded
}