import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="app-content">

        <div className="app-content-avatarAndDescription">
          <img className="app-content__avatar" src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
          
          <div>
            <div className="app-content__name">Alexandr Kolesnikov</div>
            <div className="app-content__status">изменить статус</div>
          </div>

        </div>

        {/* <div className="app-content-photos">
          My photos:
          <div className="app-content__images">
              <img className="app-content__images-image" src="https://sun9-52.userapi.com/c850724/v850724724/15c46a/LQDnv2FvaMU.jpg"></img>
              <img className="app-content__images-image" src="https://sun9-20.userapi.com/c855428/v855428550/892ed/rLa3WL8TQYY.jpg"></img>
              <img className="app-content__images-image" src="https://sun9-31.userapi.com/c637617/v637617836/eeb/8wnJoIJBxt0.jpg"></img>
              <img className="app-content__images-image" src="https://sun9-14.userapi.com/c638924/v638924685/1af6/xTWg8fvVgYY.jpg"></img>
          </div>
        </div> */}

        <MyPosts/>
    </div>
  );
};

export default Profile;
