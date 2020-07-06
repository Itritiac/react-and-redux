import React from 'react';
import { NavPlacesIcon, NavMusicIcon, NavHomeIcon, NavGamesIcon } from '../../../assets/icons/icons';
import styles from './../Navbar.module.css';

export const NavbarExploreLinks = () => {
  return (
    <div className="explore">
      <div className={styles.shortcutsTitle}>Explore</div>
      <div className={styles.user__shortcuts}>
        <div className={styles.user__shortcutsItem}>
          <NavPlacesIcon />
          <a href>Interesting places</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavMusicIcon />
          <a href>Music</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavHomeIcon />
          <a href>Happens Near You</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavGamesIcon />
          <a href>Games</a>
        </div>
      </div>
    </div>
  )
}