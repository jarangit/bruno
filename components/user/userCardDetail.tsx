import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import styles from '../../styles/user/userCardDetail.module.scss'
import DelModal from '../modal/delModal';
import { useDispatch } from 'react-redux';
import { keepUserName } from '../../redux/slice/pdfSlice';
import { deleteTenantService } from '../../service/tenants/tanantsService';
import { getFromStorage } from '../../utills';
import { useRouter } from 'next/router';
type Props = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  tell: string;
  line: string;
  setIsToggleAirList: any;
}

const UserCardDetail = ({ id, fname, lname, email, tell, line, setIsToggleAirList }: Props) => {
  const [isDel, setIsDel] = useState(false)
  const [isToken, setIsToken] = useState('')
  const [idSelected, setIdSelected] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()


  // Function
  const onDeleteTenant = async () => {

    if (isToken) {
      await deleteTenantService(id, isToken)
      setIsDel(false)
      router.push('/')

    }
  }


  const onShowModalDel = async (id: any) => {
    setIsDel(true)
    // if(id){
    //   setIdSelected(id)
    // }
  }





  useEffect(() => {
    const token = getFromStorage("token")
    if (token) {
      setIsToken(token)
    }
    dispatch(keepUserName(fname))
  }, [])




  return (
    <>

      <div className='box_black'>

        <div className={styles.title} >
          <figure>
            <img src="/svg/builder.svg" alt="" className='icon' />
            <figcaption>
              <p>ข้อมูลผู้เช่า</p>
              <p>
                ชื่อ: <span>{`${fname}`}</span>
              </p>
            </figcaption>
          </figure>
          <div className='flex items-center'>
            <div>
              <div
                className='but_gray flex justify-center items-center cursor-pointer'
                onClick={() => setIsToggleAirList(true)}
              >
                รายการ AIR
              </div>
            </div>
            <img
              src="/svg/tash.svg"
              alt=""
              className='icon'
              width={20}
              onClick={() => onShowModalDel(id)}
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
            title="ยืนยันที่จะลบผู้เช่านี้หรือไม่"
            onClose={setIsDel}
            onDeleteTenant={onDeleteTenant}
          />
        )
        }
      </div>

    </>
  )
}

export default UserCardDetail