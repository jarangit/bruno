import React from 'react'
import { LineChart } from '../components/charts/LineChart'
import SettingTable from '../components/table/settingTable'
import styles from "../styles/page/settingPage.module.scss"
type Props = {}

const Setting = (props: Props) => {
  return (
    <>
      <figure>
        <img src="svg/arrowLeft.svg" className='icon' width={40} style={{ margin: "0px" }} alt="" />
      </figure>
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
            <LineChart />
          </div>
        </div>


        <SettingTable />
      </div>
    </>
  )
}

export default Setting