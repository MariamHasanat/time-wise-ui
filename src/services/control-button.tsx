import React, { useEffect } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  timeInSecond: number,
  setTimeInSecond: Function
}
const ControlBtn = (props: Props) => {

  const [buttonFlag, setButtonFlag] = React.useState<boolean>(true);//this state to change the form of icon 


  const storedStartTime: any = localStorage.getItem('startTime');
  const parsedStoredStartTime: number = JSON.parse(storedStartTime);
  
  const [startTime, setStartTime] = React.useState<number>(storedStartTime ? parsedStoredStartTime : 0);

  const [endTime, setEndTime] = React.useState<number>(0);

  const { setTimeInSecond } = props; //, timeInSecond  
  const [intervalId, setIntervalId] = React.useState<number>(0);

  const storedArray: any = localStorage.getItem('startTimeArray');
  const parsedStoredArray: Array<number | string> = JSON.parse(storedArray);


  const [stampTimeArray, setStampTimeArray] = React.useState<Array<number | string>>(storedArray ? parsedStoredArray : []);

  const handlePlayButton = (e: object) => {
    const interval: any = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalId(interval);
  }

  const handleStopButton = () => {
    clearInterval(intervalId);
    setStartTime(0);
  }

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSecond(0);
  }


  useEffect(() => {
    console.log(startTime);
    localStorage.setItem("startTime", startTime.toString());
    localStorage.setItem("endTime", endTime.toString());
    localStorage.setItem("startTimeArray", JSON.stringify(stampTimeArray));
  }, [startTime, stampTimeArray, endTime]);

  return (
    <div>
      {
        (startTime == 0)
          ?
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              setStartTime(Date.now());
              setStampTimeArray((previousArray) => [...previousArray, Date.now()]);
              setEndTime(0);
              handlePlayButton(e)
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
          :
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              setEndTime(Date.now());
              setStartTime(0);
              handleStopButton();
              handleReset();
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseCircleOutlined style={{ fontSize: '18px' }} /></Button>
      }
    </div>
  )
}

export default ControlBtn