import { useEffect, useRef } from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TaskLog from '../../components/task-log/task-log';
import { fetchProjectNames } from '../../services/projects/get-projects-names';
import showMessage from '../../utils/message/message';

interface IProName {
  _id: string,
  name: string
}

const TimeTracker = () => {
  const projectsNames = useRef<Array<IProName>>();
 
  useEffect(() => {
    fetchProjectNames()
      .then((names: Array<IProName>) => {
        if (names === null || names === undefined) {
          console.log("names : ", names);
          console.log("projects names : ", projectsNames);
          showMessage('error', "names of projects are not found")
        } else {
          projectsNames.current = names;
          console.log("mariam is ok", projectsNames.current);
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