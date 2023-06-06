import React from 'react';
import { Input } from 'antd';

const NewTaskForm: React.FC = () => {
  return (
    <form>
      <div>
        <Input placeholder="Task Description" />;
      </div>
    </form>
  )
}

export default NewTaskForm;