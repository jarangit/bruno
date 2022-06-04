import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from '../../styles/table/settingTable.module.scss'
import { SubmitHandler, useForm, useFieldArray, Controller } from "react-hook-form";
import { getFromStorage } from '../../utills';
import { editUnitPrice } from '../../service/building/buildingService';
import { useRouter } from 'next/router';
import SelectTime from '../selector/selectTime';
type Props = {
  data: any;
  token: string;
  currentBId: any;
}
interface Unit {
  from_time: any;
  name: any;
  to_time: any;
  unit_price: any;
}

const SettingTable = ({ data, token, currentBId }: Props) => {
  console.log('%cMyProject%cline:20%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(217, 104, 49);padding:3px;border-radius:2px', data.length)
  console.log('%cMyProject%cline:19%ctoken', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', token)
  const [isToken, setIsToken] = useState('')
  const [buildingId, setBuildingId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [dataForm, setDataForm] = useState<Array<Unit>>([])
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const router = useRouter()
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    defaultValues: {
      user: [{
        from_time: "",
        name: "",
        to_time: "",
        unit_price: ""
      }]
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: "user"
  });

  const onSubmit = useCallback(async (data: any) => {
    console.log('%cMyProject%cline:44%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(153, 80, 84);padding:3px;border-radius:2px', data.user)
    setIsLoading(true)
    if (token && currentBId) {
      console.log('%cMyProject%cline:46%ctoken', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px', token)
      await editUnitPrice(token, currentBId, data.user)
      setIsLoading(false)

    }

  }, [])


  useEffect(() => {
    const token = getFromStorage("token")
    const buildingID: any = getFromStorage('currentBuildingID')
    if (token) {
      setIsToken(token)
      setBuildingId(buildingID)

    }
    if (data.length) {
      const dataUser: any = {
        user: [
          ...data
        ]
      }
      reset(dataUser)
    }
  }, [data])
  return (
    <>

      {data.length > 0 ? (
        <>
          {/* <table className={styles.table}>
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

          </table> */}

          {/* <div style={{ textAlign: "center", marginTop: "20px" }} >
            <button className='but_gray'>บันทึก</button>
          </div> */}

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Priority</th>

                  <th>Name</th>

                  <th>Time Zone</th>

                  <th>Unit Price</th>

                </tr>
              </thead>

              <tbody className='text-center'>
                {fields.map((item: any, key: any) => (
                  <tr className='text-center' key={key}>
                    <td >
                      {key + 1}
                    </td>
                    <td>
                      <Controller
                        render={({ field }) => <input {...field} className="w-[70px] bg-[#707070] text-center rounded-full" />}
                        name={`user.${key}.name`}
                        control={control}
                      />
                    </td>
                    <td className="flex gap-3 justify-center">
                      <Controller
                        render={({ field }) => (
                          <>
                            {/* <input {...field} className="w-[70px] bg-[#707070] text-center rounded-full" /> */}
                            <SelectTime current={field.value} setTime={setStartTime} onChange={field.onChange} />
                          </>
                        )}
                        name={`user.${key}.from_time`}
                        control={control}
                      />
                      <div>To</div>
                      <Controller
                        name={`user.${key}.to_time`}
                        control={control}
                        render={({ field }) => (
                          <SelectTime current={field.value} setTime={setStartTime} onChange={field.onChange} />
                        )}
                      />
                    </td>
                    <td>
                      <div className="flex gap-3 justify-center">
                        <Controller
                          render={({ field }) => <input {...field} className="w-[70px] bg-black border-solid border-[#FF4967] text-center rounded-full" />}
                          name={`user.${key}.unit_price`}
                          control={control}
                        />
                        <div>THB/kWh</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-ful text-center mt-6">
              <button type="submit" className='but_gray text-center' >
                {isLoading ? "Loading..." : "บันทึก"}
              </button>

            </div>
          </form>

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