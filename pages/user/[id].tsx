import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { usersData } from '../../data/usersData'

type Props = {}

interface User {
  id: any,
  fname: string,
  lname: string,
  email: string,
  tell: string,
  fool: string,
  line: string,
}
interface IUser {
  name: string;
}
const UserDetailPage = (props: Props) => {
  const rount = useRouter()
  const [data, setdata] = useState<User>()
  useEffect(() => {
    if (rount) {
      const id: any = rount.query.id;
      const findUser = usersData.find((item: any) => item.id === parseInt(id))
      setdata(findUser) 
      console.log(findUser);
      
    }
    console.log("render");
    
  }, [rount])
  console.log(data?.email);
  const { id, fname, lname, tell, line, email, fool } = data || {}

  return (
    <div>
      <h3>user detail page</h3>
      <div>
        {fname}
      </div>
    </div>
  )
}

export default UserDetailPage