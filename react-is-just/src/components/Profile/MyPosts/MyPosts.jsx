import React from 'react';
import "./MyPosts.css";
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map( (item) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    );
  });

  let newPostElement = React.createRef();
  // Вместо поиска по id или классу, newPostElement ссылается на нужный нам элемент с помощью ref
  let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    console.log(text);
  };

  return (
    <div className="app-content-posts">

      <div className="app-content__letter">
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className="app-content__letter-textarea" placeholder="What's new?"/>
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

