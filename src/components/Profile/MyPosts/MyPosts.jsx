import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.contactForm}>
					<div className={styles.formName}>
						<input type="text" className={styles.name} name="fname" placeholder="Your Name" /><br />
						<input type="email" className={styles.name} name="fname" placeholder="Your Surname" /><br />
					</div>

					<div>
						<textarea onChange={onPostChange} className={styles.FormText} rows="4" ref={newPostElement} cols="50" name="comment" form={"usrform"} value={props.newPostText} placeholder="Your Post"/>
					</div>
					<button onClick={onAddPost} className={styles.formButton}>Send message</button>

				</div>
            <div className={styles.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;