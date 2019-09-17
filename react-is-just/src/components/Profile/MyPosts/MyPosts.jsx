import React from 'react';
import "./MyPosts.css";
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map( (item) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    );
  });

  return (
    <div className="app-content-posts">

      <div className="app-content__letter">
        <textarea className="app-content__letter-textarea" placeholder="What's new?"></textarea>
        <button className="app-content__letter-send">send</button>
      </div>

      <div className="app-content__posts">
        <div className="app-content__posts-title">My posts:</div>
        {postsElements}
      </div>

    </div>
  );
};


export default MyPosts;

