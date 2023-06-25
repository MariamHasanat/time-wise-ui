import { useState, useEffect, useRef } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import getTimeInSeconds from '../utils/get-time-in-seconds';

type Props = {
  setTimeInSecond: Function,
  setDropdownLabel: Function,
  setIsRunning: Function,
  setTaskDescription: Function,
  isRunning: boolean
}


const ControlBtn = (props: Props) => {
  const { setTimeInSecond, setDropdownLabel, setIsRunning, setTaskDescription } = props; // timeInSecond  
  const [startTime, setStartTime] = useState(JSON.parse(localStorage.getItem('startTime') || '0'));
  const timerRef = useRef<NodeJS.Timer>();

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handlePlayButton = () => {
    setIsRunning(true)
    timerRef.current = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);
  }

  const handleStopButton = () => {
    clearTimer();
    setStartTime(0);
    setTimeInSecond(0);
    setDropdownLabel("Projects");
    setIsRunning(false);
    setTaskDescription('');
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
    // eslint-disable-next-line
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