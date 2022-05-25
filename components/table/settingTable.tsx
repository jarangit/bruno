import React from 'react'
import styles from '../../styles/table/settingTable.module.scss'
type Props = {
  data: any
}

const SettingTable = ({ data }: Props) => {

  return (
    <>

      {data.length > 0 ? (
        <>
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
              {data.map((item: any, key: any) => (
                <tr key={key}>

                  <td>{key + 1}</td>

                  <td>
                    <div className={styles.name}>
                      <p>
                        {item.name}
                      </p>
                    </div>
                  </td>

                  <td>
                    <div className={styles.fillSelect}>
                      <div className="selector_gray">
                        <select name="startTime" id="startTime" >
                          <option value="">{item.from_time}</option>
                        </select>
                      </div>
                      <p>To</p>
                      <div className="selector_gray">
                        <select name="startTime" id="startTime" >
                          <option value="">{item.to_time}</option>
                        </select>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.unitPrice}>
                      <p>{item.unit_price}</p>
                      <span>THB/kWh</span>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

          <div style={{ textAlign: "center", marginTop: "20px" }} >
            <button className='but_gray' >บันทึก</button>
          </div>
        </>
      ) : (
          <div className=' h-24 flex items-center justify-center'>
            No Data
          </div>
      )}
    </>
  )
}

export default SettingTable