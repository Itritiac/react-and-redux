import React from 'react';
import { NavTrophyIcon } from '../../../assets/icons/icons';
import styles from './../Navbar.module.css';

export const NavbarShortcutsLinks = (props) => {
  return (
    <div className={styles.shortcuts}>
      <div className={styles.shortcutsTitle}>Shortcuts</div>
      <div className={styles.user__shortcuts}>
        <div className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href>Best Design Group</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href>All About React</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href>My Shortcuts</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href>Classmate's Group</a>
        </div>
      </div>
    </div>
  )
}