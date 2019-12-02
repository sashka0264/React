import React from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {PostFormControl} from "../../../common/FormsControl/FormsControl";
import {addPostCreator} from "../../../../redux/actions";
import {required, maxLengthCreator, minLengthCreator} from "../../../../helpers/validators";
import Post from "./Post/Post";
import sendIcon from "./img/sendIcon.svg";
import style from "./MyPosts.module.css";

const maxLength = maxLengthCreator(75), 
  minLength = minLengthCreator(2);
const MyPostsForm = ({handleSubmit}:any) => {
  return (
    <form onSubmit={handleSubmit} className={style.appContentSend}>
      <Field 
        validate={[required, maxLength, minLength]}
        name="newPostBody" 
        className={style.appContentLetterInput}  
        placeholder="Написать сообщение..."
        component={PostFormControl} 
      />
      <button className={style.appContentLetterSend}><img alt="sendIcon" src={sendIcon}/></button>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({form: "posts"})(MyPostsForm);

interface IProps {
  addPostCreator: any;
  posts: {
    [key: string] : {
      id: number;
      likes: number;
      message: string;
    };
    map: any;
  };
}

const MyPosts = React.memo(function MyPosts({addPostCreator, posts}:IProps) {
  const onSubmit = ({newPostBody}:any) => {
    addPostCreator(newPostBody);
  };

  return (
    <div className={style.appContentBlock}>
      <MyPostsReduxForm onSubmit={onSubmit}/>
      <div className={style.appContentPosts}>
        <div className={style.appContentPostsTitle}>Мои посты:</div>
        {
          posts.map((item:any) => {
            return <Post message={item.message} likes={item.likes} id={item.id} key={item.id}/>;
          })   
        }
      </div>
    </div>
  );
});

const mapStateToProps = ({global}:any) => ({posts: global.profilePage.posts});

export default connect(mapStateToProps, {addPostCreator})(MyPosts);

