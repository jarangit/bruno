import React from 'react'
import LoginForm from '../components/form/loginForm'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='box_black'>
      <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
        <img src="/svg/user.svg" alt="" width={20} />
        <p style={{fontSize: "20px"}}>Owner Information</p>
      </div>

      <div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login