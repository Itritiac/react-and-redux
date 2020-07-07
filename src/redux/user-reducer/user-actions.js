import { userAPI } from '../../api/api';
import { toggleIsFetching, setCurrentPage, setUsers, setTotalUsersCount, toggleFollowingProgress, followSuccess, unfollowSuccess } from './user-reducer';

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(currentPage));

      let data = await userAPI.getUsers(currentPage, pageSize);
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));

  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator)  => {
  dispatch(toggleFollowingProgress(true, userId));
      let response = await apiMethod(userId);
          if (response.data.resultCode == 0) {
              dispatch(actionCreator(userId));
          }
          dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
      let apiMethod = userAPI.follow.bind(userAPI);
      let actionCreator = followSuccess;
      followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}
export const unfollow = (userId) => {
  return async (dispatch) => {
      let apiMethod = userAPI.unfollow.bind(userAPI);
      let actionCreator = unfollowSuccess;
      followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}