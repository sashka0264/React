const getServerData = (url, arrInState, store) => {

    fetch(`http://localhost:3000/api/v1/${url}`)

    .then( (response) => {
        return response.json()
    })

    .then( (data) => {
        if (url === "browsers" || url === "operating-systems") {
            data.map( (item) => {
                item["checked"] = false;
                return arrInState.push(item);
            });
            if (store._state.browser.selectBrowser.length !== 0 && store._state.sistem.selectSistem.length !== 0) {
                store._rerenderEntireTree(store._state);
            }
        } else if (url === "platforms") {

            data.unshift({label: "All", value: 0});
            store._state.platformPage.selectedPlatform = {label: "All", value: 0};

            data.forEach( (item) => {
                arrInState.push(item);
            });
            if (arrInState.length !== 0) {
                store._rerenderEntireTree(store._state);
            }
        } else if (url === "groups") {
            data.forEach( (item) => {
                arrInState.push(item.value);
            });
            if (arrInState.length !== 0) {
                store._rerenderEntireTree(store._state);
            }
        }
    })

    .catch( (error) => {
        console.error(`Ошибка при соединении с сервером: '${error.message}'`);
    });
}

export default getServerData;