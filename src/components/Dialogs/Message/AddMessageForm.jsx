import React from 'react'
import { Field } from 'redux-form';

import { maxLengthCreator, required } from '../../../utils/validation/validation';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Send Message</button>
      </div>
    </form>
  )
}
