import moment from 'moment';
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from 'react-icons/md'
type Props = {
  setValue: any;

}

const DatePick = ({ setValue }: Props) => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const onChange = async (date: any) => {
    setDate(date)
    const data = await moment(date).format('L');
    if (data) {
      setValue(data)
    }
  }
  return (
    <div className='relative'>
      <DatePicker
        selected={date}
        onChange={(date: any) => onChange(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        className="bg-[#707070] rounded-full h-[30px] px-3 w-[150px] cursor-pointer"
      />
      <div className="absolute top-1 right-3 cursor-pointer">
        <MdOutlineDateRange size={20} />
      </div>
    </div>
  )
}

export default DatePick