import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import TabNavItem from '../../components/tab/tabNavItem'
import TabContent from '../../components/tab/tabContent'
import UserCardDetail from '../../components/user/userCardDetail'
import { usersData } from '../../data/usersData'
import Tabs from '../../components/tab/tab'
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

const UserDetailPage = (props: Props) => {

  const router = useRouter()
  const [data, setData] = useState<User>()

  useEffect(() => {
    if (router) {
      const id: any = router.query.id;
      const findUser = usersData.find((item: any) => item.id === parseInt(id))
      setData(findUser)
    }
  }, [router])

  const { id, fname, lname, tell, line, email, fool } = data || {}

  return (
    <div>
      {data && (
        <UserCardDetail
          fname={fname || ""}
          lname={lname || ""}
          email={email || ""}
          tell={tell || ""}
          line={line || ""}
        />
      )}
      <Tabs/>
    </div>
  )
}

export default UserDetailPage