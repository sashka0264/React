import React, {Component} from "react";
import {Redirect} from "react-router-dom";

const WithAuthRedirect = (Component) => {
  class RedirectComponent extends Component {
    render() {
      const {isAuth} = this.props;
      if (!isAuth) return <Redirect to="/login"/>
      return <Component {...this.props}/>;
    }
  }
  return RedirectComponent;
}

export {WithAuthRedirect}