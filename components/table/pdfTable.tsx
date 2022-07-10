import React from 'react'
import NumberFormat from 'react-number-format'
import styles from '../../styles/table/pdfTable.module.scss'


type Props = {
  data: any;
}

function PdfTable({ data }: Props) {
  return (
    <>
      {data ? (
        <table className={styles.pdf_table}>
          <thead>
            <tr>
              <th>เวลา</th>
              <th>การใช้พลังงาน</th>
              <th>ราคา</th>
              <th>ราคาต่อหน่วย</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item: any, key: any) => (
              <tr>
                <td>
                  {item.unit_name && item.unit_name}
                  {item.device_name && item.device_name}
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
            ))}
          </tbody>
        </table>
      ) : "No data"}
    </>
  )
}

export default PdfTable