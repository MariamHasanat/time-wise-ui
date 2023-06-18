import { useState, useEffect, useRef } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  timeInSecond: number,
  setTimeInSecond: Function
}


const ControlBtn = (props: Props) => {
  const { setTimeInSecond } = props; // timeInSecond  
  const [startTime, setStartTime] = useState(JSON.parse(localStorage.getItem('startTime') || '0'));
  const timerRef = useRef<NodeJS.Timer>();

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const getTimeInSeconds = (timestamp: number) => { 
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeInSeconds = hours * 3600 + minutes * 60 + seconds;
    return timeInSeconds;
  };

  const handlePlayButton = () => { 
    timerRef.current = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);
  }

  const handleStopButton = () => {
    clearTimer();
    setStartTime(0);
    setTimeInSecond(0);
  }

  useEffect(() => { 
    localStorage.setItem("startTime", startTime.toString());
  }, [startTime]);

  useEffect(() => { 
    if (startTime > 0) {
      timerRef.current = setInterval(() => {
        setTimeInSecond(getTimeInSeconds(Date.now()) - getTimeInSeconds(startTime))
      }, 1000);
    }

    return () => clearTimer();
  }, []);

  return (
    <div>
      {
        (startTime === 0) // is stopped
          ?
          <Button
            onClick={() => {
              setStartTime(Date.now());
              handlePlayButton();
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
          :
          <Button
            onClick={() => handleStopButton()}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseCircleOutlined style={{ fontSize: '18px' }} /></Button>
      }
    </div>
  )
}

export default ControlBtn;