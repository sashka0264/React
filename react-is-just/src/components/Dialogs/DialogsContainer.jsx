import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {sendMessageAC} from "../../redux/actions";
import Dialogs from "./Dialogs/Dialogs";

class DialogsContainer extends Component {
  render() {
    return <Dialogs {...this.props}/>;
  }
};

const mapStateToProps = ({global}) => ({messagesPage: global.messagesPage, isAuth: global.auth.isAuth});

export default compose(
  connect(mapStateToProps, {sendMessageAC}), 
  WithAuthRedirect
)(
  DialogsContainer
);