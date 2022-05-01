import React, { useState } from 'react'
import SigninForm from '../components/form/signinForm'
type Props = {}

const Signin = (props: Props) => {

  return (
    <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", height:"100vh"}} >
      <SigninForm />
    </div>
  )
}
Signin.layout = "default"

export default Signin