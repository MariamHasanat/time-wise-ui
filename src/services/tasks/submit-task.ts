export interface comingTasks {
  '_id': string,
  'description': string,
  'beginTime': string,
  'endTime': string,
  'projectName': string,
  'projectColor': string
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

}
export default TaskAPI

