// import React from 'react'
import { useEffect, useState } from 'react';
import TaskAPI, { comingTasks } from '../../services/tasks/submit-task';
import showMessage from '../../utils/message/message';

export interface ITask {
  projectId: string,
  beginTime: string,
  endTime?: string,
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

  return { comingState }
}

export default useTask
