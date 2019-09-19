import React from 'react';
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (item) => {
        return (
            <DialogItem name={item.name} id={item.id}/>
        );
    });

    let messagesElements = props.state.messages.map( (item) => {
        return (
            <MessageItem content={item.content}/>
        );
    });
    // Преобразование массива данных в массив компонентов
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;

        alert(text);
    };

    return (
        <div className="app-dialogs">

            <div className="app-dialogs-items">

                {dialogsElements}

            </div>

            <div className="app-dialogs-messages">

                {messagesElements}


                <textarea ref={newMessageElement} className="app-dialogs-messages__textarea" placeholder="Write a message..."></textarea>
                <button onClick={addMessage} className="app-dialogs-messages__send">send</button>
            </div>
        </div>
    );
};

export default Dialogs;