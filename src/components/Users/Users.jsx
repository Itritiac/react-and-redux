import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/images/userPhoto.png'



let Users = (props) => {
  let getUsers = ()  => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
      props.setUsers(response.data.items) 
    });
  }
}

    return (
      <div>
        <button onClick={getUsers}>getUsers</button>
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
      </div>
    )
}

export default Users;

