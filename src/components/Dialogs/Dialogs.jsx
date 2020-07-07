import React from 'react';
import { reduxForm } from 'redux-form';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageForm } from './Message/AddMessageForm';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar'
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className="app-wrapper-contentInner">
      <Navbar />
      <div>
        <div className={styles.dialogsPage}>
          <div >
            <div className={styles.dialogItems}>
              {dialogsElements}
            </div>
            <div className={styles.Messages}>
              <div>{messagesElements}</div>
            </div>
          </div>
          <div className={styles.MessageForm}>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;