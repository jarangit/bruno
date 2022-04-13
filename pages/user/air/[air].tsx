import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { AirRegisterForm } from '../../../components/form'
import { usersData } from '../../../data/usersData'
import styles from '../../../styles/page/airDetailPage.module.scss'



type Props = {}

interface User {
  id: any,
  fname: string,
  lname: string,
  email: string,
  tell: string,
  fool: string,
  line: string,
}

const AirDetailPage = (props: Props) => {

  const router = useRouter()
  const [data, setData] = useState<User>()

  useEffect(() => {
    if (router) {
      const id: any = router.query.air;
      console.log(router);

      const findUser = usersData.find((item: any) => item.id === parseInt(id))
      setData(findUser)
    }
  }, [router])
  console.log({ "this get data air page id ": data });

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <img src="/svg/follwer.svg" width={30} className = "icon" alt="" />
        <h3>รายการ AIR</h3>
      </div>

      <div className={styles.box_grid}>
        <div><AirRegisterForm /></div>
        <div><AirRegisterForm /></div>
      </div>
    </div>
  )
}

export default AirDetailPage