import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import styles from '../../styles/calculate/calculator.module.scss'
import { getFromStorage } from '../../utills';
import { fetchApi } from '../../utills/fecthApi';
import Loading from '../loading/loading';
import DatePicker from 'react-datepicker'
import { SelectYear } from '../selector';
import SelectMonth from '../selector/selectMonth';
type Props = {
  title: string;
  slug: string;
  data: any;
  setStartDate: any;
  setEndDate: any;
  // id: number;
}


interface DataTable {
  unit_name: string;
  price: number;
  unit: number;
  unit_price: number;
}
const CalculatorDay = ({ setStartDate, setEndDate, title, slug, data }: Props) => {
  const [dataTable, setDataTable] = useState<Array<DataTable>>([])
  const [usedTotal, setUsedTotal] = useState(0)
  const [monthYear, setMonthYear] = useState()
  const [startYear, setStartYear] = useState(new Date())
  const [startMonth, setStartMonth] = useState(new Date())
  const day = new Array(30).fill('');

  const onChangeStartDate = (e: any) => {
    const start = `${startYear}-${startMonth}-${e}`
    setStartDate(start);
  }

  const onChangeEndDate = (e: any) => {
    const end = `${startYear}-${startMonth}-${e}`
    setEndDate(end);
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
    setDataTable(data)
    if (dataTable) {
      dataTable.forEach(e => {
        return setUsedTotal(sum += e.unit)
      })
    }
  }, [data, setStartDate])

  return (
    <div className='box_black'>

      <div className={styles.title}>
        <h3>คิดค่าไฟแบบรายวัน</h3>
        <div className={styles.box_icon}>

          <div>
            <SelectMonth set={setStartMonth} />
          </div>

          <div>
            <SelectYear set={setStartYear} />
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
            <select name="start_day" id="" className='selector_gray' onChange={(e: any) => onChangeStartDate(e.target.value)}>
              {day.map((item, key) => (
                <option value={key + 1}>{key + 1}</option>
              ))}
            </select>
          </div>

        </li>
        <li>
          <p>
            ถึง
          </p>
          <div className='selector_gray'>
            <select name="start_day" id="" className='selector_gray' onChange={(e: any) => onChangeEndDate(e.target.value)}>
              {day.map((item, key) => (
                <option value={key + 1}>{key + 1}</option>
              ))}
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
                  value={dataTable.reduce((a: any, b: any) => +a + +b.unit, 0)}
                  decimalScale={0}
                  displayType="text"
                />

              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a: any, b: any) => +a + +b.price, 0)}
                  decimalScale={0}
                  displayType="text"
                />
              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a: any, b: any) => +a + +b.unit_price, 0)}
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