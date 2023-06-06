import React from 'react';
import { Input } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import { PlayCircleOutlined } from '@ant-design/icons';


const NewTaskForm: React.FC = () => {
  return (
    <form>
      <Input placeholder="Task Description" />
      <DropDown />
      <StopWatch />
      <button>
        <PlayCircleOutlined />
      </button>
    </form>
  )
}

export default NewTaskForm;