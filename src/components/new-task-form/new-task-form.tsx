import React, { useEffect } from 'react';
import './new-task-form.css';
import { Input } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import ControlBtn from '../../services/control-button';



const NewTaskForm: React.FC = () => {

  const [timeInSecond, setTimeInSecond] = React.useState<number>(0);

  useEffect(() => {
    //Save the stopwatch time to localStorage whenever it changes
    localStorage.setItem('stopwatchTime', timeInSecond.toString());
  }, [timeInSecond]);


  return (
    <form className='new-task-form'>
      <Input placeholder="Task Description" type='string' style={{ width: '300px', marginRight: '50px', height: '30px' }} />
      <DropDown />
      <StopWatch timeInSecond={timeInSecond} />
      <ControlBtn timeInSecond={timeInSecond} setTimeInSecond={setTimeInSecond} />
    </form>
  )
}

export default NewTaskForm;