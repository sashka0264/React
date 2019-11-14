import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getProfileTC, getUserStatusTC, updateUserStatusTC, changeEditMode} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    const {getProfileTC, getUserStatusTC, match, isAuthUserId} = this.props;
    let id = match.params.userId;
    if (!id) {
      id = isAuthUserId;
      if (!id) {
        this.props.history.push("/login")
      }
    }
    getUserStatusTC(id);
    getProfileTC(id);
  }
  render() {
    const {profile, status, updateUserStatusTC, disabledEditMode, editMode, isAuthUserId, changeEditMode} = this.props;
    return <Profile 
      {...this.props} 
      profile={profile} 
      status={status} 
      updateUserStatusTC={updateUserStatusTC}
      disabledEditMode={disabledEditMode}
      changeEditMode={changeEditMode}
      editMode={editMode}
      isAuthUserId={isAuthUserId}
    />;
  }
};

const mapStateToProps = ({global}) => {
  return {
    profile: global.profilePage.profile,
    status: global.profilePage.status,
    isAuth: global.auth.isAuth,
    isAuthUserId: global.auth.userId,
    editMode: global.profilePage.editMode,
    disabledEditMode: global.profilePage.disabled
  }
};

export default compose(
  connect(mapStateToProps, {getProfileTC, getUserStatusTC, updateUserStatusTC, changeEditMode}),
  withRouter
  // Именно в таком порядке, снизу вверх, от первого к последнему
)(
  ProfileContainer
);