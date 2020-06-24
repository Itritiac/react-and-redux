import React from 'react';
import { NavLink } from 'react-router-dom';
import preloader from './../../assets/images/infinity.svg';
import userPhoto from './../../assets/images/userPhoto.png';
import styles from './Users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
}
    
    return (
        <div>
              <div className={styles.users}>
              {props.isFetching ? <img className={styles.preloader} src={preloader}/>: null}
                  {
                    props.users.map( u =>
                      <div className={styles.userContainer} key={u.id}>
                      <div className={styles.userCard}>
                        <div className={styles.userImage}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !=null ? u.photos.small : userPhoto} alt=""/>
                          </NavLink>
                        </div>
                        <div className={styles.userInfo}>
                          <div className={styles.userName}>{u.name}</div>
                          <div className={styles.userStatus}>{u.status}</div>
                          <div className={styles.userLocation}>{"this will be indicated location"/*"u.location.country},{u.location.city"*/}</div>
                          <div className={styles.button}>
                            { u.followed
                                ? <button disabled={props.followingInProgress
                                  .some(id => id === u.id)}
                                        onClick={() => { props.unfollow(u.id) }}>
                                  Unfollow</button>
                              : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.follow(u.id) }}>
                                        Follow</button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>)
                  } 
              </div>
              <div className={styles.pagination}>
              { pages.map( p => {
                    return <span className={props.currentPage ===  p && styles.selectedPage }
                    onClick={(event) => { props.onPageChanged(p); }}>{p}</span>
                })}
                </div>
            </div>
    )
}

export default Users;