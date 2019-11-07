import React from 'react';
import {connect} from "react-redux";
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/actions";
import style from "./MyPosts.module.css";

const MyPosts = ({profilePage, addPostCreator, updateNewPostTextCreator}) => {
  
  const newPostElement = React.createRef(),
    onAddPosts = () => {
      addPostCreator(newPostElement.current.value);
    },
    onPostChange = () => {
      updateNewPostTextCreator(newPostElement.current.value);
    };

  return (
    <div className={style.appContentBlock}>
      <div className={style.appContentSend}>
        <textarea 
          maxLength="280" 
          onChange={onPostChange} 
          value={profilePage.newPostText} 
          ref={newPostElement} 
          placeholder="О чем вы думаете?" 
          className={style.appContentLetterTextarea}
        />
        <button onClick={onAddPosts} className={style.appContentLetterSend}>send</button>
      </div>

      <div className={style.appContentPosts}>
        <span className={style.appContentPostsTitle}>Мои посты:</span>
        {
          profilePage.posts.map(item => {
            return <Post message={item.message} likes={item.likes} id={item.id} key={item.id}/>
          })   
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({profilePage}) => {
  return {
    profilePage
  }
}

const mapDispatchToProps = {
  addPostCreator,
  updateNewPostTextCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

