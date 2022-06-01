import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/calculate/calculator.module.scss'
import NumberFormat from 'react-number-format';
type Props = {
  title: string;
  slug: string;
  data: any;
}

interface DataTable {
  device_id: string;
  unit: number;
  price: number;
  unit_price: number;
  device_name: string;
}

const CalculatorItem = ({ title, slug, data }: Props) => {
  
  const [dataTable, setDataTable] = useState<Array<DataTable>>()
  const [usedTotal, setUsedTotal] = useState(0)


  const CheckPeak = (used: number) => {
    if (used > 90) {
      return "#FF4967"
    } else if (used > 50 && used < 90) {
      return "#FFFF82"
    } else return "white"
  }
  useEffect(() => {
    setDataTable(data)
    let sum = 0
    if (dataTable) {
      dataTable.forEach(e => {
        return setUsedTotal(sum += e.unit)
      })
    }
  }, [data])

  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>{title}</h3>
        <div className={styles.box_icon}>
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
          <input type="date" className={styles.inputDate} />
        </li>
        <li>
          <p>
            ถึง
          </p>
          <input type="date" className={styles.inputDate} />
        </li>        <li>
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
                    {item.device_name}
                  </td>
                  <td>
                    <NumberFormat
                      value={item.unit}
                      decimalScale={0}
                      displayType="text"
                    />
                    {/* {item.unit} */}
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
                  value={dataTable.reduce((a:any, b:any) => +a + +b.unit, 0)}
                  decimalScale={0}
                  displayType="text"
                />
              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a:any, b:any) => +a + +b.price, 0)}
                  decimalScale={0}
                  displayType="text"
                />
              </td>
              <td>
                <NumberFormat
                  value={dataTable.reduce((a:any, b:any) => +a + +b.unit_price, 0)}
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

export default CalculatorItem