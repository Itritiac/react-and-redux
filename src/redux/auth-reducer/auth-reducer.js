import { SET_USER_DATA } from './auth-reducerConsts';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:

			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth }
})

export default authReducer; 