import React from "react";
import {reduxForm, Field} from "redux-form";

const Form = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      От кого:

      <div>
        <Field 
          name="newPostBody" 
          placeholder="Имя"
          component="input" 
        />
        <Field 
          name="newPostBody" 
          placeholder="Email"
          component="input" 
        />
      </div>

      Кому:

      <div>
        <Field 
          name="newPostBody" 
          placeholder="Имя"
          component="input" 
        />
        <Field 
          name="newPostBody" 
          placeholder="Email"
          component="input" 
        />
      </div>

      Тема письма
      <div>
        <Field 
          name="newPostBody" 
          placeholder="Моя тема письма"
          component="input" 
        />
      </div>

      <div>
        <Field 
          name="newPostBody" 
          placeholder="Сообщение"
          component="input" 
        />
      </div>

      <button>Отправить</button>
    </form>
  );
};
const SendsayForm = reduxForm({form: "posts"})(Form);

export default SendsayForm;