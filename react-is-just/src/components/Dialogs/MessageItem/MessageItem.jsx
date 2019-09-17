import React from "react";
import "./MessageItem.css";

const MessageItem = (props) => {
    return (
        <div className="app-dialogs-messages__message">{props.content}</div>
    )
}

export default MessageItem; 