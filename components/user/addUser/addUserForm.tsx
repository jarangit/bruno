import { useRouter } from 'next/router';
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
  const [isCurrentBuilding, setIsCurrentBuilding] = useState()
  const [allBuildings, setAllBuildings] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, reset, setValue, control, watch, formState: { errors } } = useForm({ defaultValues });
  console.log('%cMyProject%cline:40%cerrors', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(179, 214, 110);padding:3px;border-radius:2px', errors)

  const onSubmit = async (data: any) => {
    setIsLoading(true)

    const newObject = {
      ...data,
      building_id: isCurrentBuilding,
      device_ids: [
        173,
        174
      ]
    }
    console.log('%cMyProject%cline:45%cnewObject', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', newObject)
    if (newObject && isToken) {
      await createNewTenants(newObject, isToken)
    }
    reset({ ...defaultValues })
    setIsLoading(false)
    router.push('/')
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
    const currentBuildingID: any = getFromStorage("currentBuildingID")

    if (token && currentBuildingID) {
      setIsToken(token)
      setIsCurrentBuilding(currentBuildingID)
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
                        <select disabled className='max-w-[120px] bg-[#707070] rounded-full' name="build" id="" onChange={onChange} >
                          {allBuildings.map((item: any, key: any) => (
                            <option key={key} value={item.id} selected={item.id == isCurrentBuilding ? true : false}>{item.name}</option>
                          ))}
                          {/* <option value="1">1</option>
                          <option value="2" selected >2</option> */}
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
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>
                    ชั้น
                  </div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.floor_id && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="ชั้น"
                      className='mainInput max-w-[120px]'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              )}
            />
            <Controller
              control={control}
              name="room_count"
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ห้อง</div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.room_count && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="ห้อง"
                      className='mainInput max-w-[120px]'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              )}
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 p-4">
            <Controller
              control={control}
              name="name"
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ชื่อผู้เช่า</div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.name && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="ชื่อผู้เช่า"
                      className='mainInput'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              )}
            />
            <Controller
              control={control}
              name="mobile_number"
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>เบอร์โทร</div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.mobile_number && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="เบอร์โทร"
                      className='mainInput'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>Email</div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.email && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="Email"
                      className='mainInput'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              )}
            />
            <Controller
              control={control}
              name="line_id"
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className='flex justify-between'>
                  <div>ID Line</div>
                  <div>
                    <span className='text-red-700 mr-2 text-xs'>
                      {errors.line_id && <span>This field is required</span>}
                    </span>
                    <input
                      type="text"
                      placeholder="ID Line"
                      className='mainInput'
                      value={value}
                      onChange={onChange}
                    />
                  </div>
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