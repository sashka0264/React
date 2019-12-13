import React, {Component} from 'react';
import {Provider} from "react-redux";
import SendsayForm from "./components/SendsayForm";
import {store} from "./redux/store";
import './App.css';

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

const App = () => {
  return (
    <SendsayForm/>
  )
}

export default AppContainer;
