import { Task } from './Task';

export class TaskHistory {
  id: string;
  action: string;
  oldValue: string;
  newValue: string;
  task: Task;
  createdAt: Date;
}
