import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users/Users";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getLoading, getFollowingInProgress, getIsAuth, getPagePeriod} from "../../redux/selectors";
import Spinner from "../common/Spinner/Spinner";
import {setCurrentPageAC, getUsersTC, unfollowTC, followTC, setPagePeriodAC} from "../../redux/actions";

class UsersContainer extends Component {
	componentDidMount() {
		const {getUsersTC, currentPage, pageSize} = this.props;
		this.onPageChanged(1);
		this.setPagePeroid(1);
		getUsersTC(currentPage, pageSize);
	}
	onPageChanged = (pageNumber) => {
		const {setCurrentPageAC, getUsersTC, pageSize} = this.props;
		setCurrentPageAC(pageNumber);
		getUsersTC(pageNumber, pageSize);
	}

	setPagePeroid = (usePage) => {
		const { setPagePeriodAC } = this.props;
		setPagePeriodAC(usePage);
	}

	render() {
		const {
			totalUsersCount, 
			pagePeriod, 
			pageSize, 
			currentPage, 
			users, 
			followingInProgress, 
			unfollowTC, 
			followTC, 
			loading
		} = this.props;

		return (
			<>
				{loading ? 
					<Spinner/> : 
					<Users 
						users={users}
						totalUsersCount={totalUsersCount}
						onPageChanged={this.onPageChanged}					
						pageSize={pageSize}
						currentPage={currentPage}
						followingInProgress={followingInProgress}
						unfollowTC={unfollowTC}
						followTC={followTC}
						pagePeriod={pagePeriod}
						setPagePeroid={this.setPagePeroid}
					/>
				} 
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	users: getUsers(state), 
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	loading: getLoading(state),
	followingInProgress: getFollowingInProgress(state),
	isAuth: getIsAuth(state),
	pagePeriod: getPagePeriod(state)
});

export default compose(
	connect(mapStateToProps, {setCurrentPageAC, getUsersTC, unfollowTC, setPagePeriodAC, followTC})
)(UsersContainer);