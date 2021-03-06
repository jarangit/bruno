import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { keepTotal } from '../../redux/slice/pdfSlice';
import styles from '../../styles/calculate/calculator.module.scss'
import { SelectYear } from '../selector';
import { Calendar, DataTable } from './type';
type Props = {
  title: string;
  slug: string;
  onShowAll: any;

  data: {
    id: number;
    used: number;
    price: number;
    unitPrice: number;
  }[];
  // id: number;
}


const CalculatorYear = ({ onClear, onShow, onShowAll, title, slug, data, setStartDate, setEndDate, statusCallApi }: Calendar) => {
  const [dataTable, setDataTable] = useState<Array<DataTable>>([])
  const [usedTotal, setUsedTotal] = useState(0)
  const [monthYear, setMonthYear] = useState()
  const [startYear, setStartYear] = useState(new Date())
  const [startMonth, setStartMonth] = useState(new Date())
  const [endYear, setEndYear] = useState(new Date())
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [loadingApi, setLoadingApi] = useState(false)
  const [startDay, setStartDay] = useState()
  const [endDay, setEndDay] = useState()
  const day = moment().date()
  const month = moment().month()
  const dispatch = useDispatch()
  const onChangeStartDate = (e: any) => {
    // const selected: any = `${startYear}-${startMonth}-${e}`
    setStartDay(e);
  }

  const onChangeEndDate = (e: any) => {
    // const selected: any = `${startYear}-${startMonth}-${e}`
    setEndDay(e);
  }


  const onSetData = async () => {
    const getStart: any = `${typeof startYear == "number" ? startYear : "2022"}-${month}-${day}`
    const getEnd: any = `${typeof endYear == "number" ? endYear : "2022"}-${month}-${day}`
    await onShow()
    if (getStart && getEnd) {
      setStartDate(getStart)
      setEndDate(getEnd)
    }
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
    dispatch(keepTotal(usedTotal))
    if (dataTable) {
      dataTable.forEach(e => {
        return setUsedTotal(sum += e.price)
      })
    }
  }, [
    data,
    setStartDate,
    startMonth,
    startYear,
    setEndDate,
    statusCallApi,
    usedTotal]
  )


  return (
    <div className='box_black'>
      <div className={styles.title}>
        <h3>{title}</h3>
        <div className={styles.box_icon}>
          <div onClick={onClear}>
            <img src="/svg/refersh.svg" width={30} alt="" className='icon' />
          </div>
          <div>
            {dataTable ? (
              <Link href={`/user/pdf/${slug}`}>
                <img src="/svg/sendMail.svg" width={30} alt="" className='icon' />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <ul className={styles.menu_item}>
        <li>
          <p>
            ??????????????????????????????
          </p>
          <div>
            <SelectYear set={setStartYear} />
          </div>

        </li>
        <li>
          <p>
            ?????????
          </p>
          <div>
            <SelectYear set={setEndYear} />
          </div>
        </li>
        <li>
          <button className='but_green' onClick={onShowAll}>
            {statusCallApi ? "Loading" : "Show All"}
          </button>
        </li>
        <li>
          <button className='but_blue' onClick={onSetData}>
            {statusCallApi ? "Loading" : "Show"}
          </button>
        </li>
      </ul>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              ????????????
            </th>
            <th>
              ???????????????????????????????????????
            </th>
            <th>
              ????????????
            </th>
            <th>
              ????????????????????????????????????
            </th>
          </tr>
        </thead>
        <tbody className="relative">
          {dataTable && dataTable.length ?
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
            )) : (
              <div className="absolute  w-full top-2 ">
                {statusCallApi ? "loading" : (
                  <div className='text-yellow-600'>
                    ????????????????????????????????? ????????????????????????????????????-???????????? ??????????????????????????????????????? Show
                  </div>
                )}
              </div>
            )
          }

          {dataTable && dataTable.length ? (
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
          ) : null}
        </tbody>
      </table>

    </div>
  )
}

export default CalculatorYear