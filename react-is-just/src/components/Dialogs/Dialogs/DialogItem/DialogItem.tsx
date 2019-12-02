import React from "react";
import {NavLink} from "react-router-dom";
// npm i --save @types/react-router-dom
import "./DialogItem.css";
import defaultAvatar from "./img/defaultAvatar.png";

interface IProps {
  id: number;
  name: string;
}

const DialogItem = ({id, name}:IProps) => {
	let path:string = "/dialogs/" + id;
	return (
		<NavLink to={path} className="app-dialogs-items__item">
			<img alt="defaultAvatar" src={defaultAvatar}/>
			{name}
		</NavLink>
	);
};

export default DialogItem;