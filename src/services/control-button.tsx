import React, { useEffect } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  timeInSecond: number,
  setTimeInSecond: Function
}
const ControlBtn = (props: Props) => {



  const storedStartTime: any = localStorage.getItem('startTime');
  const parsedStoredStartTime: number = JSON.parse(storedStartTime);
  const [startTime, setStartTime] = React.useState<number>(parsedStoredStartTime);

  const [buttonFlag, setButtonFlag] = React.useState<boolean>((startTime === 0) ? true : false);//this state to change the form of icon 
  const [endTime, setEndTime] = React.useState<number>(0);

  const { setTimeInSecond } = props; // timeInSecond  

  const [intervalId, setIntervalId] = React.useState<number>(0);

  const storedArray: any = localStorage.getItem('startTimeArray');
  const parsedStoredArray: Array<number | string> = JSON.parse(storedArray);

  const [stampTimeArray, setStampTimeArray] = React.useState<Array<number | string>>(storedArray ? parsedStoredArray : []);

  //this function to get the time in seconds 
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

    setIntervalId(interval);
  }

  const handleStopButton = () => {
    clearInterval(intervalId);
    setStartTime(0);
    setTimeInSecond(0);
  }


  useEffect(() => {
    if ((endTime > 0)) {
      const totalCountingTime: number = getTimeInSeconds(Date.now()) - getTimeInSeconds(startTime);
      localStorage.setItem("totalTime", totalCountingTime.toString());
      console.log("result", totalCountingTime);
      setEndTime(0);
      setStartTime(0);
      setTimeInSecond(0);
    }

  }, [endTime])


  useEffect(() => {
    console.log(startTime);
    localStorage.setItem("startTime", startTime.toString());
    localStorage.setItem("endTime", endTime.toString());
    localStorage.setItem("startTimeArray", JSON.stringify(stampTimeArray));

  }, [startTime, stampTimeArray, endTime]);

  useEffect(() => {
    if ((endTime === 0) && (startTime > 0) && (buttonFlag === false)) {

      const interval: any = setInterval(() => {
        setTimeInSecond(getTimeInSeconds(Date.now()) - getTimeInSeconds(startTime))
      }, 1000);

      setIntervalId(interval);
    }
    else if (endTime > 0) {
      handleStopButton()
      setTimeInSecond(0);
      setIntervalId(0)
    }
  }, [endTime]);

  return (
    <div>
      {
        (startTime === 0 && endTime === 0)
          ?
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              setStartTime(Date.now());
              setStampTimeArray((previousArray) => [...previousArray, Date.now()]);
              setEndTime(0);
              handlePlayButton()
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
          :
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              setEndTime(Date.now());
              handleStopButton();
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseCircleOutlined style={{ fontSize: '18px' }} /></Button>
      }
    </div>
  )
}

export default ControlBtn;