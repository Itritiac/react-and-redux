import {getAuthUserData} from '../auth/actions';
import { initializedSuccess } from './reducer';

export const initializeApp = () => async (dispatch) => {
  const promise = await dispatch(getAuthUserData());
  Promise.all([promise]);
  dispatch(initializedSuccess());
}
