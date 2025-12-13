import type { PriorityTaskType } from "./PriorityTaskType";
import type { StatusTaskType } from "./StatusTaskType";

export type TaskResponse = {
  id: string;
  title: string;
  authorEmail: string;
  description: string;
  dueDate: Date | null;
  priority: PriorityTaskType;
  status: StatusTaskType;
  assignedEmails: string[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
};
