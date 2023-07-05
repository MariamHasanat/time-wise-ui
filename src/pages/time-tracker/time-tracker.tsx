import { useEffect, useState } from 'react';
import './time-tracker.css';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TaskLog from '../../components/task-log/task-log';
import { fetchProjectNames } from '../../services/projects/get-projects-names';
import showMessage from '../../utils/message/message';
import { Spin } from 'antd';
import useTask from '../../hooks/tasks/task.hook';

export interface IProName {
  _id: string;
  name: string;
}

const TimeTracker = () => {
  const [projectsNames, setProjectsNames] = useState<IProName[]>([]);
  const [loading, setLoading] = useState(true);
  const newTask = useTask();
  const allTasks = newTask.comingState;

  useEffect(() => {
    fetchProjectNames()
      .then((names: IProName[] | null | undefined) => {
        if (names === null || names === undefined) {
          showMessage('error', 'Names of projects are not found');
        } else {
          setProjectsNames(names);
        }
        setLoading(false);
      })
      .catch((error) => {
        showMessage('error', error);
        setLoading(false);
      });

    newTask.getTasks()
      .then(() => {
        showMessage('success', "fetch successfully")
      }).catch(error => showMessage('error', error))
    // eslint-disable-next-line
  }, [])

  const convertedProjectsNames = projectsNames.map((item, index) => ({
    key: index.toString(),
    label: item.name,
  }));
  const projectsId = projectsNames.map((item) => ({
    id: item._id,
    name: item.name,
  }));

  return (
    <div className="time-tracker">
      <Spin spinning={loading}>
        <NewTaskForm
          projects={convertedProjectsNames}
          projectsId={projectsId}
          startNewTask={newTask.add}
          completeRunningTask={newTask.complete}
        />

        <TaskLog allTasks={allTasks} handleDeleteTask={newTask.deleteTask} />
      </Spin>
    </div>
  );
};

export default TimeTracker;