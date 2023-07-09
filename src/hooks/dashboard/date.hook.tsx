import { useState } from 'react'
import dayjs from 'dayjs'

type DateRange = number[];
const useRange = (newDateRange: DateRange,
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>) => {

  const dateChangeHandler = (values: any) => {
    if (values) {
      const val1: Date = new Date(dayjs(values[0]).format('YYYY-MM-DDTHH:mm:ss.sssZ'))
      const val2: Date = new Date(dayjs(values[1]).format('YYYY-MM-DDTHH:mm:ss.sssZ'))
      val1.setHours(0, 0, 0)
      val2.setHours(23, 59, 59, 999);
      // console.log(val1, val2)
      setDateRange([val1.getTime(), val2.getTime()]);
      console.log('expected range', val1.getTime(), val2.getTime())
    }
    else {
      console.log('something went wrong in date.hook.tsx');
    }

  }
  return {
    dateChangeHandler
  }
}
export default useRange;