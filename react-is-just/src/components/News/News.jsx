import React, { Component } from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import style from "./News.module.css";

class News extends Component {
	render() {
		return (
			<div className={style.appNews}>
				Тут будут ваши новости (страничка в разработке)
			</div>
		);
	}
};

export default WithAuthRedirect(News);

