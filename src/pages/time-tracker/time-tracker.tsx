import React from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';

const TimeTracker: React.FC = () => {
  return (
    <div className='time-body'>
      <NewTaskForm />
    </div>
  )
}

export default TimeTracker;