import React from 'react'

import styles from './Sidebar.module.css'
import Stories from './SidebarElements/Stories'
import BirthdayAnouncer from './SidebarElements/BirthdayAnouncer'
import UserPAgeInfo from './SidebarElements/UserPageInfo'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Stories />
      <BirthdayAnouncer />
      <UserPAgeInfo />
    </div>
  )
}

export default Sidebar;
