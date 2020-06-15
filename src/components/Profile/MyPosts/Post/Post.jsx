import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
    <div className={s.post}>
      <img src='https://www.w3schools.com/howto/img_avatar.png' />
        { props.message }
          <div>
        
      </div>
      
    </div>
    <div>likes:  { props.likesCount }</div>
    </div>
  )
}

export default Post;