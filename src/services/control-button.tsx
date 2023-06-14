import React, { useEffect } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  timeInSecond: number,
  setTimeInSecond: Function
}


const ControlBtn = (props: Props) => {
  const { setTimeInSecond } = props; // timeInSecond  
  const [startTime, setStartTime] = React.useState(JSON.parse(localStorage.getItem('startTime') || '0'));
  const [duration, setDuration] = React.useState<number>(0);

  const getTimeInSeconds = (timestamp: number) => { 
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeInSeconds = hours * 3600 + minutes * 60 + seconds;
    return timeInSeconds;
  };

  const handlePlayButton = () => { 
    const interval: any = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);

    setDuration(interval);
  }

  const handleStopButton = () => {
    clearInterval(duration);
    setStartTime(0);
    setTimeInSecond(0);
  }

  useEffect(() => { 
    console.log("startTime: ", startTime);
    localStorage.setItem("startTime", startTime.toString());
  }, [startTime]);

  useEffect(() => { 
    if (startTime > 0) { // is working
      const interval: any = setInterval(() => {
        setTimeInSecond(getTimeInSeconds(Date.now()) - getTimeInSeconds(startTime))
      }, 1000);
      setDuration(interval);
    }
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