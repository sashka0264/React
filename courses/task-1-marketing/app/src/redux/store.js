import getData from "./getData";
import settingSend from "./settingSend";
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
        getData(url, arrInState, this);
    },
    // Функция получения данных с сервера о браузерах и ОS
    
    createSend() {
        return settingSend(this);
    },
    // Функция запроса и получения обьекта данных с информацией

    dispatch(action) {
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