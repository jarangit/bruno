import React from 'react'
import styles from '../../styles/calculate/calculator.module.scss'
type Props = {
  // title: string;
  // data:[];
  // id: number;
}

const Calculator = (props: Props) => {
  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>Title</h3>
        <div className={styles.box_icon}>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">พฤษจิกายน</option>
          </select>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">2021</option>
          </select>
          <img src="/svg/refersh.svg" width={40} alt="" />
          <img src="/svg/sendMail.svg" width={40} alt="" />
        </div>
      </div>

      <ul className={styles.menu_item}>
        <li>
          <p>
            ประจำวันที่
          </p>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">01</option>
          </select>
        </li>
        <li>
          <p>
            ถึง
          </p>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">01</option>
          </select>
        </li>
        <li>
          <button className='but_green'>
            Show All
          </button>
        </li>
        <li>
          <button className='but_blue'>
            Show
          </button>
        </li>
      </ul>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              เวลา
            </th>
            <th>
              การใช้พลังงาน
            </th>
            <th>
              ราคา
            </th>
            <th>
              ราคาต่อหน่วย
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Peak
            </td>
            <td>
              0.00
            </td>
            <td>
              0.00
            </td>
            <td>
              2
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Calculator