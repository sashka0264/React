import React from 'react';
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {addPostCreator} from "../../../../redux/actions";
import {required, maxLengthCreator, minLengthCreator} from "../../../../helpers/validators";
import Post from './Post/Post';
import style from "./MyPosts.module.css";

const maxLength = maxLengthCreator(75), 
    minLength = minLengthCreator(2);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.appContentSend}>
      <Field 
        validate={[required, maxLength, minLength]}
        name="newPostBody" 
        maxLength="75"
        className={style.appContentLetterTextarea}  
        placeholder="О чем вы думаете?"
        component="textarea" 
      />
      <button className={style.appContentLetterSend}>send</button>
    </form>
  )
}

const MyPostsReduxForm = reduxForm({form: 'posts'})(MyPostsForm);

const MyPosts = ({profilePage, addPostCreator}) => {
  
  const onSubmit = ({newPostBody}) => {
    addPostCreator(newPostBody);
  }

  return (
    <div className={style.appContentBlock}>
      <MyPostsReduxForm onSubmit={onSubmit}/>

      <div className={style.appContentPosts}>
        <div className={style.appContentPostsTitle}>Мои посты:</div>
        {
          profilePage.posts.map(item => {
            return <Post message={item.message} likes={item.likes} id={item.id} key={item.id}/>
          })   
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({global}) => {
  return {
    profilePage: global.profilePage
  }
}

export default connect(mapStateToProps, {addPostCreator})(MyPosts);

