import React from 'react';

import styles from './MyPosts.module.css';
import UploadedPosts from './Posts/UploadedPosts';
import { CreatePost } from './Posts/CreatePosts';

class MyPosts extends React.PureComponent {
    render() {
        let postsElements =
            [...this.props.posts].reverse().map(p => <UploadedPosts message={p.message} name={p.name} likesCount={p.likesCount} />);

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return (
            <div className={styles.postsBlock}>
                <CreatePost onSubmit={onAddPost} />
                {postsElements}

            </div>
        )
    }
}

export default MyPosts; 