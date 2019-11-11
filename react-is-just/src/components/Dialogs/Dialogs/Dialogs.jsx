import React from 'react';
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({messagesPage, sendMessageCreator, updateNewMessageTextCreator}) => {

	const newMessageElement = React.createRef();

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
					onChange={() => updateNewMessageTextCreator(newMessageElement.current.value)} 
					ref={newMessageElement} 
					className={style.appDialogsMessagesTextarea} 
					placeholder="Write a message..."
				/>
				
				<button 
					onClick={() => sendMessageCreator(newMessageElement.current.value)} 
					className={style.appDialogsMessagesSend}>send</button>
			</div>
		</div>
	);
};

export default Dialogs;