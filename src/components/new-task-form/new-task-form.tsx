import React from 'react';
import './new-task-form.css';
import { Input, Button } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';


const NewTaskForm: React.FC = () => {
  const [buttonFlag, setButtonFlag] = React.useState<boolean>(true);
  return (
    <form className='new-task-form'>
      <Input placeholder="Task Description" type='string' style={{ width: '300px', marginRight: '50px', height: '30px' }} />
      <DropDown />
      <StopWatch />
      {
        buttonFlag
          ?
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
          :
          <Button
            onClick={(e) => {
              e.preventDefault()
              setButtonFlag(!buttonFlag);
            }}
            type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseCircleOutlined style={{ fontSize: '18px' }} /></Button>
      }

    </form>
  )
}

export default NewTaskForm;