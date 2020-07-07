
import { INITIALIZED_SUCCESS } from './app-reducerConsts';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export default appReducer; 