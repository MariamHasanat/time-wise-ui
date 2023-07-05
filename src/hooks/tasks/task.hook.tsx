import { useState } from 'react';
import TaskAPI, { ITaskInfo, comingTasks } from '../../services/tasks/taskApi';
import showMessage from '../../utils/message/message';

export interface ITask {
  projectId: string,
  beginTime: string,
  description: string,
}

const api = new TaskAPI();

const useTask = () => {

  const [comingState, setComingState] = useState<Array<comingTasks>>([]);

  const getTasks = async () => {
    await api.getTasks()
      .then((tasks) => setComingState(tasks))
      .catch(error => {
        showMessage('error', error);
      })

  }


  const add = async (task: ITask) => {
    await api.createTask(task)
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
  const complete = async (taskInfo: ITaskInfo) => {
    await api.completeTask(taskInfo)
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

  return { comingState, add, complete, getTaskID, getTasks }
}

export default useTask
