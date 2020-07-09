import React from 'react';

import styles from './Navbar.module.css';
import { NavbarUserLinks } from './NavbarElements/NavbarUserLinks';
import { NavbarShortcutsLinks } from './NavbarElements/NavbarShortcutsLinks'
import { NavbarExploreLinks } from './NavbarElements/NavbarExploreLinks'

function Navbar (props) {
  return (
    <nav className={styles.navbar}>
      <NavbarUserLinks />
      <NavbarShortcutsLinks />
      <NavbarExploreLinks />
    </nav>
  )
}

export default Navbar;
