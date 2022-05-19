import React, { useState } from 'react'
import Link from 'next/link';
import styles from '../../styles/user/userCardDetail.module.scss'
import DelModal from '../modal/delModal';
type Props = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  tell: string;
  line: string;
}

const UserCardDetail = ({ id, fname, lname, email, tell, line }: Props) => {

  const [isDel, setIsDel] = useState(false)
  return (
    <div className='box_black'>

      <div className={styles.title} >
        <figure>
          <img src="/svg/builder.svg" alt="" className='icon' />
          <figcaption>
            <p>ข้อมูลผู้เช่า</p>
            <p>
              ชื่อ: <span>{`${fname} ${lname}`}</span>
            </p>
          </figcaption>
        </figure>
        <div className = 'flex items-center'>
          <Link href={`/user/air/${id}`} >
            <a className='but_gray'>
              รายการ AIR
            </a>
          </Link>
          <img
            src="/svg/tash.svg"
            alt=""
            className='icon'
            width={20}
            onClick={() => setIsDel(!isDel)}
          />
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
      {isDel && (
        <DelModal 
          title = "ยืนยันที่จะลบผู้เช่านี้หรือไม่"
          onClose={setIsDel}
        />
      )
      }
    </div>
  )
}

export default UserCardDetail