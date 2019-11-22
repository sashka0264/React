/* eslint-disable react/prop-types */
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getProfileTC, getUserStatusTC, updateUserStatusTC} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    const {getProfileTC, getUserStatusTC, match, isAuthUserId, history} = this.props;
    let id = match.params.userId;
    if (!id) {
      id = isAuthUserId;
      if (!id) {
        history.push("/login");
      }
    }
    if (id) {
      getUserStatusTC(id);
      getProfileTC(id);
    }
  }
  render() {
    const {profile, status, updateUserStatusTC, isAuthUserId} = this.props;
    return <Profile 
      {...this.props} 
      profile={profile} 
      status={status} 
      updateUserStatusTC={updateUserStatusTC}
      isAuthUserId={isAuthUserId}
    />;
  }
};

const mapStateToProps = ({global}) => ({
  profile: global.profilePage.profile,
  status: global.profilePage.status,
  isAuth: global.auth.isAuth,
  isAuthUserId: global.auth.userId,
});


export default compose(
  connect(mapStateToProps, {getProfileTC, getUserStatusTC, updateUserStatusTC}),
  withRouter
  // Именно в таком порядке, снизу вверх, от первого к последнему
)(
  ProfileContainer
);