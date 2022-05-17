import { AsyncThunkAction } from '@reduxjs/toolkit'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LineChart } from '../components/charts/LineChart'
import SettingTable from '../components/table/settingTable'
import { buildingAsync } from '../redux/slice/buildingSlice'
import styles from "../styles/page/settingPage.module.scss"
type Props = {}

const Setting = (props: Props) => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { data } = useSelector((state: any) => state.building)


  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(buildingAsync(38))
    } else {
      router.push('/signin')
      return
    }
  }, [])


  return (
    <>
      <Link href={"/"}>
        <img src="svg/arrowLeft.svg" className='icon' width={40} style={{ margin: "0px" }} alt="" />
      </Link>
      <div className='box_black'>
        <div className={styles.title}>
          <img src="/svg/gear.svg" alt="" width={20} className="icon" />
          <p>Unit Price Setting </p>
        </div>

        <div className={styles.boxGraph}>
          <div className={styles.boxGrapgL}>
            <p className={styles.bath}>
              สกุลเงิน
              <span>
                THB
              </span>
            </p>
            <div>
              <p>
                Price/Time Zone
              </p>
            </div>
          </div>

          <div className={styles.graph}>
            {data ? (
              <LineChart dataGraph={data.unit_price} />
            ) : null}
          </div>
        </div>


        <div>
          {data ? (
            <SettingTable data={data.unit_price || []} />
          ) : null}
        </div>
      </div>
    </>
  )
}
export default Setting



