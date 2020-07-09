import { ADD_POST, SET_USER_PROFILE, SET_STATUS, SAVE_PHOTO_SUCCESS } from './consts';

const initialState = {
  posts: [
    { id: 1, name: 'Viktor', message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, name: 'Andrew', message: 'It\'s my first post', likesCount: 31 },
    { id: 3, name: 'Julia', message: 'Blabla', likesCount: 14 },
    { id: 4, name: 'John', message: 'Dada', likesCount: 11 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
        name: 'itritiac'

      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } }

    default:
      return state;

  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export default profileReducer;

