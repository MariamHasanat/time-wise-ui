import { useEffect, useState } from 'react';
import TaskAPI, { ITaskInfo, comingTasks } from '../../services/tasks/submit-task';
import showMessage from '../../utils/message/message';

export interface ITask {
  projectId: string,
  beginTime: string,
  description: string,
}

const api = new TaskAPI();

const useTask = () => {

  const [comingState, setComingState] = useState<Array<comingTasks>>([]);

  useEffect(() => {
    api.getTasks()
      .then((tasks) => setComingState(tasks))
      .catch(error => {
        showMessage('error', error);
      })
  }, [])

  const add = (task: ITask) => {
    api.createTask(task)
      .then(async success => {
        if (success) {
          showMessage('success', "task started successfully");
          localStorage.setItem("taskID", success.taskID.toString())
        }
      })
      .catch(error => {
        showMessage('error', error);
      })
  }
  const complete = (taskInfo: ITaskInfo) => {
    api.completeTask(taskInfo)
      .then(async success => {
        let tasks = comingState;
        if (success) {
          tasks = await api.getTasks();
          setComingState(tasks)
        } else {
          showMessage('error', "failed submitted task")
        }
        setComingState(tasks);
      })
      .catch(error => {
        showMessage('error', error);
      })

  }
  const getTaskID = () => {
    return localStorage.getItem("taskID");
  }

  return { comingState, add, complete, getTaskID }
}

export default useTask
