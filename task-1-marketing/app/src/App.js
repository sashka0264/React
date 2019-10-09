import React from 'react';
import './App.css';
import Dates from "./components/Dates/Dates";
import List from "./components/List/List";
import Groups from "./components/Groups/Groups";
import Selects from "./components/Selects/Selects";

const App = (props) => {
    return (
        <div className="app">
            <div className="app-inference">
                <div className="app-dates">
                    <Dates datesPage={props.state.datesPage} store={props.store} name="From"/>  
                    <Dates datesPage={props.state.datesPage} store={props.store} name="To"/>  
                </div>

                <div className="app-grouping">
                    <Groups platformPage={props.state.platformPage} store={props.store} name="Platform"/>
                    <Groups groupBy={props.state.groupBy} store={props.store} name="Group by"/> 
                </div>
                
                <div className="app-software">
                    <Selects selectBrowser={props.state.browser.selectBrowser} store={props.store} name="Browsers"/>
                    <Selects selectSistem={props.state.sistem.selectSistem} store={props.store} name="Select sistem"/>
                </div>
            </div>

            <div className="app-output" id="output">
                <List selectedGroup={props.state.groupBy.selectedGroup} output={props.state.output} page={props.state.page} store={props.store}/> 
            </div>
        </div>
    )
}

export {App};
