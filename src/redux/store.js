import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";

import profileReducer from "./profile/reducer";
import dialogsReducer from "./dialogs/reducer";
import sidebarReducer from "./sidebar/reducer";
import usersReducer from "./user/reducer";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";


const reducers = combineReducers({
      profilePage: profileReducer,
      dialogPage: dialogsReducer,
      sidebar: sidebarReducer,
      usersPage: usersReducer,
      auth: authReducer,
      app: appReducer,
      form: formReducer,
});



const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
