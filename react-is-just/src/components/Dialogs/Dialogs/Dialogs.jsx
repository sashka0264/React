import React from 'react';
import {reduxForm, Field} from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {MessageFormControl} from "../../common/FormsControl/FormsControl";
import {required, maxLengthCreator, minLengthCreator} from "../../../helpers/validators";
import sendIcon from "./img/sendIcon.svg";
import style from "./Dialogs.module.css";

const maxLength = maxLengthCreator(75), 
    minLength = minLengthCreator(2);

const DialogsForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit} className={style.appDialogsForm}>
			<Field 
				validate={[required, maxLength, minLength]}
				className={style.appDialogsMessagesInput} 
				component={MessageFormControl} 
				name="newMessageBody" 
				placeholder="Write a message..."
			/>
			<button className={style.appDialogsMessagesSend}><img src={sendIcon}/></button>
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
			<div className={style.appDialogsFriendAndMessages}>
				<div className={style.appDialogsItems}>
					{messagesPage.dialogs.map( (item) => <DialogItem name={item.name} id={item.id} key={item.id}/>)}
				</div>

				<div className={style.appDialogsMessages}>
					{messagesPage.messages.map( (item) => <MessageItem content={item.content}/>)}
				</div>
			</div>

			<DialogsReduxForm onSubmit={onSubmit}/>
		</div>
	);
};



export default Dialogs;