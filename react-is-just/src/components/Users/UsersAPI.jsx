import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users/Users";
import Spinner from "../Spinner/Spinner";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsLoadingAC} from "../../redux/actions";

class UsersAPI extends React.Component {

	componentDidMount() {
		const {currentPage, pageSize, toggleIsLoadingAC} = this.props;
		toggleIsLoadingAC(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
			{withCredentials: true}
		)
			.then(response => {
				toggleIsLoadingAC(false);
				this.props.setUsersAC(response.data.items);
				this.props.setTotalUsersCountAC(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		const {setCurrentPageAC, setUsersAC, pageSize, toggleIsLoadingAC} = this.props;
		setCurrentPageAC(pageNumber)
		toggleIsLoadingAC(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
			{withCredentials: true}
		)
			.then(response => {
				toggleIsLoadingAC(false);
				setUsersAC(response.data.items);
			});
  }

	render() {
			const {totalUsersCount, pageSize, currentPage, users, unfollowAC, followAC} = this.props;
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
							/>
						} 
					</>
			)
	}
}

const mapStateToProps = ({usersPage}) => {
    const {users, pageSize, totalUsersCount, currentPage, loading} = usersPage;
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        loading
    }
}
  
const mapDispatchToProps = {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsLoadingAC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);