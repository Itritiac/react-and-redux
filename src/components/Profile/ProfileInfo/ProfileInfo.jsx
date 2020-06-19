import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
      return (
        <div>
          <Preloader/>
        </div>
      )
  }
  return (
    <div>
    <div className = {styles.contentImage}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
          </div>
      <div className={styles.content__avatar}>

        <div className={styles.content__avatarImage}>
          <img src={props.profile.photos.large}/>
        </div>
        <div>
          <div><strong>Username: </strong>Itritiac</div>
          <div><strong>Email: </strong>itritiac@gmail.com</div>
          <div><strong>Phone: </strong> +(373) 69 12 34 56</div>
        </div>
      </div>
      </div>
)
}
export default ProfileInfo;