import "./index.css";
import {state, getServerData} from "./redux/state";

getServerData("browsers", state.browser.selectBrowser);
// Данные о браузерах
getServerData("operating-systems", state.sistem.selectSistem);
// Данные о системах
getServerData("platforms", state.platformPage.selectPlatform);
// Данные о платформах
getServerData("groups", state.groupBy.selectGroup);
// Данные о группировках



