import React from 'react';
import "./MyPosts.css";
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map( (item) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    );
  });

  let newPostElement = React.createRef();
  // Вместо поиска по id или классу, newPostElement ссылается на нужный нам элемент с помощью ref
  let addPosts = () => {
    let text = newPostElement.current.value,
        action = addPostCreator(text);
    props.dispatch(action);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value,
        action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

  return (
    <div className="app-content-posts">

      <div className="app-content__letter">
        <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} className="app-content__letter-textarea" placeholder="What's new?"/>
        <button className="app-content__letter-send" onClick={ addPosts }>send</button>
      </div>

      <div className="app-content__posts">
        <div className="app-content__posts-title">My posts:</div>
        {postsElements}
      </div>

    </div>
  );
};


export default MyPosts;

