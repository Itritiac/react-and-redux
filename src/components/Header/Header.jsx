import React from 'react';

import styles from './Header.module.css';
import { HeaderLeft } from './HeaderElements/HeaderLeft';
import { HeaderRight } from './HeaderElements/HeaderRight';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <HeaderLeft />
          <HeaderRight {...props} />
        </div>
      </div>
    </header>
  )
}

export default Header;
