import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../styles/form/userListItem.module.scss'
type Props = {
  data: any
}
const UserListItem: React.FC<Props> = ({ data }) => {
  const [dataUsers, setDataUsers] = useState(data)

  const { id, fname, lname, tell, line, email, fool } = data

  return (
    <div className={styles.userListItem}>
      <figure className={styles.item}>
        <img src="/svg/builder.svg" width={40} className="icon" alt="" />
        <figcaption>
          <section>
            <p>
              ชั้น: {fool}
            </p>
            <p>
              ผู้เช่า: <span>{`${fname} ${lname}`}</span>
            </p>
          </section>
        </figcaption>
      </figure>


      <Link href={`/user/${id}`}>
        <figure className={styles.item}>
          <img src="/svg/calculate.svg" width={40} className="icon" alt="" />
          <figcaption>
            <p>
              คิดค่าไฟ
            </p>
          </figcaption>
        </figure>
      </Link>

    </div>
  )
}

export default UserListItem