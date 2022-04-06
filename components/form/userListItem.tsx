import React from 'react'
import styles from '../../styles/form/userListItem.module.scss'

const UserListItem = () => {
  return (
    <div className={styles.userListItem}>
      <figure className={styles.item}>
        <img src="/svg/builder.svg" width={40} className="icon" alt="" />
        <figcaption>
          <section>
            <p>
              ชั้น: A
            </p>
            <p>
              ผู้เช้า: คุณเอ
            </p>
          </section>
        </figcaption>
      </figure>


        <figure className={styles.item}>
          <img src="/svg/calculate.svg" width={40} className="icon" alt="" />
          <figcaption>
            <p>
              คิดค่าไฟ
            </p>
          </figcaption>
        </figure>

    </div>
  )
}

export default UserListItem