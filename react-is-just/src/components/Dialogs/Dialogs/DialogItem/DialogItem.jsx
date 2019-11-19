import React from "react";
import {NavLink} from "react-router-dom";
import "./DialogItem.css";
import defaultAvatar from "./img/defaultAvatar.png";

const DialogItem = ({id, name}) => {

	let path = "/dialogs/" + id;

	return (
		<NavLink to={path} className="app-dialogs-items__item">
			<img src={defaultAvatar}></img>
			{name}
		</NavLink>
	)
};

export default DialogItem;