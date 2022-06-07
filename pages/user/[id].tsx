import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TabNavItem from '../../components/tab/tabNavItem'
import TabContent from '../../components/tab/tabContent'
import UserCardDetail from '../../components/user/userCardDetail'
import { usersData } from '../../data/usersData'
import Tabs from '../../components/tab/tab'
import { useDispatch, useSelector } from 'react-redux'
import { buildingListAsync } from '../../redux/slice/buildingListSlice'
import { keepUserName } from '../../redux/slice/pdfSlice'
import { getTenant } from '../../service/tenants/tanantsService'
import { AirRegisterForm } from '../../components/form'
type Props = {}

interface User {
  id: number
  building_id: any,
  name: string,
  email: string,
  mobile_number: string,
  floor_id: string,
  line_id: string,
  devices: any,
}

const UserDetailPage = (props: Props) => {
  const [buildingDataList, setBuildingDataList] = useState([])
  const [isToggleAirList, setIsToggleAirList] = useState(false)

  const { data, status } = useSelector((state: any) => state.buildingList)
  const dispatch = useDispatch()
  const router = useRouter()
  const [dataUser, setDataUser] = useState<User>({})


  const getTenantUser = async (token: any, id: any) => {
    const data: any = await getTenant(token, id)
    if (data) {
      setDataUser(data)
    }

  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (router && token) {
      const id: any = router.query.id;
      if (data != undefined) {
        const findUser = data.filter((item: any) => item.id === parseInt(id))
        getTenantUser(token, id)
      }
    }
  }, [router, status])


  return (
    <div>
      {dataUser && (
        <>
          {isToggleAirList ? (
            <div className='bg-black p-10 rounded-2xl'>
              <div onClick={() => setIsToggleAirList(false)}>
                <img src="/svg/arrowLeft.svg" className='icon' width={40} style={{ margin: "0px" }} alt="" />
              </div>
              <AirRegisterForm data={dataUser.devices} title={"รายการ Air"} airSelected={""} />
            </div>
          ) : (
            <>
              <UserCardDetail
                id={dataUser.id}
                fname={dataUser.name || ""}
                lname={dataUser.name || ""}
                email={dataUser.email || ""}
                tell={dataUser.mobile_number || ""}
                line={dataUser.line_id || ""}
                setIsToggleAirList={setIsToggleAirList}
              />


              <Tabs />
            </>
          )}

        </>

      )}
    </div>
  )
}

export default UserDetailPage