import React from 'react'
import styles from '../../styles/calculate/calculator.module.scss'
type Props = {
  title: string;
  slug: string;
  // data:[];
  // id: number;
}

const Calculator = ({ title, slug }: Props) => {

  const ShowQuerySelect = () => {
    if (slug === "day") {
      return (
        <>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">พฤษจิกายน</option>
          </select>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">2021</option>
          </select>
        </>
      )
    } else if (slug === "month") {
      return (
        <select name="start_day" id="" className='selector_gray'>
          <option value="">2021</option>
        </select>
      )
    } else return <></>
  }

  const ShowSelectFilter = () => {
    if (slug === "day") {
      return (
        <>
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
        </>
      )
    } else if (slug === "month") {
      return (
        <>
          <li>
            <p>
              ประจำเดือนที่
            </p>
            <select name="start_day" id="" className='selector_gray'>
              <option value="">พฤษจิกายน</option>
            </select>
          </li>
          <li>
            <p>
              ถึง
            </p>
            <select name="start_day" id="" className='selector_gray'>
              <option value="">พฤษจิกายน</option>
            </select>
          </li>
        </>
      )
    } else if (slug === "year") {
      return (
        <>
          <li>
            <p>
              ประจำปีที่
            </p>
            <select name="start_day" id="" className='selector_gray'>
              <option value="">2021</option>
            </select>
          </li>
          <li>
            <p>
              ถึง
            </p>
            <select name="start_day" id="" className='selector_gray'>
              <option value="">2021</option>
            </select>
          </li>
        </>
      )
    } else return (
      <>
        <li>
          <p>
            ประจำวันที่
          </p>
          <input type="date" className={styles.inputDate}/>
        </li>
        <li>
          <p>
            ถึง
          </p>
          <input type="date" className={styles.inputDate}/>
        </li>
      </>
    )
  }

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>{title}</h3>
        <div className={styles.box_icon}>
          <ShowQuerySelect />
          <img src="/svg/refersh.svg" width={30} alt="" className='icon' />
          <img src="/svg/sendMail.svg" width={30} alt="" className='icon' />
        </div>
      </div>

      <ul className={styles.menu_item}>
        <ShowSelectFilter />
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