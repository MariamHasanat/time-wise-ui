// import React from 'react'
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
        // let tasks = comingState;
        if (success) {
          showMessage('success', "task submitted successfully");
          // tasks = await api.getTasks();
          // setComingState(tasks)
        } else {
          showMessage('error', "failed submitted task")
        }
        // setComingState(tasks);
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
          showMessage('success', "task submitted successfully");
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

  return { comingState, add, complete }
}

export default useTask
