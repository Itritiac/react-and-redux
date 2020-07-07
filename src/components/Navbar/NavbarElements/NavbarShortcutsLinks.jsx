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
          <a title="Will be soon" href="">Best Design Group</a>
        </div>
        <div title="Will be soon" className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href="">All About React</a>
        </div>
        <div title="Will be soon" className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a href="">My Shortcuts</a>
        </div>
        <div title="Will be soon" className={styles.user__shortcutsItem}>
          <NavTrophyIcon />
          <a title="Will be soon" href="">Classmate's Group</a>
        </div>
      </div>
    </div>
  )
}