import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/actions";
import defaultAvatar from "./img/defaultAvatar.png";
import style from "./Users.module.css";

const Users = ({users, followAC, unfollowAC, setUsersAC}) => {
    
    if (users.length === 0) {
        setUsersAC(
            [
                {id: 1, followed: false, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Франческо", status: "Рисую", location: {city: "Рим", country: "Италия"} },
                {id: 2, followed: false, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Дмитрий", status: "Сижу в офисе :D", location: {city: "Москва", country: "Россия"} },
                {id: 3, followed: true, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Лара", status: "Хожу по магазинам", location: {city: "Рейкьявик", country: "Исландия"} },
                {id: 4, followed: true, photoUrl: "https://i09.fotocdn.net/s124/ca58f0996c2bef65/user_xl/2820992684.jpg", fullName: "Лукас", status: "Стою в пробке", location: {city: "Нью-Йорк", country: "США"} }
            ]
        )
    }

    return (
        <div className={style.appUsers}>
            {
                users.map((item) => {
                    return (
                        <div key={item.id} className={style.appUsersItem}>
                            <div className={style.appUsersItemPersonBlock}>
                                <img src={item.photoUrl} className={style.appUsersItemImage}/>
                                <div>
                                    {
                                        item.followed ? 
                                        <button onClick={() => followAC(item.id)}>Follow</button> : 
                                        <button onClick={() => unfollowAC(item.id)}>Unfollow</button>
                                    }
                                </div>
                            </div>

                            <div className={style.appUsersItemAboutBlock}>

                                <div>
                                    <div className={style.appUsersItemFullname}>{item.fullName}</div>
                                    <div className={style.appUsersItemStatus}>{item.status}</div>
                                </div>

                                <div>
                                    <div className={style.appUsersItemCity}>{item.location.city},</div>
                                    <div>{item.location.country}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
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