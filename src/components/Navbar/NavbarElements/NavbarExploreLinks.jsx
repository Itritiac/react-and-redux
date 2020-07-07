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
          <a title="Will be soon" href="">Interesting places</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavMusicIcon />
          <a title="Will be soon" href="">Music</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavHomeIcon />
          <a title="Will be soon" href="">Happens Near You</a>
        </div>
        <div className={styles.user__shortcutsItem}>
          <NavGamesIcon />
          <a title="Will be soon" href="">Games</a>
        </div>
      </div>
    </div>
  )
}