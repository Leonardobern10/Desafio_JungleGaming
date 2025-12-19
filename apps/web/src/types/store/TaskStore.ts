import type { UpdateTaskSchemaType } from "@/schema/UpdateTaskSchema";
import type { MetaType } from "../MetaType";
import type { TaskItem } from "../TaskItem";
import type { TaskFilters } from "./TaskFilters";

export type TaskStore = {
  tasks: TaskItem[];
  taskById: TaskItem | null;
  loading: boolean;
  page: number;
  limit: number;
  meta: MetaType | null;
  filters: TaskFilters;

  setFilters: (filters: Partial<TaskFilters>) => void;
  clearFilters: () => void;
  fetchTasks: (page?: number) => Promise<void>;
  updateTaskById: (id: string, data: UpdateTaskSchemaType) => Promise<void>;
};
