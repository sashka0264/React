import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users/Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getLoading, getFollowingInProgress, getIsAuth} from "../../redux/selectors";
import Spinner from "../common/Spinner/Spinner";
import {setCurrentPageAC, getUsersTC, unfollowTC, followTC} from "../../redux/actions";

class UsersContainer extends Component {
	componentDidMount() {
		debugger
		const {getUsersTC, currentPage, pageSize} = this.props;
		getUsersTC(currentPage, pageSize);
	}
	onPageChanged = (pageNumber) => {
		const {setCurrentPageAC, getUsersTC, pageSize} = this.props;
		setCurrentPageAC(pageNumber);
		getUsersTC(pageNumber, pageSize);
  }
	render() {
		const {totalUsersCount, pageSize, currentPage, users, followingInProgress, unfollowTC, followTC, loading} = this.props;

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
	isAuth: getIsAuth(state)
})

export default compose(
	connect(mapStateToProps, {setCurrentPageAC, getUsersTC, unfollowTC, followTC})
)(UsersContainer)