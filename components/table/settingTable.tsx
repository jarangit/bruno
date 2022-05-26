import React, { useEffect, useMemo, useState } from 'react'
import styles from '../../styles/table/settingTable.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {
  data: any
}
interface Unit {
  from_time: any;
  name: any;
  to_time: any;
  unit_price: any;
}

const SettingTable = ({ data }: Props) => {
  const [dataForm, setDataForm] = useState<Array<Unit>>([])
  const [getDataForm, setGetDataForm] = useState({
    from_time: "",
    name: "",
    to_time: "",
    unit_price: "",
  })
  console.log(data);
  useEffect(() => {
    if (data) {
      setDataForm(data)
    }
  }, [])
  console.log(dataForm);


  const submit = () => {
    let getData = {
      from_time: "00:00",
      name: "234",
      to_time: "13: 59234234",
      unit_price: 2234234
    }
    const newData = dataForm.map((item: any, key) => {
      if (key === 0) {
        console.log(item);

        return { ...item, ...getData }
      }
      return item
    })
    console.log(newData);
  }

  const onChange = useMemo(() => (e: any, id: any) => {
    return setGetDataForm(({ ...getDataForm, [e.target.name]: e.target.value }))
  }, [])
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
                          <option value="00:00">00:00</option>
                        </select>
                      </div>
                      <p>To</p>
                      <div className="selector_gray">
                        <select name="startTime" id="startTime" >
                          <option value="">{item.to_time}</option>
                          <option value="00:00">00:00</option>
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
            <button className='but_gray' onClick={submit}>บันทึก</button>
          </div>

          {/* {data.map((item: any, key: any) => (
            <form className='flex gap-2' onChange={(e) => onChange(e, key)}>
              <input className='text-black placeholder:text-black' name='name' type="text" value={getDataForm.name} placeholder={item.name} />
              <input className='text-black placeholder:text-black' name='from_time' type="text" value={getDataForm.from_time} placeholder={item.from_time} />
              <input className='text-black placeholder:text-black' name='to_time' type="text" value={getDataForm.to_time} placeholder={item.to_time} />
              <input className='text-black placeholder:text-black' name='unit_price' type="text" value={getDataForm.unit_price} placeholder={item.unit_price} />
            </form>

          ))} */}



        </>
      ) : (
        <div className=' h-24 flex items-center justify-center'>
          No Data
        </div>
      )
      }
    </>
  )
}

export default SettingTable