import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { usersData } from '../../../data/usersData'

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

const AirDetailPage = (props: Props) => {

  const router = useRouter()
  const [data, setData] = useState<User>()

  useEffect(() => {
    if (router) {
      const id: any = router.query.id;
      const findUser = usersData.find((item: any) => item.id === parseInt(id))
      setData(findUser)
    }
  }, [router])
  
  return (
    <div>AirSinglePage</div>
  )
}

export default AirDetailPage