import { IProject } from "./project-interface";
import { ITask } from "./task-interface";

export interface IUser {
  userName: string;
  email: string;
  password: string;
  projects?: IProject[];
  history?: ITask[];
  totalTime?: number;
}