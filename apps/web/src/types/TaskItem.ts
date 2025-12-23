import type { Comments } from "./CommentsType";
import type { PriorityTaskType } from "./PriorityTaskType";
import type { StatusTaskType } from "./StatusTaskType";

export type TaskItem = {
  id: string;
  title: string;
  authorEmail: string;
  description: string;
  dueDate: Date;
  priority: PriorityTaskType;
  status: StatusTaskType;
  assignedEmails: string[];
  comments: Comments[];
  createdAt: Date;
  updatedAt: Date;
};
