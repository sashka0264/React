import React from "react";
import style from "./MessageItem.module.css";

const MessageItem = (props) => {
	return (
		<div className={style.appDialogsMessagesMessage}>{props.content}</div>
	)
}

export default MessageItem; 