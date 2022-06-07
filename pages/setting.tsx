import { AsyncThunkAction } from '@reduxjs/toolkit'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LineChart } from '../components/charts/LineChart'
import SettingTable from '../components/table/settingTable'
import { buildingAsync } from '../redux/slice/buildingSlice'
import styles from "../styles/page/settingPage.module.scss"
import { getFromStorage } from '../utills'
type Props = {}

const Setting = (props: Props) => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { data } = useSelector((state: any) => state.building)
  const allData = useSelector((state: any) => state.allBuildings)
  const [isToken, setIsToken] = useState("")
  const [currentBId, setCurrentBId] = useState()


  useEffect(() => {
    const token = localStorage.getItem("token")
    const currentBuildingID = getFromStorage("currentBuildingID")
    if (token && currentBuildingID) {
      dispatch(buildingAsync(Number(currentBuildingID)))
      setIsToken(token)
      setCurrentBId(currentBuildingID)
    } else {
      router.push('/signin')
      return
    }
  }, [allData.currentBuilding,])

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

          <div className={`${styles.graph} relative`}>
            {data ? (
              <LineChart dataGraph={data.unit_price} />
            ) : null}
          </div>
        </div>


        <div>
          {data && isToken && currentBId ? (
            <SettingTable data={data.unit_price || []} token={isToken} currentBId={currentBId} />
          ) : "no data"}
        </div>
      </div>
    </>
  )
}
export default Setting



