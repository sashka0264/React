import React from "react";
import style from "./MessageItem.module.css";

const MessageItem = ({content}) => {
	return (
		<div className={style.appDialogsMessagesMessage}>{content}</div>
	)
}

export default MessageItem; 