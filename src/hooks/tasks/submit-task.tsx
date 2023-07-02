// import React from 'react'
import showMessage from '../../utils/message/message';
import submitTask from '../../services/tasks/submit-task';

export interface ITask {
  projectId: string,
  beginTime: string,
  endTime?: string,
  description: string,
}
const useTask = () => {

  const submitTaskHandler = async (form: HTMLFormElement) => {
    const data = new FormData(form);
    const task: ITask = {
      projectId: data.get('projectId') as string,
      beginTime: data.get('beginTime') as string,
      endTime: data.get('endTime') as string,
      description: data.get('description') as string,
    }
    if (await submitTask(task)) {
      showMessage('success', "task created successfully")
    }
    else{
      showMessage('error', "task not submitted")
    }
  }
  return {
    submitTaskHandler
  }
}

export default useTask