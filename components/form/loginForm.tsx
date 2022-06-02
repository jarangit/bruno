import React, { useEffect, useState } from 'react'
import { editOwnerInformation } from '../../service/owner/ownerService'
import styles from "../../styles/form/loginForm.module.scss"
import { getFromStorage } from '../../utills'
type Props = {
  data: any
}

const LoginForm = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentBuildingID, setCurrentBuildingID] = useState<string>('')

  const [isToken, setIsToken] = useState('')
  const [dataForm, setdataForm] = useState({
    name: "",
    address: "",
    postal_code: "",
    mobile_number: "",
    email: "",
    line_id: "line",
    room_count: 3,
  })
  const { name, address, postal_code, mobile_number, email, line_id } = dataForm


  function onChange(e: any): void {
    setdataForm({ ...dataForm, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: any) => {
    setIsLoading(true)
    e.preventDefault();
    if (isToken) {
      await editOwnerInformation(dataForm, isToken, currentBuildingID)
      setIsLoading(false)
    }
  }


  useEffect(() => {
    const token = getFromStorage("token")
    const buildingID = localStorage.getItem("currentBuildingID")

    if (token && buildingID) {
      setIsToken(token)
      setCurrentBuildingID(buildingID)

    }
    if (data.building_owner) {
      const { building_owner } = data
      setdataForm({
        name: building_owner.name,
        address: building_owner.address,
        postal_code: building_owner.postal_code,
        mobile_number: building_owner.mobile_number,
        email: building_owner.email,
        line_id: "line",
        room_count: 3,
      })
    } else {
      setdataForm({
        name: "",
        address: "",
        postal_code: "",
        mobile_number: "",
        email: "",
        line_id: "",
        room_count: 0,
      })
    }


  }, [data])


  return (
    <>
      <form className={styles.form} onChange={onChange} onSubmit={onSubmit}>

        <div className={styles.formItem}>
          <label>Owner</label>
          <input type="text" placeholder='name' className='mainInput' name="name" defaultValue={name ? name : ""} />
        </div>

        <div className={styles.formItem}>
          <label>Address</label>
          <textarea placeholder='Address' className='mainTextArea' rows={5} cols={5} name="address" defaultValue={address ? address : ""} />
        </div>

        <div className={styles.formItem}>
          <label>Postal code</label>
          <input type="text" placeholder='Postal code' className='mainInput' name="postal_code" defaultValue={postal_code ? postal_code : ""} />
        </div>

        <div className={styles.formItem}>
          <label>Tel</label>
          <input type="text" placeholder='Tel' className='mainInput' name="mobile_number" defaultValue={mobile_number ? mobile_number : ""} />
        </div>

        <div className={styles.formItem}>
          <label>Email</label>
          <input type="text" placeholder='Email' className='mainInput' name="email" defaultValue={email ? email : ""} />
        </div>

        <div className={styles.boxBut}>
          <button className='but_gray' type='submit'>
            {isLoading ? "Loading..." : "บันทึก"}
          </button>
        </div>

      </form>
    </>
  )
}

export default LoginForm