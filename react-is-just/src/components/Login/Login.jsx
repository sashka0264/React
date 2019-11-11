import React from "react";
import style from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={style.appLogin}>
      <div className={style.appLoginBlock}>
        <input placeholder="Телефон или email"/>
        <input placeholder="Пароль"/>
        <button>Войти</button>
      </div>
    </div>
  )
}

export default Login;