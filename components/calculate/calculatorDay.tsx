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
import { useDispatch } from 'react-redux';
import { keepTotal } from '../../redux/slice/pdfSlice';
type Props = {
  title: string;
  slug: string;
  data: any;
  setStartDate: any;
  setEndDate: any;
  statusCallApi: boolean;
  onShowAll: any;
  onShow: any;
  onClear: any;
}


interface DataTable {
  unit_name: string;
  price: number;
  unit: number;
  unit_price: number;
}
const CalculatorDay = ({ onClear, onShow, setStartDate, setEndDate, title, slug, data, statusCallApi, onShowAll }: Props) => {
  const [dataTable, setDataTable] = useState<Array<DataTable>>([])
  const [usedTotal, setUsedTotal] = useState(0)
  const [monthYear, setMonthYear] = useState()
  const [startYear, setStartYear] = useState(new Date())
  const [startMonth, setStartMonth] = useState(new Date())
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [loadingApi, setLoadingApi] = useState(false)
  const [startDay, setStartDay] = useState()
  const [endDay, setEndDay] = useState()
  const day = new Array(31).fill('');
  const now = new Date()
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
    console.log("set data");

    const getStart: any = `${startYear}-${startMonth}-${startDay}`
    const getEnd: any = `${startYear}-${startMonth}-${endDay}`
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
        <h3>???????????????????????????????????????????????????</h3>
        <div className={styles.box_icon}>

          <div>
            <SelectMonth set={setStartMonth} />
          </div>

          <div>
            <SelectYear set={setStartYear} />
          </div>
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
            ?????????????????????????????????
          </p>
          <div className='selector_gray'>
            <select
              name="start_day"
              id=""
              className='selector_gray'
              onChange={(e: any) => onChangeStartDate(e.target.value)}
            // disabled={typeof startYear === "object" || typeof startMonth === "object" ? true : false}

            >
              {day.map((item, key) => (
                <option
                  value={key + 1}
                  key={key}
                  selected={key + 1 == now.getDate() ? true : false}
                >
                  {key + 1 <= 9 ? `0${key + 1}` : `${key + 1}`}
                </option>
              ))}
            </select>
          </div>

        </li>
        <li>
          <p>
            ?????????
          </p>
          <div className='selector_gray'>
            <select
              name="start_day"
              id=""
              className='selector_gray'
              onChange={(e: any) => onChangeEndDate(e.target.value)}
            // disabled={typeof startYear === "object" || typeof startMonth === "object" ? true : false}
            >
              {day.map((item, key) => (
                <option
                  value={key + 1}
                  key={key}
                  selected={key + 1 == now.getDate() ? true : false}
                >
                  {key + 1 <= 9 ? `0${key + 1}` : `${key + 1}`}
                </option>
              ))}
            </select>
          </div>
        </li>
        <li>
          <button className='but_green' onClick={onShowAll}>
            {statusCallApi ? "Loading" : "Show All"}
          </button>
        </li>
        <li>
          <button
            // className={`border-2  w-[100px]  rounded-full ${startDay && endDay ? 'border-[#56D9FE] text-[#56D9FE]' : `border-gray-500 text-gray-500`}`}
            className={`border-2  w-[100px]  rounded-full border-[#56D9FE] text-[#56D9FE]`}
            onClick={onSetData}
          >
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

export default CalculatorDay