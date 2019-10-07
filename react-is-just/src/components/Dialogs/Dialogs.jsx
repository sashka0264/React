import React from 'react';
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map( (item) => {
        return (
            <DialogItem name={item.name} id={item.id}/>
        );
    });

    let messagesElements = state.messages.map( (item) => {
        return (
            <MessageItem content={item.content}/>
        );
    });
    // Преобразование массива данных в массив компонентов
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value,
            action = sendMessageCreator(text);
        props.store.dispatch(action);
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value,
            action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <div className="app-dialogs">

            <div className="app-dialogs-items">

                {dialogsElements}

            </div>

            <div className="app-dialogs-messages">

                {messagesElements}


                <textarea value={state.newMessageText} onChange={onMessageChange} ref={newMessageElement} className="app-dialogs-messages__textarea" placeholder="Write a message..."></textarea>
                <button onClick={addMessage} className="app-dialogs-messages__send">send</button>
            </div>
        </div>
    );
};

export default Dialogs;