import React from 'react';
import styles from './Users.module.css'
import userPhoto from './../../assets/images/userPhoto.png'

const Users = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
              <div className={styles.users}>
                  {
                    props.users.map( u =>
                      <div className={styles.userContainer} key={u.id}>
                      <div className={styles.userCard}>
                        <div className={styles.userImage}>
                          <img src={u.photos.small !=null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div className={styles.userInfo}>
                          <div className={styles.userName}>{u.name}</div>
                          <div className={styles.userStatus}>{u.status}</div>
                          <div className={styles.userLocation}>{"this will be indicated location"/*"u.location.country},{u.location.city"*/}</div>
                          <div className={styles.button}>
                            { u.followed
                                ?<button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                :<button onClick={ () => {props.follow(u.id)} }>Follow</button>
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