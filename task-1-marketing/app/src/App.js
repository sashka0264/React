import React from 'react';
import Dates from "./components/Dates/Dates";
import './App.css';
import List from "./components/List/List";
import PlatformPage from "./components/PlatformPage/PlatformPage";
import GroupBy from "./components/GroupBy/GroupBy";
import SelectBrowser from "./components/SelectBrowser/SelectBrowser";
import SelectSistem from './components/SelectSistem/SelectSistem';

const App = (props) => {
    
    return (
        <div className="app">
            <div className="app-inference">
                <div className="app-dates">
                    <Dates datesPage={props.state.datesPage} overwrite={props.overwrite} name="From"/>  
                    <Dates datesPage={props.state.datesPage} overwrite={props.overwrite} name="To"/>  
                </div>

                <div className="app-grouping">
                    <PlatformPage changePlatform={props.changePlatform} platformPage={props.state.platformPage} name="Platform"/>
                    <GroupBy changeGroup={props.changeGroup} groupBy={props.state.groupBy} name="Group by"/> 
                </div>
                
                <div className="app-software">
                    <SelectBrowser changeBrowser={props.changeBrowser} browser={props.state.browser} name="Browsers"/>
                    <SelectSistem changeSistem={props.changeSistem} sistem={props.state.sistem} name="Select sistem"/>
                </div>
            </div>

            <div className="app-output" id="output">
                <List changePage={props.changePage} page={props.state.page} selectedGroup={props.state.groupBy.selectedGroup} output={props.state.output}/> 
            </div>
        </div>
    )
}

export {App};
