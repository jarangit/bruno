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
  console.log('%cMyProject%cline:11%ccurrent', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px', current)

  const [startDate, setStartDate] = useState(new Date());


  const onSetDate = (date: any) => {
    console.log('%cMyProject%cline:16%cdate', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px', date)
    const hour = date.getHours()
    console.log('%cMyProject%cline:18%chour', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(178, 190, 126);padding:3px;border-radius:2px', hour)
    const minute = date.getMinutes()
    const time = `${hour <= 9 ? `0${hour}` : hour}:${minute <= 9 ? `0${minute}` : minute}`
    console.log('%cMyProject%cline:17%ctime', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px', time)
    if (time) {
      setStartDate(date)
      setTime(time)
    }
    return time
  }


  useEffect(() => {
    const hour = parseFloat(current.slice(0,2))
    const minute = parseFloat(current.slice(3,5))
    console.log('%cMyProject%cline:34%cminute', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', minute)
    console.log('%cMyProject%cline:32%chour', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(118, 77, 57);padding:3px;border-radius:2px', hour)
    const now = new Date().setHours(hour,minute,0,0)
    console.log('%cMyProject%cline:36%cnow', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px', now)
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