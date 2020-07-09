import React from 'react';
import { reduxForm } from 'redux-form';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageForm } from './Message/AddMessageForm';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar'
import styles from './Dialogs.module.css';

function Dialogs (props) {
  const {dialogPage, sendMessage} = props;

  const state = dialogPage;
  const dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  const messageElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  const handleSubmit = (values) => {
    sendMessage(values.newMessageBody);
  }

  return (
    <div className="app-wrapper-contentInner">
      <Navbar />
      <div>
        <div className={styles.dialogPage}>
          <div >
            <div className={styles.dialogItems}>
              {dialogElements}
            </div>
            <div className={styles.messages}>
              <div>{messageElements}</div>
            </div>
          </div>
          <div className={styles.messageForm}>
            <AddMessageFormRedux onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
