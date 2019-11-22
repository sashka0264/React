import React, {Component} from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import style from "./Settings.module.css";

class Settings extends Component {
	render() {
		return (
			<div className={style.appSettings}>
				Тут будут ваши настройки (страничка в разработке)
			</div>
		);
	}
};

export default WithAuthRedirect(Settings);