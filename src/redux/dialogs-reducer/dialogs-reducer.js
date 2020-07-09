import { SEND_MESSAGE } from './dialogs-reducerConsts';

let initialState = {
  dialogs: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Viktor' },
    { id: 3, name: 'John' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is day?' },
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 3, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;
