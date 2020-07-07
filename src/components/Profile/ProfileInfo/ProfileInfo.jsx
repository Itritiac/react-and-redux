import React from 'react';

import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from './../../../assets/images/userPhoto.png'
import ProfileStatusWithHooks from './ProfileStatusHooks';
import { UploadIcon } from '../../../assets/icons/icons';
import cover from './../../../assets/images/cover.jpg'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <div>
        <Preloader />
      </div>
    )
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__top}>
        <div className={styles.profile__topCover}>
          <img src={cover} alt="" />
        </div>
      </div>
      <div className={styles.profile__avatar}>
        <img src={props.profile.photos.large ? props.profile.photos.large
          : userPhoto} />
      </div>
      {props.isOwner &&
        <div>
          <input type="file" id="file" onChange={onMainPhotoSelected} />
          <label for="file">
            <span class={styles.uploadImage}>
              <UploadIcon />
            </span>
          </label>
        </div>}
      <div className={styles.profile__name}>{props.profile.fullName}</div>
      <div className={styles.profile__status}>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div className={styles.profile__aboutUser}>
        <div className={styles.profile__aboutUser__mainInfo}>
          <div><strong>Facebook: </strong></div>
          <div><strong>Vk: </strong></div>
          <div><strong>GitHub: </strong></div>
        </div>
        <div className={styles.profile__link}>
          <div>{props.profile.contacts.facebook ? props.profile.contacts.facebook
            : <div>Facebook.com</div>}
          </div>
          <div>{props.profile.contacts.vk ? props.profile.contacts.vk
            : <div>Vk.com</div>}
          </div>
          <div>{props.profile.contacts.vk ? props.profile.contacts.vk
            : <div>GitHub.com</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;