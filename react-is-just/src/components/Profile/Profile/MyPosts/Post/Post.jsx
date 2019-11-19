import React from 'react';
import style from "./Post.module.css";
import heart from "./img/heart.svg";
import zeroHeart from "./img/zeroHeart.png";
import defaultAvatar from "./img/defaultAvatar.png";

const Post = ({likes, id, message}) => {
  let likeImage;
  (likes > 0) ? likeImage = heart : likeImage = zeroHeart;

  const onLike = () => {
    console.log(id)
  }

  return (
    <div className={style.appContentPostsPost}>
      <img className={style.appContentPostsAvatar} src={defaultAvatar}></img>
      
      <div className={style.appContentPostsText}>
        <div>
          <div className={style.appContentPostsName}>Alexandr Kolesnikov</div>
          <div>{message}</div>
        </div>
        
        <div className={style.appContentPostsParams}>
          <div className={style.appContentPostsLike} onClick={onLike}>
            <img src={likeImage} alt="heart"/>
            {likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

