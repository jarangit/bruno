import React from 'react'
import styles from '../../../styles/form/addUserForm.module.scss'
type Props = {}

const AddUserForm = (props: Props) => {
  return (
    <>

      <div className={styles.main}>
        <div>
          <form className={styles.l_form}>
            <label>
              อาคาร
              <select name="build" id="" className='selector_gray'>
                <option value="เลือกอาคาร">เลือกอาคาร</option>
              </select>
            </label>
            <label>
              ชั้น
              <select name="build" id="" className='selector_gray'>
                <option value="เลือกอาคาร">ชั้น</option>
              </select>
            </label>
            <label>
              จำนวนห้อง
              <input type="text" placeholder="test" className='mainInput' />
            </label>
          </form>
        </div>
        <div>
          <form className={styles.r_form}>
            <label>
              ชื่อผู้เช่า
              <input type="text" placeholder="กรอกชื่อ" className='mainInput' />
            </label>
            <label>
              เบอร์โทร
              <input type="text" placeholder="กรอกเบอร์โทร" className='mainInput' />
            </label>
            <label>
              Email
              <input type="text" placeholder="กรอก Email" className='mainInput' />
            </label>
            <label>
              ID Line
              <input type="text" placeholder="ID Line" className='mainInput' />
            </label>
          </form>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className='but_gray'>บันทึก</button>
      </div>
    </>
  )
}

export default AddUserForm