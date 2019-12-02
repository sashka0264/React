import React, { Component } from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import style from "./Music.module.css";

class Music extends Component {
	render() {
		return (
			<div className={style.appMusic}>
				Тут будет ваша музыка (страничка в разработке)
			</div>
		);
	}
};

export default WithAuthRedirect(Music);