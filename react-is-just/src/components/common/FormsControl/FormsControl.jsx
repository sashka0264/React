import React from "react";
import style from "./FormsControl.module.css";

const FormControl = ({input, meta, child, ...props}) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (showError && style.error) }>
      <div>
        {props.children}
      </div>
      {showError && <span>{meta.error}</span>}
    </div>
  )
}

export const PostFormControl = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const MessageFormControl = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const LoginInputControl = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

