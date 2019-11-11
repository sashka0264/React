import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getProfileTC} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    const {getProfileTC, match} = this.props;
    getProfileTC(match.params.userId);
  }
  render() {
    const {profile, status} = this.props;
    return <Profile {...this.props} profile={profile} status={status}/>;
  }
};

const mapStateToProps = ({profilePage, auth}) => {
  return {
    profile: profilePage.profile,
    status: profilePage.status,
    isAuth: auth.isAuth
  }
};

export default compose(
  connect(mapStateToProps, {getProfileTC}),
  withRouter,
  WithAuthRedirect
  // Именно в таком порядке, снизу вверх, от первого к последнему
)(
  ProfileContainer
);