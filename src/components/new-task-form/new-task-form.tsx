import React from 'react';
import './new-task-form.css';
import { Input, Button } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import { PlayCircleOutlined } from '@ant-design/icons';


const NewTaskForm: React.FC = () => {
  return (
    <form className='new-task-form'>
      <Input placeholder="Task Description" type='string' style={{ width: '300px', marginRight: '50px', height: '30px', borderRadius: '0px' }} />
      <DropDown />
      <StopWatch />
      <Button type='primary' style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayCircleOutlined style={{ fontSize: '18px' }} /></Button>
    </form>
  )
}

export default NewTaskForm;