import { useTaskStore } from "@/store/useTaskStore";
import { useEffect } from "react";

export const useTasksContainer = () => {
  const {
    tasks,
    loading,
    fetchTasks,
    fetchTasksByStatus,
    fetchTasksByTitle,
    fetchTasksByPriority,
  } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    fetchTasks,
    fetchTasksByStatus,
    fetchTasksByTitle,
    fetchTasksByPriority,
  };
};
