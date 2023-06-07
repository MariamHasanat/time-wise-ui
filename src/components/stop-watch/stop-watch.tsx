import React, { useEffect } from 'react'
import './stop-watch.css';
const StopWatch: React.FC = () => {
  const [timeInSecond] = React.useState<number>(0); // i deleted setTimeInSecond :)
  // const [timeArray, setTimeArray] = React.useState<Array<number | string>>([]);

  useEffect(() => {
    //  setTimeArray(calculateTimeInSeconds(timeInSecond))
  }, [timeInSecond]);
  return (
    <label className='stopwatch-container'>
      <div className='timer-display'>
        <p id='hour'>00</p>
        <span>:</span>
        <p id='minute'>00</p>
        <span>:</span>
        <p id='second'>00</p>
      </div>
    </label>
  )
}

export default StopWatch;