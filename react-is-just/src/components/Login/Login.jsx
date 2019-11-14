import React from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/actions";
import {LoginInputControl} from "../common/FormsControl/FormsControl";
import {required, maxLengthCreator, minLengthCreator} from "../../helpers/validators";
import style from "./Login.module.css";

const maxLength = maxLengthCreator(30), 
    minLength = minLengthCreator(2);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.appLoginBlock}>
      <Field 
        name="email"
        className={style.appLoginLog} 
        component={LoginInputControl}
        placeholder="Логин"
        validate={[required, maxLength, minLength]}
      />
      <Field 
        name="password"
        className={style.appLoginPassword} 
        component={LoginInputControl}
        placeholder="Пароль"
        type="password"
        validate={[required, maxLength, minLength]}
      />

      <div>
        <Field 
          name="rememberMe"
          className={style.appLoginCheckbox} 
          component="input"
          type="checkbox"
          placeholder="Пароль"
        />
        Запомнить меня
      </div>

      <button>Войти</button>
      <div className={style.appLoginError}>{props.error}</div>
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
 
const Login = (props) => {
  const onSubmit = ({email, password, rememberMe}) => {
    props.loginTC(email, password, rememberMe);
  }

  if (props.isAuth) return <Redirect to="/profile"/>

  return (
    <div className={style.appLogin}>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = ({global}) => {
  return {
    isAuth: global.auth.isAuth
  }
};

export default connect(mapStateToProps, {loginTC})(Login);