import React from 'react';

import preloader from '../../../assets/images/infinity.svg';
import styles from './preloader.module.css';

let Preloader = (props) => {
  return (
    <div>
      <img className={styles.preloader} src={preloader} />
    </div>
  )
}

export default Preloader;
 