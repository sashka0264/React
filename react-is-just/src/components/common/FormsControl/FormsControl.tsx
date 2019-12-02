import React from "react";
import style from "./FormsControl.module.css";

interface IProps {
  meta: {touched: boolean, error: undefined | string};
  children: any;
  input: {name: string};
}

const FormControl = ({meta, children}:IProps) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (showError && style.error) }>
      <div>
        {children}
      </div>
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const PostFormControl = (props: IProps) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
};

export const MessageFormControl = (props: IProps) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

export const LoginInputControl = (props: IProps) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

