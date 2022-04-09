import React from 'react'
import styles from '../../styles/table/settingTable.module.scss'
type Props = {}

const SettingTable = (props: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>

          <th>Priority</th>

          <th>Name</th>

          <th>Time Zone</th>

          <th>Unit Price</th>

        </tr>
      </thead>


      <tbody>
        <tr>

          <td>1</td>

          <td>Nomal</td>

          <td>time selector</td>

          <td>
            <p>1</p>
            <span>THB/kWh</span>
          </td>

        </tr>
        <tr>

          <td>1</td>

          <td>Nomal</td>

          <td>time selector</td>

          <td>
            <p>1</p>
            <span>THB/kWh</span>
          </td>

        </tr>
      </tbody>
    </table>
  )
}

export default SettingTable