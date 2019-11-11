import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMeTC} from "../../redux/actions";
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

const mapStateToProps = ({auth}) => {
  return {
    isAuth: auth.isAuth,
    login: auth.login
  }
}
 
export default connect(mapStateToProps, {getMeTC})(HeaderAPI);