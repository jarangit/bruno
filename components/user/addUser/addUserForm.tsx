import React from 'react'
import styles from '../../../styles/form/addUserForm.module.scss'
type Props = {}

const AddUserForm = (props: Props) => {
  return (
    <>

      <div className={styles.main}>

        {/* <div className={styles.item}> */}
          <form className={styles.l_form}>
            <label>
              อาคาร
              <div className='selector_gray'>
                <select name="build" id="" >
                  <option value="เลือกอาคาร">เลือกอาคาร</option>
                </select>
              </div>
            </label>
            <label>
              ชั้น
              <div className='selector_gray'>
                <select name="build" id="" >
                  <option value="เลือกอาคาร">ชั้น</option>
                </select>
              </div>

            </label>
            <label>
              จำนวนห้อง
              <input type="text" placeholder="test" className='mainInput' />
            </label>
          </form>
        {/* </div> */}

        {/* <div className={styles.item}> */}
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
      {/* </div> */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className='but_gray'>บันทึก</button>
      </div>
    </>
  )
}

export default AddUserForm