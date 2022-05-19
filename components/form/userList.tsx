import React from 'react'
import UserListItem from './userListItem'
import styles from '../../styles/form/userList.module.scss'
import { usersData } from '../../data/usersData'
import Link from 'next/link'

type Props = {
  data: []
}
const UserList = ({ data }: Props) => {
  console.log(data.length);
  



  return (
    <div className={styles.userList}>
      <div className={styles.title}>
        <h1>เลือกห้อง</h1>
        <Link href="/user/add_user/">
          <a>
            <h3 className = 'flex items-center'>
              <span>
                <img src="/svg/add.svg" width={20} className='icon' alt="" />
              </span>
              เพิ่มผู้เช่า
            </h3>
          </a>
        </Link>
      </div>

      {/* <div className={styles.list}>
        {usersData && (
          usersData.map((item, key) => (
            <UserListItem data={item} key={key} />
          ))
        )}
      </div> */}
      <div className={styles.list}>
        {data && (
          data.map((item, key) => (
            <UserListItem data={item} key={key} />
          ))
        )}
      </div>
    </div>
  )
}

export default UserList