import Link from 'next/link'
import React from 'react'
import AddUserForm from '../../../components/user/addUser/addUserForm'
import styles from '../../../styles/user/addUser.module.scss'
type Props = {}

const AddUserPage = (props: Props) => {
  return (
    <div className='box_black'>
      <div className={styles.title}>
        <div>
          <img src="/svg/add.svg" alt="" width={30} className="icon" />
          <h3>
            Tile
          </h3>
        </div>

        <Link href = "/user/air/1">
          <a  className='but_gray' >รายการ AIR</a>
        </Link>
      </div>

      <div className={styles.box_form}>
        <AddUserForm />
      </div>
    </div>
  )
}

export default AddUserPage;