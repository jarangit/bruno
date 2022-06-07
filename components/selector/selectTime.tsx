import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown } from 'react-icons/bs'
type Props = {
  current: any;
  setTime: any;
  onChange: any;
}

const SelectTime = ({ setTime, current, onChange }: Props) => {

  const [startDate, setStartDate] = useState(new Date());


  const onSetDate = (date: any) => {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const time = `${hour <= 9 ? `0${hour}` : hour}:${minute <= 9 ? `0${minute}` : minute}`
    if (time) {
      setStartDate(date)
      setTime(time)
    }
    return time
  }


  useEffect(() => {
    const hour = parseFloat(current.slice(0,2))
    const minute = parseFloat(current.slice(3,5))
    const now = new Date().setHours(hour,minute,0,0)
    if (now) {
      setStartDate(new Date(now))
    }
  }, [current])



  return (
    <div className='relative iconDatePicker'>
      <DatePicker
        className="bg-[#707070] w-[115px] px-3 rounded-full cursor-pointer"
        selected={startDate}
        onChange={(date: any) => onChange(onSetDate(date))}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  )
}

export default SelectTime