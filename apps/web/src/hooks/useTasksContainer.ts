import { useTaskStore } from "@/store/useTaskStore";
import { useEffect } from "react";

export const useTasksContainer = () => {
  const { tasks, loading, fetchTasks, setFilters } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    fetchTasks,
    setFilters,
  };
};
