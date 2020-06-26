import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validation/validation';
import { Textarea } from '../../common/FormsControls/FormsControls.jsx';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.formName}>
            <Field component="input" className={s.name} name="firstName" placeholder="Your Name" /><br />
            <Field component="input" className={s.name} name="Surname" placeholder="Your Surname" /><br />         </div>
        <div>
            <Field name="newPostText" className={s.FormText} component={Textarea} placeholder="Your Post"
                validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

class MyPosts extends React.PureComponent {


    render(){
        let postsElements =
            [...this.props.posts].reverse().map( p => <Post message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                {postsElements}
                </div>
            </div>
        )
    }
}



export default MyPosts; 