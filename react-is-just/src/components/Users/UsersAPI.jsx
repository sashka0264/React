import React, {Component} from "react";
import {connect} from "react-redux";
import {getUsers} from "../../services/services";
import Users from "./Users/Users";
import Spinner from "../Spinner/Spinner";
import {
	followAC, 
	unfollowAC, 
	setUsersAC, 
	setCurrentPageAC, 
	setTotalUsersCountAC, 
	toggleIsLoadingAC, 
	toggleIsFollowingProgressAC
} from "../../redux/actions";

class UsersAPI extends Component {

	componentDidMount() {
		const {currentPage, pageSize, toggleIsLoadingAC, setUsersAC, setTotalUsersCountAC} = this.props;
		toggleIsLoadingAC(true);
		getUsers(currentPage, pageSize).then(data => {
			toggleIsLoadingAC(false);
			setUsersAC(data.items);
			setTotalUsersCountAC(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		const {setCurrentPageAC, setUsersAC, pageSize, toggleIsLoadingAC} = this.props;
		setCurrentPageAC(pageNumber)
		toggleIsLoadingAC(true);
		getUsers(pageNumber, pageSize).then(data => {
			toggleIsLoadingAC(false);
			setUsersAC(data.items);
		});
  }

	render() {
		const {
			totalUsersCount, 
			pageSize, currentPage, 
			users, 
			unfollowAC, 
			followAC, 
			followingInProgress, 
			toggleIsFollowingProgressAC
		} = this.props;

		return (
			<>
				{this.props.loading ? 
					<Spinner/> : 
					<Users 
						totalUsersCount={totalUsersCount}
						onPageChanged={this.onPageChanged}
						pageSize={pageSize}
						currentPage={currentPage}
						users={users}
						unfollowAC={unfollowAC}
						followAC={followAC}
						toggleIsFollowingProgressAC={toggleIsFollowingProgressAC}
						followingInProgress={followingInProgress}
					/>
				} 
			</>
		)
	}
}

const mapStateToProps = ({usersPage}) => {
	const {users, pageSize, totalUsersCount, currentPage, loading, followingInProgress} = usersPage;
	return {users, pageSize, totalUsersCount,currentPage, loading, followingInProgress}
}
  
export default connect(mapStateToProps, {
	followAC,
	unfollowAC,
	setUsersAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	toggleIsLoadingAC,
	toggleIsFollowingProgressAC
})(UsersAPI);