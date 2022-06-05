import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
type Props = {
  set: any;
}

const SelectMonth = ({ set }: Props) => {
  const [monthData, setMonthData] = useState(new Date())
  const onChange = (e: any) => {
    if (e) {
      setMonthData(e)
      const month = e.getMonth() + 1;
      set(month)
    }
  }
  return (
    <div className='relative iconDatePicker '>
      <DatePicker
        selected={monthData}
        onChange={(date: any) => onChange(date)}
        dateFormat="MMM"
        showMonthYearPicker
        className="text-white bg-[#707070] rounded-full px-2 max-w-[120px] cursor-pointer h-[30px]"
      />
    </div>
  )
}

export default SelectMonth