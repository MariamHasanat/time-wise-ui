import { ITask } from "../../hooks/tasks/task.hook";
import showMessage from "../../utils/message/message";

export interface comingTasks {
  _id: string;
  description: string;
  beginTime: string;
  endTime: string;
  projectName: string;
  projectColor: string;
  status: string;
  totalTimeInSeconds: string;
}

export interface ITaskInfo {
  _id: string;
  endTime: string;
}
export interface IResInfo {
  status: string;
  taskID: string;
}

class TaskAPI {
  private API: string = `http://localhost:3001`;
  private token: string = localStorage.getItem("token") || "";
  public receivedStatus: object = {};
  getTasks = () => {
    return fetch(`${this.API}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
    }).then((res) => res.json() as Promise<comingTasks[]>);
  };

  createTask = async (task: ITask) => {
    const optional: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
      body: JSON.stringify(task),
    };
    return await fetch(`${this.API}/tasks`, optional)
      .then(async (res) => res.json() as Promise<IResInfo>)
      .catch((error) => showMessage("error", error));
  };
  completeTask = async (taskInfo: ITaskInfo) => {
    const { _id, endTime } = taskInfo;
    console.log("id is ", _id);

    const optional: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ endTime }),
    };
    return await fetch(`${this.API}/tasks/${_id}`, optional)
      .then((res) => {
        if (res.status === 200) {
          showMessage("success", "completed successfully");
          return true;
        } else {
          showMessage("error", "failed complete the task");
          return false;
        }
      })
      .catch((error) => showMessage("error", error));
  }
  deleteTask = (taskId: string) => {
    const optional: RequestInit = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'token': this.token
      }
    };

    return fetch(`${this.API}/tasks/${taskId}`, optional)
      .then(res => {
        if (res.ok) {
          return true;
        } else {
          throw new Error('Failed to delete task.');
        }
      })
      .catch(error => {
        showMessage('error', error);
        return false;
      });
  };
}
export default TaskAPI;




// import { ITask } from "../../hooks/tasks/task.hook";
// import showMessage from "../../utils/message/message";

// export interface comingTasks {
//   '_id': string,
//   'description': string,
//   'beginTime': string,
//   'endTime': string,
//   'projectName': string,
//   'projectColor': string
// }

// class TaskAPI {
//   private API: string = `http://localhost:3001`;
//   private token: string = localStorage.getItem("token") || "";

//   getTasks = () => {
//     return fetch(`${this.API}/tasks`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'token': this.token
//       }
//     }
//     ).then(res => res.json() as Promise<comingTasks[]>);
//   }

//   createTask = (task: ITask) => {
//     console.log(task);

//     const optional: RequestInit = {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'token': this.token
//       },
//       body: JSON.stringify(task)
//     };
//     return fetch(`${this.API}/tasks`, optional)
//       .then(res => res.status === 201)
//       .catch(error => showMessage('error', error))

//   }
//   deleteTask = (taskId: string) => {
//     const optional: RequestInit = {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',
//         'token': this.token
//       }
//     };

//     return fetch(`${this.API}/tasks/${taskId}`, optional)
//       .then(res => {
//         if (res.ok) {
//           return true;
//         } else {
//           throw new Error('Failed to delete task.');
//         }
//       })
//       .catch(error => {
//         showMessage('error', error);
//         return false;
//       });
//   };

// }
// export default TaskAPI




