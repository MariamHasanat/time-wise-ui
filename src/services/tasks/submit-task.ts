import { ITask } from "../../hooks/tasks/task.hook";
import showMessage from "../../utils/message/message";

export interface comingTasks {
  '_id': string,
  'description': string,
  'beginTime': string,
  'endTime': string,
  'projectName': string,
  'projectColor': string
  'status': string
  'totalTimeInSeconds': string
}

class TaskAPI {
  private API: string = `http://localhost:3001`;
  private token: string = localStorage.getItem("token") || "";

  getTasks = () => {
    return fetch(`${this.API}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': this.token
      }
    }
    ).then(res => res.json() as Promise<comingTasks[]>);
  }

  createTask = (task: ITask) => {
    console.log(task);

    const optional: RequestInit = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'token': this.token
      },
      body: JSON.stringify(task)
    };
    return fetch(`${this.API}/tasks`, optional)
      .then(res => res.status === 201)
      .catch(error => showMessage('error', error))

  };

}
export default TaskAPI

