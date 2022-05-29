import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
type Props = {
  set: any;
}

const SelectYears = ({ set }: Props) => {
  const [yearData, setYearData] = useState(new Date())
  const onChange = (e: any) => {
    if (e) {
      setYearData(e)
      const year = e.getFullYear();
      set(year)
    }
  }
  return (
    <div className='selector_gray '>
      <DatePicker
        selected={yearData}
        onChange={(date: any) => onChange(date)}
        showYearPicker
        dateFormat="yyyy"
        yearItemNumber={9}
        className="text-white bg-[#707070] rounded-full px-2 max-w-[100px] cursor-pointer h-[30px]"
      />
    </div>
  )
}

export default SelectYears