import datesPageReducer from "./datesPageReducer";
import platformPageReducer from "./platformPageReducer";
import groupByReducer from "./groupByReducer";
import browserReducer from "./browserReducer";
import sistemReducer from "./sistemReducer";
import changePageReducer from "./changePageReducer";

const store = {
    _state: {
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
            pages: 1,
            usePage: 1
        }
    },
    _rerenderEntireTree: () => {},
    // Перерисовка страницы _rerenderEntireTree
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    // Перерисовка страницы _rerenderEntireTree
    getState() {
        return this._state;
    },
    // Получение _state со стороны


    getServerData(url, arrInState) {
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
                if (this._state.browser.selectBrowser.length !== 0 && this._state.sistem.selectSistem.length !== 0) {
                    this._rerenderEntireTree(this._state);
                }
            } else if (url === "platforms") {
    
                data.unshift({label: "All", value: 0});
                this._state.platformPage.selectedPlatform = {label: "All", value: 0};
    
                data.forEach( (item) => {
                    arrInState.push(item);
                });
                if (arrInState.length !== 0) {
                    this._rerenderEntireTree(this._state);
                }
            } else if (url === "groups") {
                data.forEach( (item) => {
                    arrInState.push(item.value);
                });
                if (arrInState.length !== 0) {
                    this._rerenderEntireTree(this._state);
                }
            }
        })
    
        .catch( (error) => {
            console.error(`Ошибка при соединении с сервером: '${error.message}'`);
        });
    },
    // Функция получения данных с сервера о браузерах и ОS
    
    createSend() {
        const group = this._state.groupBy.selectedGroup,
            platform = this._state.platformPage.selectedPlatform["value"],
            from = this._state.datesPage.from,
            to = this._state.datesPage.to,
            browsers = this._state.browser.requestBrowser,
            sistems = this._state.sistem.requestSistem,
            limit = this._state.page.usePage*25;
    
        const promise = fetch(`http://localhost:3000/api/v1/statistics?groupBy=${group}&platform=${platform}
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
            this._state.output = data;
            this._state.page.pages = Math.ceil(data.count/25);
        })
    
        .catch( (error) => {
            console.error(`Ошибка при соединении с сервером: '${error.message}'`);
        });
    
        return promise;
    },
    // Функция запроса и получения обьекта данных с информацией
    dispatch(action) {
        // console.log(action);
        this._state.datesPage = datesPageReducer(this._state.datesPage, action);
        this._state.platformPage = platformPageReducer(this._state.platformPage, action);
        this._state.groupBy = groupByReducer(this._state.groupBy, action);
        this._state.browser = browserReducer(this._state.browser, action);
        this._state.sistem = sistemReducer(this._state.sistem, action);
        this._state.page = changePageReducer(this._state.page, action);
        this._rerenderEntireTree(this._state);
    }
    // Тут меняется state и происходит перерисовка после этого
}

export {store};