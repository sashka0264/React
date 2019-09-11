import React from 'react';
import "./Post.css";

const Post = (props) => {
  return (
    <div className="app-content__posts-post">
      <img className="app-content__posts-avatar" src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
      
      <div className="app-content__posts-text">

        <div className="app-content__posts-name">Alexandr Kolesnikov</div>

        <div>{props.message}</div>
        
        <div className="app-content__posts-like">
          <img src="https://pngimg.com/uploads/heart/heart_PNG51337.png"></img>
          {props.likes}
        </div>
      </div>
      
    </div>
  );
};

export default Post;

