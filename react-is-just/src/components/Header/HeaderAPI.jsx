import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMeTC, logoutTC} from "../../redux/actions";
import Header from "./Header/Header";

class HeaderAPI extends Component {
  componentDidMount() {
    const {getMeTC} = this.props;
    getMeTC();
  }
  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = ({global}) => {
  return {
    isAuth: global.auth.isAuth,
    login: global.auth.login
  }
}
 
export default connect(mapStateToProps, {getMeTC, logoutTC})(HeaderAPI);