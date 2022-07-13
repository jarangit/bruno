import React from 'react'
import UserListItem from './userListItem'
import styles from '../../styles/form/userList.module.scss'
import { usersData } from '../../data/usersData'
import Link from 'next/link'

type Props = {
  data: [];
  typeUser:boolean;
}
const UserList = ({ data, typeUser }: Props) => {
  



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
      <div className={`gap-5 grid  grid-cols-1 lg:grid-cols-2`}>
        {data && data.length ?(
          data.map((item, key) => (
            <UserListItem data={item} key={key} typeUser = {typeUser} />
          ))
        ):"ไม่พบรายการ"}
      </div>
    </div>
  )
}

export default UserList