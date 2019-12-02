import React from "react";
import {reduxForm, Field} from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {MessageFormControl} from "../../common/FormsControl/FormsControl";
import {required, maxLengthCreator, minLengthCreator} from "../../../helpers/validators";
import sendIcon from "./img/sendIcon.svg";
import style from "./Dialogs.module.css";

interface IProps {
  messagesPage: {
    dialogs: {
      id: number;
      name: string;
      map: any;
    };
    messages: {
      id: number;
      content: string;
      map: any;
    };
  };
  sendMessageCreator: any;
}

const maxLength = maxLengthCreator(75), 
  minLength = minLengthCreator(2);

const DialogsForm = ({handleSubmit}:any) => {
  return (
    <form onSubmit={handleSubmit} className={style.appDialogsForm}>
      <Field 
        validate={[required, maxLength, minLength]}
        className={style.appDialogsMessagesInput} 
        component={MessageFormControl} 
        name="newMessageBody" 
        placeholder="Write a message..."
      />
      <button className={style.appDialogsMessagesSend}><img alt="sendIcon" src={sendIcon}/></button>
    </form>
  );
};

const DialogsReduxForm = reduxForm({form: "dialogs"})(DialogsForm);

const Dialogs = ({messagesPage, sendMessageCreator}:IProps) => {
  const onSubmit = ({newMessageBody}:any) => {
    sendMessageCreator(newMessageBody);
	};
  return (
    <div className={style.appDialogs}>
      <div className={style.appDialogsFriendAndMessages}>
        <div className={style.appDialogsItems}>
          {messagesPage.dialogs.map( (item: {name: string, id: number}) => <DialogItem name={item.name} id={item.id} key={item.id}/>)}
        </div>

        <div className={style.appDialogsMessages}>
          {messagesPage.messages.map( (item: {content: string, id: number}) => <MessageItem content={item.content} key={item.id}/>)}
        </div>
      </div>

      <DialogsReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Dialogs;