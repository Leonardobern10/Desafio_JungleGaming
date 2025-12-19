import type { PriorityTaskType } from "./PriorityTaskType";
import type { StatusTaskType } from "./StatusTaskType";

export type FetchTasksParams = {
  page?: number;
  limit?: number;
  status?: StatusTaskType;
  priority?: PriorityTaskType;
  title?: string;
};
