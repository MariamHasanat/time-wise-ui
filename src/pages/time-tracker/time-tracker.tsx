import { useEffect, useState } from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TaskLog from '../../components/task-log/task-log';
import { fetchProjectNames } from '../../services/projects/get-projects-names';
import showMessage from '../../utils/message/message';
import { Spin } from 'antd';
import useTask from '../../hooks/tasks/task.hook';

export interface IProName {
  _id: string,
  name: string
}

const TimeTracker = () => {// eslint-disable-next-line
  const [projectsNames, setProjectsNames] = useState<Array<IProName>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const newTask = useTask();
  const allTasks = newTask.comingState;

  useEffect(() => {
    fetchProjectNames()
      .then((names?: Array<IProName>) => {
        if (names === null || names === undefined) {
          showMessage('error', "names of projects are not found")
        } else {
          setProjectsNames(names);
        }
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
      )

    newTask.getTasks()
      .then(() => {
        // showMessage('success', "tasks fetched successfully")
      }).catch(error => showMessage('error', error))
    // eslint-disable-next-line
  }, [])

  const convertedProjectsNames = projectsNames.map((item, index) => ({
    key: index.toString(),
    label: item.name,
  }));
  const projectsId = projectsNames.map((item) => ({
    id: item._id,
    name: item.name
  }))

  return (
    <div className='time-tracker'>
      <Spin spinning={loading} >
        <NewTaskForm projects={convertedProjectsNames} projectsId={projectsId} startNewTask={newTask.add} completeRunningTask={newTask.complete} />
        <TaskLog allTasks={allTasks} />
      </Spin>
    </div>
  )
}

export default TimeTracker;