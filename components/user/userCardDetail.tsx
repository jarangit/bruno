import React from 'react'
import styles from '../../styles/user/userCardDetail.module.scss'
type Props = {
  fname: string;
  lname: string;
  email: string;
  tell: string;
  line: string;
}

const UserCardDetail = ({ fname, lname, email, tell, line }: Props) => {


  return (
    <div className='box_black'>

      <div className={styles.title} >
        <figure>
          <img src="/svg/builder.svg" alt="" className='icon'  />
          <figcaption>
            <p>ข้อมูลผู้เช่า</p>
            <p>
              ชื่อ: <span>{`${fname} ${lname}`}</span>
            </p>
          </figcaption>
        </figure>
        <div>
          <button className='but_gray'>รายการ AIR</button>
          <img src="/svg/tash.svg" alt="" className='icon' width={20} />
        </div>
      </div>

      <ul className={styles.listContact}>
        <li>
          <p>
            <span>
              <img src="/svg/phone.svg" alt="" className='icon' width={30} />
            </span>
            {tell}
          </p>
        </li>
        <li>
          <p>
            <span>
              <img src="/svg/email.svg" alt="" className='icon' width={30} />
            </span>
            {email}
          </p>
        </li>
        <li>
          <p>
            <span>
              <img src="/svg/line.svg" alt="" className='icon' width={30} />
            </span>
            {line}
          </p>
        </li>
      </ul>

    </div>
  )
}

export default UserCardDetail