import React, { useEffect } from 'react'
import './stop-watch.css';
import calculateTimeInSeconds from '../../services/calculate-time';


interface Props {
  timeInSecond: number
}

const StopWatch = (props: Props) => {

  const { timeInSecond } = props;
  const storedStartTime: any = localStorage.getItem('startTime');
  const parsedStoredStartTime: number = JSON.parse(storedStartTime);
  const [timeArray, setTimeArray] = React.useState<Array<number | string>>([]);

  useEffect(() => {
    setTimeArray(calculateTimeInSeconds(timeInSecond + (Math.floor((Date.now() - parsedStoredStartTime) / 1000))));
  }, [timeInSecond, parsedStoredStartTime]);


  return (
    <label className='stopwatch-container'>
      <div className='timer-display'>
        <p id='hour'>{timeArray[0]}</p>
        <span>:</span>
        <p id='minute'>{timeArray[1]}</p>
        <span>:</span>
        <p id='second'>{timeArray[2]}</p>
      </div>
    </label>
  )
}

export default StopWatch;