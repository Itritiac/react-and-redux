import React from 'react'
import styles from './../Sidebar.module.css'
import { GiftIcon } from '../../../assets/icons/icons';

const BirthdayAnouncer = () => {
  return(
    <div className={styles.stories}>
        <div className={styles.stories__news}>
          <GiftIcon/>
          <div className={styles.stories__newsTitle}>Jonh Does</div>
          <div className={styles.stories__newsText}>'s birthday is today</div>
        </div>
      </div>
  )
}

export default BirthdayAnouncer;