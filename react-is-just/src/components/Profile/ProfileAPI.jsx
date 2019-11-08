import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../services/services";
import {setUserProfileAC} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    getProfile(userId).then(data => {
      this.props.setUserProfileAC(data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileAPIWithRouter = withRouter(ProfileAPI);

export default connect(mapStateToProps, {setUserProfileAC})(ProfileAPIWithRouter);
