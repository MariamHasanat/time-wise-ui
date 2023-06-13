import React, { useEffect } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  timeInSecond: number,
  setTimeInSecond: Function
}
const ControlBtn = (props: Props) => {

  const [buttonFlag, setButtonFlag] = React.useState<boolean>(true);//this state to change the form of icon 
  const [startTime, setStartTime] = React.useState<number>(0);
  const { setTimeInSecond } = props; //, timeInSecond  
  const [intervalId, setIntervalId] = React.useState<number>(0);

  const storedArray:any = localStorage.getItem('startTimeArray');
  const d:Array<number | string> = JSON.parse(storedArray);
  

  const [stampTimeArray, setStampTimeArray] = React.useState<Array<number | string>>(storedArray ? d : []);

  const handlePlayButton = (e: object) => {
    const interval: any = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);

    // const currentStampTime = Date.now();

    // // Add the new timestamp to the stampTimeArray using the functional form of setState
    // setStampTimeArray((previousArray) => [...previousArray, currentStampTime]);

    // // Save the updated stampTimeArray to localStorage
    // localStorage.setItem("startTimeArray", JSON.stringify(stampTimeArray));

    setIntervalId(interval);
  }

  const handleStopButton = () => {
    clearInterval(intervalId);
  }

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSecond(0);
  }


  useEffect(() => {
    console.log(startTime);
    localStorage.setItem("startTime", startTime.toString());
    localStorage.setItem("startTimeArray", JSON.stringify(stampTimeArray));
  }, [startTime, stampTimeArray]);

  return (
    <div>
      {
        buttonFlag
          ?
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              setStartTime(Date.now());
              setStampTimeArray((previousArray) => [...previousArray, Date.now()]);
              handlePlayButton(e)
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
          :
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
              handleStopButton();
              handleReset();
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseCircleOutlined style={{ fontSize: '18px' }} /></Button>
      }
    </div>
  )
}

export default ControlBtn