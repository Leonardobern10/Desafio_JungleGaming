import { Task } from './Task';

export type Comment = {
  id: string;
  text: string;
  author: string;
  task: Task;
  taskId: string;
  createdAt: Date;
};
