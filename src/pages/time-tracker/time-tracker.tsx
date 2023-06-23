import React, { useEffect } from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TaskLog from '../../components/task-log/task-log';
import { fetchProjectNames } from '../../services/projects/get-projects-names';
import showMessage from '../../utils/message/message';

const TimeTracker: React.FC = () => {
  const [projectsNames, setProjectNames] = React.useState<Array<any>>([]);
  useEffect(() => {
    fetchProjectNames()
      .then((names: any) => {
        if (names === null || names === undefined) {
          console.log("names : ", names);
          console.log("projects names : ", projectsNames);
          showMessage('error', "names of projects are not found")
        } else {
          setProjectNames([...projectsNames, names])
          console.log("mariam is ok", projectsNames);
        }
      }
      )// eslint-disable-next-line
  }, [])
  return (
    <div className='time-tracker'>
      <NewTaskForm />
      <TaskLog />
    </div>
  )
}

export default TimeTracker;