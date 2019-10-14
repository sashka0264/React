import React from 'react';
import "./MyPosts.css";
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import styled from "styled-components"

const AppContent = styled.div`
  margin-top: 10px;
`;

const AppContentSend = styled.div`
  display: flex;
  background-color: #ebecf0;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  padding: 10px;
  button {
    width: 10%;
    border: 0px solid #c1c5d6;
    color: #6c757d;
    outline: none;
  }
  textarea {
    width: 90%;
    padding: 7px 0 33px 5px;
    border: none;
  }
`;

const AppContentPosts = styled.div`
  word-break: break-all;
  margin: 10px 0 0 0;
  padding: 10px 0;
  span {
    font-weight: bold;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`;

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
    <AppContent>
      <AppContentSend>
        <textarea maxLength="280" onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} placeholder="What's new?"/>
        <button onClick={addPosts}>send</button>
      </AppContentSend>

      <AppContentPosts>
        <span className="app-content__posts-title">My posts:</span>
        {postsElements}
      </AppContentPosts>
    </AppContent>
  );
};


export default MyPosts;

