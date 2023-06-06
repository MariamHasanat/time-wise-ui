import React, { useEffect } from 'react'
import './stop-watch.css';
const StopWatch: React.FC = () => {
  const [timeInSecond, setTimeInSecond] = React.useState<number>(0);
  const [timeArray, setTimeArray] = React.useState<Array<number | string>>([]);

  useEffect(() => {
    //  setTimeArray(calculateTimeInSeconds(timeInSecond))
  }, [timeInSecond]);
  return (
    <label className='stopwatch-container'>
      <section className='timer-display'>
        <p id='hour'>00</p>
        <span>:</span>
        <p id='minute'>00</p>
        <span>:</span>
        <p id='second'>00</p>
      </section>
    </label>
  )
}

export default StopWatch;