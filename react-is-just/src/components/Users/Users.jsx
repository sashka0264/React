import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/actions";
import defaultAvatar from "./img/defaultAvatar.png";
import * as axios from "axios";
import style from "./Users.module.css";

class Users extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsersAC(response.data.items);
            });
    }

    render() {
        return (
            <div className={style.appUsers}>
  
                {
                    this.props.users.map((item) => {
                        return (
                            <div key={item.id} className={style.appUsersItem}>
                                <div className={style.appUsersItemPersonBlock}>
                                    <img src={item.photos.small ? item.photos.small : defaultAvatar} className={style.appUsersItemImage}/>
                                    <div>
                                        {
                                            item.followed ? 
                                            <button onClick={() => this.props.unfollowAC(item.id)}>Отписаться</button> :
                                            <button onClick={() => this.props.followAC(item.id)}>Подписаться</button> 
                                            
                                        }
                                    </div>
                                </div>

                                <div className={style.appUsersItemAboutBlock}>

                                    <div>
                                        <div className={style.appUsersItemFullname}>{item.name}</div>
                                        <div className={style.appUsersItemStatus}>{item.status}</div>
                                    </div>

                                    <div>
                                        <div className={style.appUsersItemCity}>{"item.location.city"},</div>
                                        <div>{"item.location.country"}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({usersPage}) => {
    const {users} = usersPage;
    return {
        users
    }
}
  
const mapDispatchToProps = {
    followAC,
    unfollowAC,
    setUsersAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);