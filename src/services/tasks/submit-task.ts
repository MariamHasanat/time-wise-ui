import { ITask, IUpTask } from "../../hooks/tasks/task.hook";
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

export class TaskAPI {
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
  updateTask = async (task: IUpTask) => {
    const optional: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
      body: JSON.stringify(task.task),
    };
    return await fetch(`${this.API}/tasks/${task.taskId}`, optional)
      .then(async (res) => res.json() as Promise<IResInfo>)
      .catch((error) => showMessage("error", error));
  };
  completeTask = async (taskInfo: ITaskInfo) => {
    const { _id, endTime } = taskInfo;

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
          // showMessage("success", "completed successfully");
          return true;
        } else {
          // showMessage("error", "failed to complete the task");
          return false;
        }
      })
      .catch((error) => showMessage("error", error));
  };
  deleteTask = (taskId: string) => {
    const optional: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
    };

    return fetch(`${this.API}/tasks/${taskId}`, optional)
      .then((res) => {
        if (res.ok) {
          return true;
        } else {
          throw new Error("Failed to delete task.");
        }
      })
      .catch((error) => {
        showMessage("error", error);
        return false;
      });
  };

}
