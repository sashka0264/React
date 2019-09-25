import {rerenderEntireTree} from "../render";

let state = {
    datesPage: {
        to: "",
        from: ""
    },
    platformPage: {
        selectPlatform: ["Nothing", "Desktop", "Mobile"],
        selectedPlatform: "Nothing"
    }, 
    groupBy: {
        selectGroup: ["Nothing", "day", "platform", "operatingSystem", "browser"],
        selectedGroup: "Nothing"
    }, 
    browser: {
        selectBrowser: [{value: "Chrome", checked: false}, {value: "Firefox", checked: false}, 
        {value: "UC browser", checked: false}, {value: "Opera", checked: false}, 
        {value: "Chrome Mobile", checked: false}, {value: "Chrome Webview", checked: false},
        {value: "Android browser", checked: false}, {value: "UC browser mobile", checked: false},
        {value: "Opera Mini", checked: false}]
    }, 
    sistem: {
        selectSistem: [{value: "Windows", checked: false}, {value: "Mac OS", checked: false},
        {value: "Linux", checked: false}, {value: "Android", checked: false}, {value: "IOS", checked: false}]
    }
}
window.state = state;

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
    state.platformPage.selectedPlatform = value;
    value = "Nothing";
    rerenderEntireTree(state);
}
// Функция перезаписи данных о платформе

export let changeGroup = (value) => {
    state.groupBy.selectedGroup = value;
    value = "Nothing";
    rerenderEntireTree(state);
}
// Функция перезаписи данных группировки

export let changeBrowser = (e) => {

    state.browser.selectBrowser.forEach( (item) => {
     
        if (item.value === e.target.value) {
            if (item.checked === false) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    })
    rerenderEntireTree(state);
}
// Функция перезаписи данных браузеров

export let changeSistem = (e) => {

    state.sistem.selectSistem.forEach( (item) => {
     
        if (item.value === e.target.value) {
            if (item.checked === false) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    })
    rerenderEntireTree(state);
}
// Функция перезаписи данных систем


export {state};