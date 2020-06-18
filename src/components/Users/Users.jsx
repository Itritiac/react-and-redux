import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/images/userPhoto.png'

class Users extends React.Component {
  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.setUsers(response.data.items);
              this.props.setTotalUsersCount(40);
          });
  }

  onPageChanged = (pageNumber) =>{
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.setUsers(response.data.items);
          });
    
  }

  render() {
    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return (

            <div>
              <div className={styles.users}>
                  {
                    this.props.users.map( u =>
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
                                ?<button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                                :<button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>)
                  } 
              </div>
              <div className={styles.pagination}>
              { pages.map( p => {
                    return <span className={this.props.currentPage ===  p && styles.selectedPage }
                    onClick={(event) => { this.onPageChanged(p); }}>{p}</span>
                })}
                </div>
            </div>
          )
    }
}

export default Users;

