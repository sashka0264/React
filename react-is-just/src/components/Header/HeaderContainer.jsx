import React, {Component} from 'react';
import {connect} from "react-redux";
import {logoutTC} from "../../redux/actions";
import Header from "./Header/Header";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = ({global}) => ({isAuth: global.auth.isAuth, login: global.auth.login});
  
export default connect(mapStateToProps, {logoutTC})(HeaderContainer);