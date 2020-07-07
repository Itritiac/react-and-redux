import { userAPI, profileAPI } from '../../api/api';
import { setUserProfile, setStatus, savePhotoSuccess } from './profile-reducer';

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
              dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
          dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
          if (response.data.resultCode === 0) {
              dispatch(setStatus(status));
          }
}
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
  }
}