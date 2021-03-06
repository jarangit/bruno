import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/calculate/calculator.module.scss'
type Props = {
  title: string;
  slug: string;
  data: {
    id: number;
    used: number;
    price: number;
    unitPrice: number;
  }[];
  // id: number;
}


const Calculator = ({ title, slug, data }: Props) => {
  const [dataTable, setdataTable] = useState(data)
  const [usedTotal, setusedTotal] = useState(0)
  const ShowQuerySelect = () => {
    if (slug === "day") {
      return (
        <>
          <div className='selector_gray'>
            <select name="start_day" id="" >
              <option value="">พฤษจิกายน</option>
            </select>
          </div>
          <div className='selector_gray'>
            <select name="start_day" id="" className='selector_gray'>
              <option value="">2021</option>
            </select>
          </div>

        </>
      )
    } else if (slug === "month") {
      return (

        <div className='selector_gray'>
          <select name="start_day" id="" className='selector_gray'>
            <option value="">2021</option>
          </select>
        </div>

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
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">01</option>
              </select>
            </div>

          </li>
          <li>
            <p>
              ถึง
            </p>
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">01</option>
              </select>
            </div>
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
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">พฤษจิกายน</option>
              </select>
            </div>

          </li>
          <li>
            <p>
              ถึง
            </p>
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">พฤษจิกายน</option>
              </select>
            </div>
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
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">2021</option>
              </select>
            </div>

          </li>
          <li>
            <p>
              ถึง
            </p>
            <div className='selector_gray'>
              <select name="start_day" id="" className='selector_gray'>
                <option value="">2021</option>
              </select>
            </div>
          </li>
        </>
      )
    } else return (
      <>
        <li>
          <p>
            ประจำวันที่
          </p>
          <input type="date" className={styles.inputDate} />
        </li>
        <li>
          <p>
            ถึง
          </p>
          <input type="date" className={styles.inputDate} />
        </li>
      </>
    )
  }

  const CheckPeak = (used: number) => {
    if (used > 90) {
      return "#FF4967"
    } else if (used > 50 && used < 90) {
      return "#FFFF82"
    } else return "white"
  }
  useEffect(() => {
    let sum = 0
    dataTable.forEach(e => {

      return setusedTotal(sum += e.used)
    })
  }, [data])

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>{title}</h3>
        <div className={styles.box_icon}>
          <ShowQuerySelect />
          <img src="/svg/refersh.svg" width={30} alt="" className='icon' />
          <Link href={`/user/pdf/${slug}`}>
            <img src="/svg/sendMail.svg" width={30} alt="" className='icon' />
          </Link>
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
          {dataTable &&
            dataTable.map((item, key) => (
              <React.Fragment key={key}>
                <tr style={{ color: `${CheckPeak(item.used)}` }}>
                  <td>
                    Peak
                  </td>
                  <td>
                    {item.used}
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    {item.unitPrice}
                  </td>
                </tr>
              </React.Fragment>
            ))
          }
          <tr className={styles.total}>
            <td>
              Total
            </td>
            <td>
              {dataTable.reduce((a, b) => +a + +b.used, 0)}
            </td>
            <td>
              {dataTable.reduce((a, b) => +a + +b.price, 0)}
            </td>
            <td>
              {dataTable.reduce((a, b) => +a + +b.unitPrice, 0)}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Calculator