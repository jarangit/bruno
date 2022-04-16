import React from 'react'
import styles from '../../styles/table/pdfTable.module.scss'


type Props = {}

function PdfTable({ }: Props) {
  return (
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
        <tr>
          <td>Normal</td>
          <td>0.000</td>
          <td>0.00</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>0.000</td>
          <td>0.00</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>0.000</td>
          <td>0.00</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>0.000</td>
          <td>0.00</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PdfTable