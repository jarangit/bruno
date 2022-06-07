import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AirRegisterForm } from '../../../components/form'
import { usersData } from '../../../data/usersData'
import styles from '../../../styles/page/airDetailPage.module.scss'
import { baseUrl, fetchApi } from '../../../utills/fecthApi'
import cookie from "cookie";
import { GetServerSideProps } from 'next'



type Props = {
  dataAitList: []
}

interface User {
  id: any,
  fname: string,
  lname: string,
  email: string,
  tell: string,
  fool: string,
  line: string,
}

const AirDetailPage = ({ dataAitList }: Props) => {
  console.log('%cMyProject%cline:26%cdataAitList', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', dataAitList)
 
  const router = useRouter()
  const [data, setData] = useState<User>()
  const [dataFormLeft, setDataFormLeft] = useState([])
  const [dataFormRight, setDataFormRight] = useState([])
  
  useEffect(() => {
    if (router) {
      const id: any = router.query.air;

      const findUser = usersData.find((item: any) => item.id === parseInt(id))
      setData(findUser)
    }
    if(dataAitList){
      const findLeft =  dataAitList.filter((item: any) => item.device_type_id === 1)      
      const findRight =  dataAitList.filter((item: any) => item.device_type_id === 2)      
      if(findLeft && findRight){
        setDataFormLeft(findLeft)
        setDataFormRight(findRight)
      }
    }
  }, [router, dataAitList])

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <img src="/svg/follwer.svg" width={30} className="icon" alt="" />
        <h3>รายการ AIR</h3>
      </div>

      <div className={styles.box_grid}>
        <div><AirRegisterForm title="Registered points" data = {dataFormLeft}  airSelected = {""} /></div>
        <div><AirRegisterForm title="Un Registered points"   data = {dataFormRight} airSelected = {""}/></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className='but_gray' >บันทึก</button>
      </div>
    </div>
  )
}

export default AirDetailPage


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const myCookie = cookie.parse(
    (req && req.headers.cookie) || ""
  );
  const token = myCookie.token
  const ariList = await fetchApi(`${baseUrl}/devices?building_id=38`, token)
  
  return {
    props: {
      dataAitList: ariList
    }
  }
}

