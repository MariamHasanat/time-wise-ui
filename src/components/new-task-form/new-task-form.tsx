import React from 'react';
import { Input } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import { PlayCircleOutlined } from '@ant-design/icons';


const NewTaskForm: React.FC = () => {
  return (
    <form className='new-task-form'>
      <Input placeholder="Task Description" type='string' style={{ width: '495px', marginRight: '50px' }} />
      <DropDown />
      <StopWatch />
      <button>
        <PlayCircleOutlined />
      </button>
    </form>
  )
}

export default NewTaskForm;