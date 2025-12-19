import { create } from "zustand";
import { fetchTasks, updateTask } from "@/services/tasksService";
import type { TaskStore } from "@/types/store/TaskStore";

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  taskById: null,
  loading: false,
  page: 1,
  limit: 15,
  meta: null,
  filters: {},

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      page: 1,
    }));

    get().fetchTasks(1);
  },

  fetchTasks: async (page) => {
    const { limit, filters } = get();
    const currentPage = page ?? get().page;

    set({ loading: true });

    const { data, meta } = await fetchTasks({
      page: currentPage,
      limit,
      ...filters,
    });

    set({
      tasks: data ?? [],
      meta,
      page: meta?.currentPage ?? currentPage,
      loading: false,
    });
  },

  clearFilters: () => {
    set({ filters: {}, page: 1 });
    get().fetchTasks(1);
  },

  updateTaskById: async (id, payload) => {
    set({ loading: true });
    const updated = await updateTask(id, payload);
    set({ taskById: updated, loading: false });
  },
}));
