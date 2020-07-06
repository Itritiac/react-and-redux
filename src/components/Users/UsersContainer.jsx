import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers
}
  from './../../redux/user-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { compose } from 'redux';
import { requestUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/user-selectors';
import Navbar from '../Navbar/Navbar'

class UsersContainer extends React.Component {
  componentDidMount() {

    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);

  }

  onPageChanged = (pageNumber) => {

    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);


  }

  render() {
    return (
      <div className="app-wrapper-contentInnerNav" >
        <Navbar/>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}

        />
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    users: requestUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {
      follow, unfollow, setCurrentPage,
      toggleFollowingProgress, getUsers
    })
)(UsersContainer)