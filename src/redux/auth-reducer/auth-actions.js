import { authAPI } from '../../api/api';
import { setAuthUserData } from './auth-reducer';
import { stopSubmit } from 'redux-form';

export const getAuthUserData = () => async (dispatch) =>{
  let response = await authAPI.me()
      if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          dispatch(setAuthUserData(id, email, login , true));
      }
}

export const login = (email, password, rememberMe) => async (dispatch) =>{
  let response = await authAPI.login(email, password, rememberMe);
      if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
      } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0]
                                                          : 'some Error';
          dispatch(stopSubmit('login', {_error: message}));
      }
}
export const logout = () => async (dispatch) =>{
  let response = await authAPI.logout();
      if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null , false));
      }
}