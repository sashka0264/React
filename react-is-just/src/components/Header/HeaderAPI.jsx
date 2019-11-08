import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMe} from "../../services/services";
import {setUserData} from "../../redux/actions";
import Header from "./Header/Header";

class HeaderAPI extends Component {
  componentDidMount() {
    getMe().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
 
export default connect(mapStateToProps, {setUserData})(HeaderAPI);