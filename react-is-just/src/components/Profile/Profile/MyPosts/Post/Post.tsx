import React from "react";
import style from "./Post.module.css";
import heart from "./img/heart.svg";
import zeroHeart from "./img/zeroHeart.png";
import defaultAvatar from "./img/defaultAvatar.png";

interface IProps {
  likes: number;
  id: number;
  message: string;
}

const Post = ({likes, id, message}:IProps) => {
  let likeImage;
  (likes > 0) ? likeImage = heart : likeImage = zeroHeart;

  const onLike = () => {
    console.log(id);
  };

  return (
    <div className={style.appContentPostsPost}>
      <img alt="defaultAvatar" className={style.appContentPostsAvatar} src={defaultAvatar}/>
      
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

