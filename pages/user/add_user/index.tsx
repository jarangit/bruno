import React from 'react'
import AddUserForm from '../../../components/user/addUser/addUserForm'
import styles from '../../../styles/user/addUser.module.scss'
type Props = {}

const AddUserPage = (props: Props) => {
  return (
    <div className='box_black'>
      <div className={styles.title}>
        <img src="/svg/add.svg" alt="" width={30} className="icon" />
        <h3>
          Tile
        </h3>
      </div>

      <div className={styles.box_form}>
          <AddUserForm/>
      </div>
    </div>
  )
}

export default AddUserPage;