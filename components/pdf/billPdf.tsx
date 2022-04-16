import React from 'react'
import PdfTable from '../table/pdfTable'
import styles from '../../styles/page/billPdf.module.scss'
type Props = {}

const BillPdf = (props: Props) => {
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
            231 ซอยอ่อนนุช 40 ถ.สุขุมวิท 77แขวงสวนหลวง เขตสวนหลวง กรุงเทพ 10250
          </p>

          <p>
            <span>
              <strong>
                Phone:
              </strong>
            </span>
            02-331 3317
            <span>
              <strong>
                Fax:
              </strong>
            </span>
            02-331 3363
          </p>
        </div>
      </div>

      <div className={styles.box_name}>
        <p>
          ชื่อผู้เช่า: นาตาซา โรมานอฟ
        </p>
        <p>
          Total: 0.00 THB
        </p>
      </div>

      <div>
        <strong>
          Period: 10/10 2021 To 20/10/2021
        </strong>
      </div>

      <PdfTable />
    </div>
  )
}

export default BillPdf