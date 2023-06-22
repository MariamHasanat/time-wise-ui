import React from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TaskLog from '../../components/task-log/task-log';

const TimeTracker: React.FC = () => {
  return (
    <div className='time-tracker'>
      <NewTaskForm />
      <TaskLog />
    </div>
  )
}

export default TimeTracker;