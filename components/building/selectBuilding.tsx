import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { currentBuilding } from '../../redux/slice/allBuildingsSlice'
import Loading from '../loading/loading'
import { setLocalStorage } from '../../utills'
type Props = {}

const SelectBuilding = (props: Props) => {
  const [Data, setData] = useState([])
  const allData = useSelector((state: any) => state.allBuildings)
  const defaultImg = "https://api.airin1.com/storage/img/tKcncQf5rAeziO6yq31k53z36oYl6X5nDiyYg8Zg.jpeg"
  const dispatch = useDispatch()


  const onChangeBuilding = (id:any) => {
    dispatch(currentBuilding(Number(id)))
    setLocalStorage("currentBuildingID",id)
  }

  useEffect(() => {
    if (allData && allData.data) {
      setData(allData.data)
    }


  }, [allData])

  return (
    <div>
      <div className='text-xl text-center my-6'>
        กรุณาเลือกอาคาร
      </div>
      {Data.length > 0 ? (
        <div className="grid  md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {Data.map((item: any, key: any) => (
            <div
              onClick={ () => onChangeBuilding(item.id)}
              key={key}
              className="max-w-[300px] w-full rounded-lg bg-black overflow-hidden cursor-pointer drop-shadow-lg"
            >
              <div className=' w-[auto] h-[100px] relative overflow-hidden '>
                <Image
                  src={item.picture !== "" ? item.picture : defaultImg}
                  alt=''
                  layout='fill'
                />
              </div>
              <div className='p-3 text-sm'>
                <div className=''>
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : <Loading/>}
    </div>
  )
}

export default SelectBuilding


