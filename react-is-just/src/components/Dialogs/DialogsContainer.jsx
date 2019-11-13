import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/actions";
import Dialogs from './Dialogs/Dialogs';

class DialogsContainer extends Component {
	render() {
		return <Dialogs {...this.props}/>
	}
};

const mapStateToProps = ({global}) => {
	return {
		messagesPage: global.messagesPage,
		isAuth: global.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, {updateNewMessageTextCreator, sendMessageCreator}), 
	WithAuthRedirect
)(
	DialogsContainer
);