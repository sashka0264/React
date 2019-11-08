import React from 'react';
import {connect} from "react-redux";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/actions";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Dialogs.module.css";

const Dialogs = ({messagesPage, sendMessageCreator, updateNewMessageTextCreator}) => {

	const newMessageElement = React.createRef(),
		addMessage = () => {
			sendMessageCreator(newMessageElement.current.value);
		},
		onMessageChange = () => {
			updateNewMessageTextCreator(newMessageElement.current.value);
		};

	return (
		<div className={style.appDialogs}>
			<div className={style.appDialogsItems}>
				{
					messagesPage.dialogs.map( (item) => <DialogItem name={item.name} id={item.id} key={item.id}/>)
				}
			</div>

			<div className={style.appDialogsMessages}>
				{
					messagesPage.messages.map( (item) => <MessageItem content={item.content}/>)
				}

				<textarea 
					value={messagesPage.newMessageText} 
					onChange={onMessageChange} 
					ref={newMessageElement} 
					className={style.appDialogsMessagesTextarea} 
					placeholder="Write a message..."
				/>
				
				<button onClick={addMessage} className={style.appDialogsMessagesSend}>send</button>
			</div>
		</div>
	);
};

const mapStateToProps = ({messagesPage}) => {
	return {
		messagesPage
	}
}
  
const mapDispatchToProps = {
	updateNewMessageTextCreator,
	sendMessageCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);