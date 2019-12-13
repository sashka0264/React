import React from 'react';
import './App.css';
import Dates from "./components/Dates/Dates";
import List from "./components/List/List";
import Groups from "./components/Groups/Groups";
import Selects from "./components/Selects/Selects";

const App = ({state, store}) => {

    return (
        <div className="app">
            <div className="app-inference">
                <div className="app-dates">
                    <Dates datesPage={state.datesPage} store={store} name="From"/>  
                    <Dates datesPage={state.datesPage} store={store} name="To"/>  
                </div>

                <div className="app-grouping">
                    <Groups platformPage={state.platformPage} store={store} name="Platform"/>
                    <Groups groupBy={state.groupBy} store={store} name="Group by"/> 
                </div>
                
                <div className="app-software">
                    <Selects selectBrowser={state.browser.selectBrowser} store={store} name="Browsers"/>
                    <Selects selectSistem={state.sistem.selectSistem} store={store} name="Select sistem"/>
                </div>
            </div>

            <div className="app-output" id="output">
                <List selectedGroup={state.groupBy.selectedGroup} output={state.output} page={state.page} store={store}/> 
            </div>
        </div>
    )
}

export {App};
