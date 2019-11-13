import React from 'react';
import {reduxForm, Field} from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Dialogs.module.css";

const DialogsForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field 
				className={style.appDialogsMessagesTextarea} 
				component="textarea" 
				name="newMessageBody" 
				placeholder="Write a message..."
			/>
			<button className={style.appDialogsMessagesSend}>send</button>
		</form>
	)
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

const Dialogs = ({messagesPage, sendMessageCreator}) => {
	const onSubmit = ({newMessageBody}) => {
		sendMessageCreator(newMessageBody);
  }

	return (
		<div className={style.appDialogs}>
			<div className={style.appDialogsItems}>
				{messagesPage.dialogs.map( (item) => <DialogItem name={item.name} id={item.id} key={item.id}/>)}
			</div>

			<div className={style.appDialogsMessages}>
				{messagesPage.messages.map( (item) => <MessageItem content={item.content}/>)}
				<DialogsReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	);
};



export default Dialogs;