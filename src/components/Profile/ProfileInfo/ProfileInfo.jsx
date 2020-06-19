import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from './../../../assets/images/userPhoto.png'

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
          <img src={props.profile.photos.large ? props.profile.photos.large
                                               : userPhoto}/>
        </div>
        <div>
          <div><strong>Username: </strong>{props.profile.fullName}</div>
          <div><strong>Status: </strong>{props.profile.aboutMe}</div>
          <div><strong>GitHub: </strong>{props.profile.contacts.github ? props.profile.contacts.github
                                                                       : 'I dont have github'}</div>
        </div>
      </div>
      </div>
)
}
export default ProfileInfo;