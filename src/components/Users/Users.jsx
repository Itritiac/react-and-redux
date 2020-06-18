import React from 'react';
import styles from './Users.module.css'



let Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers([
            {
                id: 1,
                photoUrl: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=',
                followed: false,
                fullName: 'Dmitry',
                status: 'I want to find a good job',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=',
                followed: false,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=',
                followed: false,
                fullName: 'Andrew',
                status: 'Now I am busy',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]
    )
}

    return (
        <div className={styles.users}>
            {
              props.users.map( u =>
                <div className={styles.userContainer} key={u.id}>
                <div className={styles.userCard}>
                  <div className={styles.userImage}>
                    <img src={u.photoUrl} alt=""/>
                  </div>
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>{u.fullName}</div>
                    <div className={styles.userStatus}>{u.status}</div>
                    <div className={styles.userLocation}>{u.location.country},{u.location.city}</div>
                    <div>
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
    )
}

export default Users;

