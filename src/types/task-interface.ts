export interface ITask {
  taskId: string;
  projectId: string;
  projectName: string;
  description: string;
  beginTime: string;
  endTime?: string;
  totalTaskTime: number;
}
