import React from 'react';

import styles from './Navbar.module.css';
import { NavbarUserLinks } from './NavbarElements/NavbarUserLinks';
import { NavbarShortcutsLinks } from './NavbarElements/NavbarShortcutsLinks'
import { NavbarExploreLinks } from './NavbarElements/NavbarExploreLinks'

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <NavbarUserLinks {...props} />
      <NavbarShortcutsLinks />
      <NavbarExploreLinks />
    </nav>
  )
}

export default Navbar;
