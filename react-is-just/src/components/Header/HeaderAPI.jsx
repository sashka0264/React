import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../redux/actions";
import Header from "./Header/Header";

class HeaderAPI extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    // withCredentials (переводится как ваша авторизованность) - чтобы цепануть cookie 
      .then(response => {
        if (response.data.resultCode === 0) {
          console.log(response.data.data);
          const {id, email, login} = response.data.data;
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