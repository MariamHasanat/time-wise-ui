import React from 'react';
import './new-task-form.css';
import { Input } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import ControlBtn from '../../services/control-button';



const NewTaskForm: React.FC = () => {

  const [timeInSecond, setTimeInSecond] = React.useState<number>(0); 
  return (
    <form className='new-task-form'>
      <Input placeholder="Task Description" type='string' style={{ width: '300px', marginRight: '50px', height: '30px' }} />
      <DropDown />
      <StopWatch timeInSecond={timeInSecond}/>
      <ControlBtn  setTimeInSecond={setTimeInSecond}/>
    </form>
  )
}

export default NewTaskForm;