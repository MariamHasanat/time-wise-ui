import { useState } from 'react';

import showMessage from '../../utils/message/message';
import { ITaskInfo, TaskAPI, comingTasks } from '../../services/tasks/submit-task';

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
      .then((tasks: any) => setComingState(tasks))
      .catch((error :any) => {
        showMessage('error', error);
      })

  }

  const deleteTask = async (taskId: string) => {
    await api.deleteTask(taskId)
    .then(async (deleted) => {
      if (deleted) {
        showMessage('success', 'Task deleted successfully.');
        setComingState(await api.getTasks());
      } else {
        showMessage('error', 'Failed to delete task.');
      }
    })
    .catch((error: any) => {
      showMessage('error', error);
    });

  }

  const add = async (task: ITask) => {
    await api.createTask(task)
      .then(async (success : any) => {
        if (success) {
          showMessage('success', "task started successfully");
          localStorage.setItem("taskID", success.taskID.toString())
        }
      })
      .catch((error: any) => {
        showMessage('error', error);
      })
  }

  const complete = async (taskInfo: ITaskInfo) => {
    await api.completeTask(taskInfo)
      .then(async (success : any) => {
        let tasks = comingState;
        if (success) {
          tasks = await api.getTasks();
          setComingState(await api.getTasks())
        } else {
          showMessage('error', "failed submitted task")
        }
        setComingState(tasks);
      })
      .catch((error : any) => {
        showMessage('error', error);
      })

  }
  const getTaskID = () => {
    return localStorage.getItem("taskID");
  }

  return { comingState, add, complete, getTaskID, getTasks, deleteTask }
}

export default useTask
