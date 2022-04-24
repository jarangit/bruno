import React, { useState } from 'react'
type Props = {}

async function signin_api(credentials: any) {
  const token = localStorage.getItem('token')

  return fetch("https://api.airin1.com/api/login", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}



const Signin = (props: Props) => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();


  async function handleSubmit(e: any) {
    e.preventDefault()
    console.log(email);

    const res = await signin_api({
      email,
      password
    })
    console.log(res);


    if (res.token) {
      localStorage.setItem('token', res.token);
    }
  }

    return (
      <div>

        <form onSubmit={handleSubmit}  >
          <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='pass' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>signin</button>
        </form>
      </div>
    )
  }

  export default Signin