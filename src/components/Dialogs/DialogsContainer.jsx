import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
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