import React from "react";
import {NavLink} from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {

    let path = "/dialogs/"+props.id;

    return (
        <NavLink to={path} className="app-dialogs-items__item">
            <img src="https://sun9-19.userapi.com/c629400/v629400532/3b34b/Q_OvSVHf4iU.jpg"></img>
            {props.name}
        </NavLink>
    )
};

export default DialogItem;