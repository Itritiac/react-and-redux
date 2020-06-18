import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/user-reducer';

let mapSateToProps = (state) => {
    return {
      users: state.usersPage.users
    }
}

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
      }
    }
}



export default connect (mapSateToProps, mapDispatchToProps)(Users);