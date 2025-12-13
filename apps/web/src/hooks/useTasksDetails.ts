import { useTaskStore } from "@/store/useTaskStore";
import { useEffect } from "react";

export const useTasksDetails = (id: string) => {
  const { fetchTaskById, taskById, loading } = useTaskStore();

  useEffect(() => {
    const getTask = async () => {
      await fetchTaskById(id);
    };
    getTask();
  }, [id]);

  return { taskById, loading };
};
