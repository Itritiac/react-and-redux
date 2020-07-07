import {getAuthUserData} from './../auth-reducer/auth-actions';
import { initializedSuccess } from './app-reducer';

export const initializeApp = () => async (dispatch) => {
  let promise = await dispatch(getAuthUserData());
  Promise.all([promise]);
  dispatch(initializedSuccess());
}