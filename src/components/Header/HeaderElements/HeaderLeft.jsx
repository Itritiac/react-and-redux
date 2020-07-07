import React from 'react';
import { Link } from 'react-router-dom';

import styles from './../Header.module.css'
import { SearchIcon } from '../../../assets/icons/icons';

export const HeaderLeft = (props) => {
  return (
    <div className={styles.header__innerLeft}>
      <Link to="/home">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
      </Link>
      <form className={styles.header__innerForm}>
        <input className={styles.header__innerSearchBar} type="text" placeholder="Search" name="search" />
        <button className={styles.header__innerSearchIcon} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}