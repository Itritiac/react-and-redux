import { authAPI } from '../../api/api';
import { setAuthUserData } from './reducer';
import { stopSubmit } from 'redux-form';

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const message = response.data.messages.length > 0 ? response.data.messages[0]
      : 'some Error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}
