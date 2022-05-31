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
type Props = {}

interface User {
  building_id: any,
  name: string,
  email: string,
  mobile_number: string,
  floor_id: string,
  line_id: string,
}

const UserDetailPage = (props: Props) => {
  const [buildingDataList, setBuildingDataList] = useState([])
  const { data, status } = useSelector((state: any) => state.buildingList)
  const dispatch = useDispatch()
  const router = useRouter()
  const [dataUser, setDataUser] = useState<[User]>([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (router && token) {
      dispatch(buildingListAsync(38))
      const id: any = router.query.id;
      if (data != undefined) {
        const findUser = data.filter((item: any) => item.id === parseInt(id))

        setDataUser(findUser)
      }
    }
  }, [router, status])


  return (
    <div>
      {data && (
        dataUser.map((item, key) => (
          <React.Fragment key={key}>
            <UserCardDetail
              id={item.building_id}
              fname={item.name || ""}
              lname={item.name || ""}
              email={item.email || ""}
              tell={item.mobile_number || ""}
              line={item.line_id || ""}
            />
          </React.Fragment>
        ))
      )}
      <Tabs />
    </div>
  )
}

export default UserDetailPage