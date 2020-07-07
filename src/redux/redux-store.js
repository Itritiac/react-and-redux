import {combineReducers, createStore, applyMiddleware} from "redux";

import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import sidebarReducer from "./sidebar-reducer/sidebar-reducer";
import usersReducer from "./user-reducer/user-reducer";
import authReducer from "./auth-reducer/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer/app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;