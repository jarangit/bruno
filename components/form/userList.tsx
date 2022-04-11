import React from 'react'
import UserListItem from './userListItem'
import styles from '../../styles/form/userList.module.scss'
import {usersData} from '../../data/usersData'
const UserList = () => {
  return (
    <div className={styles.userList}>
      <div className={styles.title}>
        <h1>เลือกห้อง</h1>
        <h3>
          <span>
            <img src="/svg/add.svg" width={20} className='icon' alt="" />
          </span>
          เพิ่มผู้เช่า
        </h3>
      </div>

      <div className={styles.list}>
        {usersData && (
          usersData.map((item, key) => (
            <UserListItem data = {item} key = {key} />
          ))
        )}
      </div>
    </div>
  )
}

export default UserList