/* eslint-disable react/prop-types */
import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {getMeTC, initializeAppTC} from "./redux/actions";
import Spinner from "./components/common/Spinner/Spinner";
import style from "./App.module.css";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWithRouter/>
      </Router>
    </Provider>
  );
};

export default AppContainer;

export class App extends Component {
  componentDidMount() {
    const {initializeAppTC} = this.props;
    initializeAppTC();
  }

  render() {
    const {initialized} = this.props;
    if (!initialized) {
      return <Spinner/>;
    }
    return (
      <div className={style.appWrapper}>
        <HeaderContainer/>
        <Navbar/>
  
        <div className={style.appReference}>
          <Route path="/profile/:userId?" component={ProfileContainer}/>
          <Route path="/dialogs" component={Dialogs}/> 
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/users" component={UsersContainer}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({global}) => ({
  initialized: global.app.initialized
});


const AppWithRouter = compose(
  withRouter,
  connect(mapStateToProps, {getMeTC, initializeAppTC})
)(App);


