import React from "react";
import style from "./MessageItem.module.css";

// eslint-disable-next-line react/prop-types
const MessageItem = ({content}) => {
	return (
		<div className={style.appDialogsMessagesMessage}>{content}</div>
	);
};

export default MessageItem; 