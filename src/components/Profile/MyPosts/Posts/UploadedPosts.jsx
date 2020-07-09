import React from 'react';

import styles from './Post.module.css';
import { UploadPoint, UploadSettings, UploadMore, LikeStats, LikeFooter, ShareFooter, CommentFooter } from '../../../../assets/icons/icons';
import userPhoto from './../../../../assets/images/userPhoto.png'

function UploadedPosts (props) {
  return (
    <div className={styles.uploaded__post}>
      <div className={styles.uploaded__postTop}>
        <div className={styles.uploaded__postUser}>
          <div className={styles.uploaded__postAvatar}>
            <img src={userPhoto} alt="userPhoto" />
          </div>
          <div className={styles.uploaded__postName}>{props.name}
            <div className={styles.uploaded__postStatus}>3 hrs
              <UploadPoint />
              <UploadSettings />
            </div>
          </div>
        </div>
        <button>
          <UploadMore />
        </button>
      </div>
      <div className={styles.uploaded__postText}>
        <p>{props.message}</p>
      </div>
      <div className={styles.uploaded__postImage}>
        <img src="https://img.wallpapersafari.com/tablet/2560/1700/59/8/SPvEHh.jpg" alt="uploadedImage" />
      </div>
      <div className={styles.uploaded__postStats}>
        <LikeStats />
        {props.likesCount}
      </div>
      <div className={styles.uploaded__postFooter}>
        <button>
          <LikeFooter />
          Like
        </button>
        <button>
          <CommentFooter />
          Comment
        </button>
        <button>
          <ShareFooter />
          Share
        </button>
      </div>
    </div>
  )
}

export default UploadedPosts;
