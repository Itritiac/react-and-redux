import React from 'react';
import styles from './Post.module.css';
import {Field, reduxForm} from "redux-form";
import { required, maxLengthCreator } from '../../../../utils/validation/validation';
import { Textarea } from '../../../common/FormsControls/FormsControls.jsx';
import {CreatePostAddUser, CreatePostPicture, CreatePostSmile} from './../../../../assets/icons/icons'


const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
      <div className={styles.create__post}>
        <div className={styles.create__postTop}>Create post</div>
        <div className={styles.create__postMain}>
          <div className={styles.create__postImage}>
            <img src="img/icons/avatar.png" alt="" />
          </div>
          <form onSubmit={props.handleSubmit} className={styles.create__postForm}>
          <div>
            <Field name="newPostText" className={styles.create__postTextarea} component={Textarea} placeholder="Your Post"
                validate={[required, maxLength10]}/>
        </div>
        
            <button>Add post</button>
        
        </form>
        </div>
        <div className={styles.create__postMedia}>
          <button>
            <CreatePostPicture/>
            Photo/Video</button>
          <button>
          <CreatePostAddUser/>
            Tag friend</button>
          <button>
          <CreatePostSmile/>
            Feeling/Activ...</button>
          <button>...</button>
        </div>
      </div>
    )
    
}

export const CreatePost = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);
