import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendMessageCreator } from '../../redux/dialogs/reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer; 
