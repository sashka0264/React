import React from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/actions";
import style from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.appLoginBlock}>
      <Field 
        name="login"
        className={style.appLoginLog} 
        component="input"
        placeholder="Логин"
      />
      <Field 
        name="password"
        className={style.appLoginPassword} 
        component="input"
        placeholder="Пароль"
        type="password"
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
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
 
const Login = (props) => {
  const onSubmit = ({login, password, rememberMe}) => {
    props.loginTC(login, password, rememberMe);
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