import React, { useEffect, useState } from 'react'
import LoginForm from '../components/form/loginForm'
import { buildingAsync } from '../redux/slice/buildingSlice'
import { useAppDispatch } from '../redux/store'

type Props = {

}


const Login = (props: Props) => {
  const [data, setData] = useState()
  console.log(data);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const dataBuilding = dispatch(buildingAsync(38))
    if (dataBuilding) {
      setData(dataBuilding)
    }
  }, [])

  return (
    <div className='box_black'>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src="/svg/user.svg" alt="" width={20} />
        <p style={{ fontSize: "20px" }}>Owner Information</p>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  )
}


export default Login