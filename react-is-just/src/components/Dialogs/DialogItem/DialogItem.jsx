import React from "react";
import {NavLink} from "react-router-dom";
import "./DialogItem.css";
import defaultAvatar from "./img/defaultAvatar.png";

const DialogItem = (props) => {

    let path = "/dialogs/"+props.id;

    return (
        <NavLink to={path} className="app-dialogs-items__item">
            <img src={defaultAvatar}></img>
            {props.name}
        </NavLink>
    )
};

export default DialogItem;