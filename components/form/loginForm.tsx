import React from 'react'
import styles from "../../styles/form/loginForm.module.scss"
type Props = {}

const LoginForm = (props: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.formItem}>
        <label>Owner</label>
        <input type="text" placeholder='Owner' className='mainInput' />
      </div>
      <div className={styles.formItem}>
        <label>Address</label>
        <textarea placeholder='Address' className='mainTextArea' rows={5} cols={5} />
      </div>
      <div className={styles.formItem}>
        <label>Postal code</label>
        <input type="text" placeholder='Postal code' className='mainInput' />
      </div>
      <div className={styles.formItem}>
        <label>Tel</label>
        <input type="text" placeholder='Tel' className='mainInput'/>
      </div>
      <div className={styles.formItem}>
        <label>Email</label>
        <input type="text" placeholder='Email' className='mainInput'/>
      </div>
      <div className = {styles.boxBut}>
        <button className='but_gray'>
          บันทึก
        </button>
      </div>
    </form>
  )
}

export default LoginForm