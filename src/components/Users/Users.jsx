import React from 'react';
import { NavLink } from 'react-router-dom';

import preloader from './../../assets/images/infinity.svg';
import userPhoto from './../../assets/images/userPhoto.png';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';


function Users(props) {
  const { follow, unfollow, followingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged } = props;

  return (
    <div>
      <div className={styles.users}>
        {props.isFetching ? <img className={styles.preloader} src={preloader} /> : null}
        {
          props.users.map(u =>
            <div className={styles.userContainer} key={u.id}>
              <div className={styles.userCard}>
                <div className={styles.userImage}>
                  <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                  </NavLink>
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>{u.name}</div>
                  <div className={styles.userStatus}>{u.status}</div>
                  <div className={styles.userLocation}>{"this will be indicated location"/*"u.location.country},{u.location.city"*/}</div>
                  <div className={styles.buttonFollowUnfollow}>
                    {u.followed
                      ? <button disabled={followingInProgress
                        .some(id => id === u.id)}
                        onClick={() => { unfollow(u.id) }}>
                        Unfollow</button>
                      : <button disabled={followingInProgress.some(id => id === u.id)}
                        onClick={() => { follow(u.id) }}>
                        Follow</button>}
                  </div>
                </div>
              </div>
            </div>)
        }
      </div>
      <Paginator currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged} />
    </div>
  )
}

export default Users;
