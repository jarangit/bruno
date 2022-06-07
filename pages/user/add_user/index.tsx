import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AirRegisterForm } from '../../../components/form'
import AddUserForm from '../../../components/user/addUser/addUserForm'
import { getAitList } from '../../../service/air/aitService'
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
  const getAllAirList = async () => {
    if (isToken) {
      const data = await getAitList(isToken, isCurrentBuilding)
      const filterData = data.filter((item: any) => item.device_type_id === 1)
      setDataAirList(filterData)

    }
  }

  useEffect(() => {
    const token = getFromStorage("token")
    const currentBuildingID: any = getFromStorage("currentBuildingID")

    if (token && currentBuildingID) {
      setIsToken(token)
      setIsCurrentBuilding(currentBuildingID)
      getAllAirList()
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
            />
          </div>
        )}

      </div>

    </div>
  )
}

export default AddUserPage;