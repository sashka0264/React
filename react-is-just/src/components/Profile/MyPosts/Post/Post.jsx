import React from 'react';
import heart from "./img/heart.svg";
import zeroHeart from "./img/zeroHeart.png";
import defaultAvatar from "./img/defaultAvatar.png";
import "./Post.css";

const Post = (props) => {
  let likeImage;
  (props.likes > 0) ? likeImage = heart : likeImage = zeroHeart;

  const onLike = () => {
    console.log(props.id)
  }

  return (
    <div className="app-content__posts-post">
      <img className="app-content__posts-avatar" src={defaultAvatar}></img>
      
      <div className="app-content__posts-text">

        <div>
          <div className="app-content__posts-name">Alexandr Kolesnikov</div>

          <div>{props.message}</div>
        </div>
        
        <div className="app-content__posts-params">
          <div className="app-content__posts-like" onClick={onLike}>
            <img src={likeImage} alt="heart"/>
            {props.likes}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Post;

