import React from 'react';
import {connect} from "react-redux";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/actions";

const Dialogs = ({messagesPage, sendMessageCreator, updateNewMessageTextCreator}) => {

    const newMessageElement = React.createRef(),
        addMessage = () => {
            sendMessageCreator(newMessageElement.current.value);
        },
        onMessageChange = () => {
            updateNewMessageTextCreator(newMessageElement.current.value);
        };

    return (
        <div className="app-dialogs">

            <div className="app-dialogs-items">

                {
                    messagesPage.dialogs.map( (item) => <DialogItem name={item.name} id={item.id} key={item.id}/>)
                }

            </div>

            <div className="app-dialogs-messages">

                {
                    messagesPage.messages.map( (item) => <MessageItem content={item.content}/>)
                }

                <textarea value={messagesPage.newMessageText} onChange={onMessageChange} ref={newMessageElement} className="app-dialogs-messages__textarea" placeholder="Write a message..."></textarea>
                <button onClick={addMessage} className="app-dialogs-messages__send">send</button>
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