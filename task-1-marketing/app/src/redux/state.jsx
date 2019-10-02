import {rerenderEntireTree} from "../render";

let state = {
    datesPage: {
        to: "",
        from: ""
    },
    platformPage: {
        selectPlatform: [],
        selectedPlatform: {}
    }, 
    groupBy: {
        selectGroup: [],
        selectedGroup: "day"
    }, 
    browser: {
        selectBrowser: [],
        requestBrowser: ""
    }, 
    sistem: {
        selectSistem: [],
        requestSistem: ""
    },
    output: {},
    page: {
        pages: 0,
        usePage: 1
    }, 
}
window.state = state;

export let getServerData = (url, arrInState) => {
    // debugger;
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
            if (state.browser.selectBrowser.length !== 0 && state.sistem.selectSistem.length !== 0) {
                rerenderEntireTree(state);
            }
        } else if (url === "platforms") {

            data.unshift({label: "All", value: 0});
            state.platformPage.selectedPlatform = {label: "All", value: 0};

            data.forEach( (item) => {
                arrInState.push(item);
            });
            if (arrInState.length !== 0) {
                rerenderEntireTree(state);
            }
        } else if (url === "groups") {
            data.forEach( (item) => {
                arrInState.push(item.value);
            });
            if (arrInState.length !== 0) {
                rerenderEntireTree(state);
            }
        }
    })

    .catch( (error) => {
        console.error(`Ошибка в соединении с сервером: '${error}'`);
    });

}
// Функция получения данных с сервера о браузерах и ОS

export let overwrite = (name, date) => {
    if (name === "To") {
        state.datesPage.to = date;
        date = "";
        rerenderEntireTree(state); 
    } else if (name === "From") {
        state.datesPage.from = date;
        date = "";
        rerenderEntireTree(state);
    }
}
// Функция перезаписи данных периода даты

export let changePlatform = (value) => {
    state.platformPage.selectPlatform.forEach( (item) => {
        if (item.label === value) {
            state.platformPage.selectedPlatform = item
        }
    })

    rerenderEntireTree(state);
}
// Функция перезаписи данных о платформе

export let changeGroup = (value) => {
    state.groupBy.selectedGroup = value;
    rerenderEntireTree(state);
}
// Функция перезаписи данных группировки

export let changeBrowser = (e) => {
    state.browser.selectBrowser.forEach( (item) => {
     
        if (item.label === e.target.value) {
            if (item.checked === false) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    })

    let arr = [];
    state.browser.selectBrowser.forEach( (item) => {
    
        if (item.checked === true) {
            arr.push("&browsers[]=", item.value);
        }
    })
    state.browser.requestBrowser = arr.join("")

    rerenderEntireTree(state);
}
// Функция перезаписи данных браузеров

export let changeSistem = (e) => {
    state.sistem.selectSistem.forEach( (item) => {
     
        if (item.label === e.target.value) {
            if (item.checked === false) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    })

    let arr = [];
    state.sistem.selectSistem.forEach( (item) => {
        if (item.checked === true) {
            arr.push("&operatingSystems[]=", item.value);
        }
    })
    state.sistem.requestSistem = arr.join("")

    rerenderEntireTree(state);
}
// Функция перезаписи данных систем


export let changePage = (e) => {
    if (e.target.classList.contains("app-pages__page")) {
        state.page.usePage = e.target.innerHTML;
    } 
    console.log(state.page.usePage);

    rerenderEntireTree(state);
}
// Функция перезаписи данных выбранной страницы

export let createSend = () => {
    let group = state.groupBy.selectedGroup,
        platform = state.platformPage.selectedPlatform["value"],
        from = state.datesPage.from,
        to = state.datesPage.to,
        browsers = state.browser.requestBrowser,
        sistems = state.sistem.requestSistem,
        limit = state.page.usePage*25;

    let promise = fetch(`http://localhost:3000/api/v1/statistics?groupBy=${group}&platform=${platform}
        &from=${from}
        &to=${to}
        ${browsers}
        ${sistems}
        &limit=${limit}`
    )

    .then( (response) => {
        return response.json();
    })

    .then( (data) => {
        state.output = data;
        state.page.pages = Math.ceil(data.count/25);
    })

    .catch( (error) => {
        console.error(`Ошибка в соединении с сервером: '${error}'`);
    });

    return promise;
}
// Функция запроса и получения обьекта данных с информацией

export {state};