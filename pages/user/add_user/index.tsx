import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AirRegisterForm } from '../../../components/form'
import AddUserForm from '../../../components/user/addUser/addUserForm'
import { getAitList } from '../../../service/air/aitService'
import { getTenantByBuildingId } from '../../../service/tenants/tanantsService'
import styles from '../../../styles/user/addUser.module.scss'
import { getFromStorage } from '../../../utills'
type Props = {}

const AddUserPage = (props: Props) => {
  const [toggle, setToggle] = useState(false)
  const [isToken, setIsToken] = useState("")
  const [isCurrentBuilding, setIsCurrentBuilding] = useState()
  const [dataAirList, setDataAirList] = useState()
  const [airSelected, setAirSelected] = useState([])
  const [dataForm, setDataForm] = useState()
  const [floorData, setFloorData] = useState()
  console.log('%cMyProject%cline:18%cfloorData', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(38, 157, 128);padding:3px;border-radius:2px', floorData)
  const getAllAirList = async () => {
    if (isToken) {
      const data = await getAitList(isToken, isCurrentBuilding)
      const filterData = data.filter((item: any) => item.device_type_id === 1)
      setDataAirList(filterData)

    }
  }
  const getFloor = async () => {
    if (isToken) {
      const data = await getTenantByBuildingId(isToken, isCurrentBuilding)
      const filter = data.filter((item: any) => item.is_two_level === true)
      console.log('%cMyProject%cline:31%cfilter', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(178, 190, 126);padding:3px;border-radius:2px', filter)
      setFloorData(filter)
    }
  }
  useEffect(() => {
    const token = getFromStorage("token")
    const currentBuildingID: any = getFromStorage("currentBuildingID")

    if (token && currentBuildingID) {
      setIsToken(token)
      setIsCurrentBuilding(currentBuildingID)
      getAllAirList()
      getFloor()
    }
    return () => { }
  }, [isToken, airSelected])
  return (
    <div className='box_black'>
      <div className={styles.title}>
        <div>
          <img src="/svg/add.svg" alt="" width={30} className="icon" />
          <h3>
            เพิ่มผู้เช่า
          </h3>
        </div>

        <div>
          <div
            className='but_gray text-center flex justify-center'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "กลับ" : "รายการ AIR"}
          </div>
        </div>
      </div>

      <div>
        {toggle ? (
          <AirRegisterForm data={dataAirList} title="รายการ Air" airSelected={airSelected} />
        ) : (
          <div className={styles.box_form}>
            <AddUserForm
              airSelected={airSelected}
              setDataForm={setDataForm}
              oldData={dataForm}
              floorData = {floorData}
            />
          </div>
        )}

      </div>

    </div>
  )
}

export default AddUserPage;