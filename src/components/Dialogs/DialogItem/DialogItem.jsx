import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './../Dialogs.module.css';

function DialogItem (props) {
  const {id, name} = props
  const path = `/dialogs/${id}`;

  return (
    <div className={styles.dialogItems__inner}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;
