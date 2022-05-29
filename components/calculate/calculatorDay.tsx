import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import styles from '../../styles/calculate/calculator.module.scss'
import { getFromStorage } from '../../utills';
import { fetchApi } from '../../utills/fecthApi';
import Loading from '../loading/loading';
type Props = {
  title: string;
  slug: string;
  data: any;
  // id: number;
}


interface DataTable {
  unit_name: string;
  price: number;
  unit: number;
  unit_price: number;
}
const CalculatorDay = ({ title, slug, data }: Props) => {
  const [dataTable, setDataTable] = useState<Array<DataTable>>([])
  const [usedTotal, setusedTotal] = useState(0)

  const CheckPeak = (used: number) => {
    if (used > 90) {
      return "#FF4967"
    } else if (used > 50 && used < 90) {
      return "#FFFF82"
    } else return "white"
  }

  useEffect(() => {
    let sum = 0
    setDataTable(data)
    if (dataTable) {
      dataTable.forEach(e => {
        return setusedTotal(sum += e.unit)
      })
    }
  }, [data])

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>คิดค่าไฟแบบรายวัน</h3>
        <div className={styles.box_icon}>
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
          <img src="/svg/refersh.svg" width={30} alt="" className='icon' />
          <Link href={`/user/pdf/${slug}`}>
            <img src="/svg/sendMail.svg" width={30} alt="" className='icon' />
          </Link>
        </div>
      </div>

      <ul className={styles.menu_item}>
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
                <tr style={{ color: `${CheckPeak(item.unit)}` }}>
                  <td>

                    {item.unit_name}
                  </td>
                  <td>
                    <NumberFormat
                      value={item.unit}
                      decimalScale={0}
                      displayType="text"
                    />
                  </td>
                  <td>
                    <NumberFormat
                      value={item.price}
                      decimalScale={0}
                      displayType="text"
                    />
                  </td>
                  <td>
                    <NumberFormat
                      value={item.unit_price}
                      decimalScale={0}
                      displayType="text"
                    />
                  </td>
                </tr>
              </React.Fragment>
            ))
          }


          {dataTable && (
            <tr className={styles.total}>
              <td>
                Total
              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a, b) => +a + +b.unit, 0)}
                  decimalScale={0}
                  displayType="text"
                />

              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a, b) => +a + +b.price, 0)}
                  decimalScale={0}
                  displayType="text"
                />
              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a, b) => +a + +b.unit_price, 0)}
                  decimalScale={0}
                  displayType="text"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default CalculatorDay