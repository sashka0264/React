import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as axios from "axios";
import {setUserProfileAC} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfileAC(response.data);
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
