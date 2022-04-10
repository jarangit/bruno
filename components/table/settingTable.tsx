import React from 'react'
import styles from '../../styles/table/settingTable.module.scss'
type Props = {}

const SettingTable = (props: Props) => {
  const data = [1, 2, 3, 4, 5]
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
        {data.map((item, key) => (
          <tr>

            <td>1</td>

            <td>
              <div className={styles.name}>
                <p>
                  Nomal
                </p>
              </div>
            </td>

            <td>
              <div className={styles.fillSelect}>
                <select name="startTime" id="startTime" className='selectGray'>
                  <option value="">11:00</option>
                </select>
                <p>To</p>
                <select name="startTime" id="startTime" className='selectGray'>
                  <option value="">11:00</option>
                </select>
              </div>
            </td>

            <td>
              <div className={styles.unitPrice}>
                <p>1</p>
                <span>THB/kWh</span>
              </div>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default SettingTable