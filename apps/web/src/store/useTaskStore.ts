import { create } from "zustand";
import {
  fetchTasks,
  fetchTaskByPriority,
  fetchTaskByStatus,
  fetchTaskById,
  updateTask,
  fetchTaskByTitle,
} from "@/services/tasksService";
import type { TaskItem } from "@/types/TaskItem";
import type { PriorityTaskType } from "@/types/PriorityTaskType";
import type { StatusTaskType } from "@/types/StatusTaskType";
import type { UpdateTaskSchemaType } from "@/schema/UpdateTaskSchema";

type TaskStore = {
  tasks: TaskItem[];
  taskById: TaskItem | null;
  loading: boolean;
  page: number;
  limit: number;
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  } | null;

  setPage: (page: number) => void;
  fetchTasks: (page?: number) => Promise<void>;
  fetchTasksByPriority: (
    priority: PriorityTaskType,
    page?: number
  ) => Promise<void>;
  fetchTasksByStatus: (status: StatusTaskType, page?: number) => Promise<void>;
  fetchTasksByTitle: (title: string) => Promise<void>;
  fetchTaskById: (id: string) => Promise<void>;
  updateTaskById: (id: string, data: UpdateTaskSchemaType) => Promise<void>;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  loading: false,
  taskById: null,
  limit: 10,
  page: 1,
  meta: null,

  setPage: (page: number) => {
    set({ page });
    get().fetchTasks(page);
  },

  fetchTasks: async (page) => {
    const state = get();
    const currentPage = page ?? state.page;

    set({ loading: true });

    const { data, meta } = await fetchTasks(currentPage, state.limit);
    set({
      tasks: data ?? [],
      meta,
      page: meta?.currentPage ?? currentPage,
      loading: false,
    });
  },

  fetchTasksByPriority: async (priority, page) => {
    const state = get();
    const currentPage = page ?? state.page;

    set({ loading: true });
    const { data, meta } = await fetchTaskByPriority(priority, page);
    set({
      tasks: data ?? [],
      meta,
      page: meta?.currentPage ?? currentPage,
      loading: false,
    });
  },

  fetchTasksByTitle: async (title) => {
    set({ loading: true });
    const { data, meta } = await fetchTaskByTitle(title);
    set({
      tasks: data ?? [],
      meta,
      page: meta?.currentPage,
      loading: false,
    });
  },

  fetchTasksByStatus: async (status, page) => {
    const state = get();
    const currentPage = page ?? state.page;

    set({ loading: true });
    const { data, meta } = await fetchTaskByStatus(status, page);
    set({
      tasks: data ?? [],
      meta,
      page: meta?.currentPage ?? currentPage,
      loading: false,
    });
  },

  fetchTaskById: async (id) => {
    set({ loading: true });
    const data = await fetchTaskById(id);
    set({ taskById: data ?? null, loading: false });
  },

  updateTaskById: async (id, payload) => {
    set({ loading: true });
    const updated = await updateTask(id, payload);
    set({ taskById: updated, loading: false });
  },
}));
