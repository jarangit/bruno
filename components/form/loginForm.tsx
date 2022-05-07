import React, { useEffect, useState } from 'react'
import styles from "../../styles/form/loginForm.module.scss"
type Props = {
  data: any
}

const LoginForm = ({ data }: Props) => {
  // const {data} = useAppSelector(state => state.building)
  // console.log(data.building_owner);
  console.log(data);


  const [dataForm, setdataForm] = useState({
    owner: "",
    address: "",
    pastal_code: "",
    tel: "",
    email: ""
  })
  const { owner, address, pastal_code, tel, email } = dataForm


  function onChange(e: any): void {
    setdataForm({ ...dataForm, [e.target.name]: e.target.value })
  }

  function onSubmit(e: any): void {
    e.preventDefault();
  }

  useEffect(() => {

    if (data) {
      const { building_owner } = data
      console.log(building_owner);
      setdataForm({
        owner: building_owner.name,
        address: building_owner.address,
        pastal_code: building_owner.postal_code,
        tel: building_owner.mobile_number,
        email: building_owner.email
      })
    }


  }, [data])
  // console.log(dataForm);

  return (
    <form className={styles.form} onChange={onChange} onSubmit={onSubmit}>

      <div className={styles.formItem}>
        <label>Owner</label>
        <input type="text" placeholder='Owner' className='mainInput' name="owner" defaultValue={owner} />
      </div>

      <div className={styles.formItem}>
        <label>Address</label>
        <textarea placeholder='Address' className='mainTextArea' rows={5} cols={5} name="address" defaultValue={address} />
      </div>

      <div className={styles.formItem}>
        <label>Postal code</label>
        <input type="text" placeholder='Postal code' className='mainInput' name="pastal_code" defaultValue={pastal_code} />
      </div>

      <div className={styles.formItem}>
        <label>Tel</label>
        <input type="text" placeholder='Tel' className='mainInput' name="tel" defaultValue={tel} />
      </div>

      <div className={styles.formItem}>
        <label>Email</label>
        <input type="text" placeholder='Email' className='mainInput' name="email" defaultValue={email} />
      </div>

      <div className={styles.boxBut}>
        <button className='but_gray' type='submit'>
          บันทึก
        </button>
      </div>

    </form>
  )
}

export default LoginForm