import React, { useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { getALlBuildings } from '../../../service/building/buildingService';
import { createNewTenants } from '../../../service/tenants/tanantsService';
import styles from '../../../styles/form/addUserForm.module.scss'
import { getFromStorage } from '../../../utills';

// {
//   "name":"test",
//   "mobile_number":"0831774921",
//   "email":"kongsalak@gmail.com",
//   "line_id":"kongsalak888",
//   "room_count":3,
//   "building_id":38,
//   "floor_id":25,
//   "device_ids":[
//      173,
//      174
//   ]
// }
type Props = {}

const defaultValues = {
  name: "",
  mobile_number: "",
  email: "",
  line_id: "",
  room_count: "",
  building_id: "",
  floor_id: "",
  device_ids: []
}
const AddUserForm = (props: Props) => {
  const [isToken, setIsToken] = useState("")
  const [allBuildings, setAllBuildings] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, reset, setValue, control, watch, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = async (data: any) => {
    setIsLoading(true)

    const newObject = {
      ...data,
      device_ids: [
        173,
        174
      ]
    }
    if (newObject && isToken) {
      await createNewTenants(newObject, isToken)
    }
    reset({ ...defaultValues })
    setIsLoading(false)
  }
  console.log(errors);

  const getBuildings = async () => {
    if (isToken) {
      const buildings: any = await getALlBuildings(isToken)
      if (buildings) {
        setAllBuildings(buildings)

      }
    }

  }
  useEffect(() => {
    const token = getFromStorage("token")
    if (token) {
      setIsToken(token)
      getBuildings()
    }
    return () => { }
  }, [isToken])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={`my-10`}>
        <div className='flex md:flex-col lg:flex-row gap-5'>
          <div className="lg:w-1/2 flex flex-col gap-5 bg-[#262626] p-4 rounded-lg">
            <Controller
              control={control}
              name="building_id"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <>
                  {allBuildings &&
                    (
                      <div className='flex justify-between'>
                        <div>อาคาร</div>
                        <select className='max-w-[120px] bg-[#707070] rounded-full' name="build" id="" value={value} onChange={onChange} >
                          <option value="เลือกอาคาร">เลือกอาคาร</option>
                          {allBuildings.map((item: any, key: any) => (
                            <option key={key} value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    )
                  }
                </>

              )}
            />
            <Controller
              control={control}
              name="floor_id"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>
                    ชั้น
                  </div>
                  <input
                    type="text"
                    placeholder="ชั้น"
                    className='mainInput max-w-[120px]'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="room_count"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ห้อง</div>
                  <input
                    type="text"
                    placeholder="ห้อง"
                    className='mainInput max-w-[120px]'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 p-4">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ชื่อผู้เช่า</div>
                  <input
                    type="text"
                    placeholder="ชื่อผู้เช่า"
                    className='mainInput'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="mobile_number"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>เบอร์โทร</div>
                  <input
                    type="text"
                    placeholder="เบอร์โทร"
                    className='mainInput'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>Email</div>
                  <input
                    type="text"
                    placeholder="Email"
                    className='mainInput'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="line_id"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ID Line</div>
                  <input
                    type="text"
                    placeholder="ID Line"
                    className='mainInput'
                    value={value}
                    onChange={onChange}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button type='submit' className='but_gray'>
            {isLoading ? "Loading..." : "เพิ่มผู้เช่า"}
          </button>
        </div>
      </form>
    </>
  )
}

export default AddUserForm