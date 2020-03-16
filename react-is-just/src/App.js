/* eslint-disable react/prop-types */
import React, {Component, Suspense } from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {getMeTC, initializeAppTC} from "./redux/actions";
import Spinner from "./components/common/Spinner/Spinner";
import style from "./App.module.css";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')),
  ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')),
  News = React.lazy(() => import('./components/News/News')),
  Music = React.lazy(() => import('./components/Music/Music')),
  Settings = React.lazy(() => import('./components/Settings/Settings')),
  UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')),
  LoginPage = React.lazy(() => import('./components/Login/Login'));

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
          <Route path="/profile/:userId?" render={() => <Suspense fallback={null}>
              <ProfileContainer/>
            </Suspense>
          }/>

          <Route path="/dialogs" render={() => <Suspense fallback={null}>
              <DialogsContainer/>
            </Suspense>
          }/>

          <Route path="/news" render={() => <Suspense fallback={null}>
              <News/>
            </Suspense>
          }/>

          <Route path="/music" render={() => <Suspense fallback={null}>
              <Music/>
            </Suspense>
          }/>

          <Route path="/settings" render={() => <Suspense fallback={null}>
              <Settings/>
            </Suspense>
          }/>

          <Route path="/users" render={() => <Suspense fallback={null}>
              <UsersContainer/>
            </Suspense>
          }/>

          <Route path="/login" render={() => <Suspense fallback={null}>
              <LoginPage/>
            </Suspense>
          }/>
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


