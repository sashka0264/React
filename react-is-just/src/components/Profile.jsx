
import React from 'react';

const Profile = () => {
  return (
    <div className="app-content">

        <div className="app-content-avatarAndDescription">
          <img className="app-content__avatar" src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          
          <div>
            <div className="app-content__name">Alexander Kolesnikov</div>
            <div className="app-content__status">изменить статус</div>
          </div>

        </div>

        <div className="app-content-photos">
          My photos:
        <div className="app-content__images">
            <img className="app-content__images-image" src="https://sun9-52.userapi.com/c850724/v850724724/15c46a/LQDnv2FvaMU.jpg"></img>
            <img className="app-content__images-image" src="https://sun9-20.userapi.com/c855428/v855428550/892ed/rLa3WL8TQYY.jpg"></img>
            <img className="app-content__images-image" src="https://sun9-31.userapi.com/c637617/v637617836/eeb/8wnJoIJBxt0.jpg"></img>
            <img className="app-content__images-image" src="https://sun9-14.userapi.com/c638924/v638924685/1af6/xTWg8fvVgYY.jpg"></img>
        </div>
        </div>

      
        <div className="app-content-posts">
          <div className="app-content__letter">
            <input className="app-content__letter-input" placeholder="What's new?"></input>
            <button className="app-content__letter-send">send</button>
          </div>

          <div className="app-content__posts">
            <div className="app-content__posts-title">My posts:</div>
              <div className="app-content__posts-post">Some text</div>
          </div>

        </div>
    </div>
  );
};

export default Profile;

