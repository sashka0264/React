import React from "react";
import {NavLink} from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {

    let path = "/dialogs/"+props.id;

    return (
        <NavLink to={path} className="app-dialogs-items__item">
            {props.name}
        </NavLink>
    )
};

export default DialogItem;