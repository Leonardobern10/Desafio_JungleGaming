import { TaskPriority } from './enum/TaskPriority';
import { TaskStatus } from './enum/TaskStatus';
import { TaskHistory } from './TaskHistory';

export class Task {
  id: string;
  title: string;
  authorEmail: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  status: TaskStatus;
  assignedEmails: string[];
  history: TaskHistory[];
  createdAt: Date;
  updatedAt: Date;
}
