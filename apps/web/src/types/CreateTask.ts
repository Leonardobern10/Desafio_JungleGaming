import type { PriorityTaskType } from "./PriorityTaskType";
import type { StatusTaskType } from "./StatusTaskType";

export type CreateTask = {
  title: string;
  description: string;
  status: StatusTaskType;
  priority: PriorityTaskType;
  assignedEmails: string[];
  dueDate: Date;
};
