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
  console.log('%cMyProject%cline:16%cdataForm', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 147, 29);padding:3px;border-radius:2px', dataForm)
  const getAllAirList = async () => {
    if (isToken) {
      const data = await getAitList(isToken, isCurrentBuilding)
      setDataAirList(data)

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
          <div>
            <AirRegisterForm data={dataAirList} title="รายการ Air" airSelected={airSelected} />
          </div>
        ) : (
          <div className={styles.box_form}>
            <AddUserForm
              airSelected={airSelected}
              setDataForm={setDataForm}
              oldData = {dataForm}
            />
          </div>
        )}

      </div>

    </div>
  )
}

export default AddUserPage;