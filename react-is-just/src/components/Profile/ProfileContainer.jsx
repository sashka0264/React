import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getProfileTC, getUserStatusTC, updateUserStatusTC, changeEditMode} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    const {getProfileTC, getUserStatusTC, match} = this.props;
    getUserStatusTC(match.params.userId);
    getProfileTC(match.params.userId);
  }
  render() {
    const {profile, status, updateUserStatusTC, disabledEditMode, editMode, changeEditMode} = this.props;
    return <Profile 
      {...this.props} 
      profile={profile} 
      status={status} 
      updateUserStatusTC={updateUserStatusTC}
      disabledEditMode={disabledEditMode}
      changeEditMode={changeEditMode}
      editMode={editMode}
    />;
  }
};

const mapStateToProps = ({global}) => {
  return {
    profile: global.profilePage.profile,
    status: global.profilePage.status,
    isAuth: global.auth.isAuth,
    editMode: global.profilePage.editMode,
    disabledEditMode: global.profilePage.disabled
  }
};

export default compose(
  connect(mapStateToProps, {getProfileTC, getUserStatusTC, updateUserStatusTC, changeEditMode}),
  withRouter,
  WithAuthRedirect
  // Именно в таком порядке, снизу вверх, от первого к последнему
)(
  ProfileContainer
);