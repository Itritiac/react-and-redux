import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/user-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.toggleIsFetching(false)
              this.props.setUsers(response.data.items);
              this.props.setTotalUsersCount(40);
          });
  }

  onPageChanged = (pageNumber) =>{
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.toggleIsFetching(false);
              this.props.setUsers(response.data.items);
          });
    
  }

  render() {
    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return (
          <div>
            
            <Users totalUsersCount= {this.props.totalUsersCount}
                    pageSize= {this.props.pageSize}
                    pagesCount= {this.props.pagesCount}
                    pages= {this.props.pages}
                    currentPage= {this.props.currentPage}
                    onPageChanged= {this.onPageChanged}
                    users= {this.props.users}
                    follow= {this.props.follow}
                    unfollow= {this.props.unfollow}
                    isFetching= {this.props.isFetching}/>
            

          </div>

        )
    }
}

let mapSateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching

    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {
        dispatch(followAC(userId));
      },

      unfollow: (userId) => {
        dispatch(unfollowAC(userId));
      },

      setUsers: (users) => {
        dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) =>{
        dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) =>{
        dispatch(setUsersTotalCountAC(totalCount))
      },
      toggleIsFetching: (isFetching) =>{
        dispatch(toggleIsFetchingAC(isFetching))
      }
    }
}
*/


export default connect (mapSateToProps,{
  follow, unfollow,
  setUsers, setCurrentPage,
  setTotalUsersCount, toggleIsFetching
})
  (UsersContainer);