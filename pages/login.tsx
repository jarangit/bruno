import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import LoginForm from '../components/form/loginForm'
import { buildingAsync } from '../redux/slice/buildingSlice'
import { getFromStorage } from '../utills'

type Props = {

}

interface UserData {
  building_owner: any
}
const Login = (props: Props) => {
  // const [data, setData] = useState()
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state: any) => state.building)
  const [userData, setUserData] = useState<UserData>()
  const allData = useSelector((state: any) => state.allBuildings)

  useEffect(() => {
    const buildingID = getFromStorage('currentBuildingID')
    dispatch(buildingAsync(Number(buildingID)))
  }, [allData.currentBuilding,])
  
  return (
    <div className='box_black'>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src="/svg/user.svg" alt="" width={20} />
        <p style={{ fontSize: "20px" }}>Owner Information</p>
      </div>

      <div>
        {data &&
          <LoginForm data={data || ""} />
        }
      </div>
    </div>
  )
}


export default Login