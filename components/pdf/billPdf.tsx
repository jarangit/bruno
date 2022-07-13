import React, { useEffect } from 'react'
import PdfTable from '../table/pdfTable'
import styles from '../../styles/page/billPdf.module.scss'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
type Props = {
  setStatusBut:any;
}

const BillPdf = ({setStatusBut}: Props) => {
  const { data, startDate, endDate, userName, total, address }  = useSelector((state: any) => state.pdfData)

  const customStrings = (text: any) => {
    const data = text.split('-').reverse().join('/')
    return data
  }
  useEffect(() => {
    if(!data){
      setStatusBut(true)
    }
  }, [data])
  
  return (
    <div className={styles.main}>
      <div className={styles.imgTopBar}>
        <img src="/svg/topBarPdf.svg" width={"100%"} alt="" />
      </div>
      <div className={styles.title}>
        <img src="/svg/iconPdf.svg" alt="" width={100} />
        <div>
          <h1>J.S. Engineering & Mechanical Co.,Ltd.</h1>
          <p>
            <span>
              <strong>
                Head Office:
              </strong>
            </span>
            {address}
          </p>
        </div>
      </div>

      <div className={styles.box_name}>
        <p>
          ชื่อผู้เช่า: {userName}
        </p>
        <p>
          Total:
          <span>
            <NumberFormat
              value={total}
              decimalScale={0}
              displayType="text"
            />
          </span> THB
        </p>
      </div>

      <div>
        <strong>
          Period:
          <span>{startDate ? ` ${customStrings(startDate)} ` : "-"}</span>
          To
          <span>{endDate ? ` ${customStrings(endDate)} ` : "-"}</span>
        </strong>
      </div>
      {data ? (
        <PdfTable data={data} />
      ) : (
        <div className="full text-center text-red-400 font-bold">
          ไม่พบข้อมูล
        </div>
      )}
    </div>
  )
}

export default BillPdf