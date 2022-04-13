import React, { useState } from 'react'
import styles from "../../styles/form/loginForm.module.scss"
type Props = {}

const LoginForm = (props: Props) => {

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
  return (
    <form className={styles.form} onChange={onChange} onSubmit={onSubmit}>

      <div className={styles.formItem}>
        <label>Owner</label>
        <input type="text" placeholder='Owner' className='mainInput' name="owner" value={owner} />
      </div>

      <div className={styles.formItem}>
        <label>Address</label>
        <textarea placeholder='Address' className='mainTextArea' rows={5} cols={5} name="address" value={address} />
      </div>

      <div className={styles.formItem}>
        <label>Postal code</label>
        <input type="text" placeholder='Postal code' className='mainInput' name="pastal_code" value={pastal_code} />
      </div>

      <div className={styles.formItem}>
        <label>Tel</label>
        <input type="text" placeholder='Tel' className='mainInput' name="tel" value={tel} />
      </div>

      <div className={styles.formItem}>
        <label>Email</label>
        <input type="text" placeholder='Email' className='mainInput' name="email" value={email} />
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