import React from "react";
import style from "./MessageItem.module.css";

interface IProps {
  content: string;
}

const MessageItem = ({content}:IProps) => {
	return (
		<div className={style.appDialogsMessagesMessage}>{content}</div>
	);
};

export default MessageItem; 