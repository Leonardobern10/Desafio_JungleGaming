import { useTaskStore } from "@/store/useTaskStore";

export const usePagination = () => {
  const { meta, page, fetchTasks } = useTaskStore();

  if (!meta) return null;

  const { totalPages } = meta;

  const handlePrevious = () => {
    if (page > 1) fetchTasks(page - 1);
  };
  const handleNext = () => {
    if (page < totalPages) fetchTasks(page + 1);
  };
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    page,
    pagesArray,
    totalPages,
    handlePrevious,
    handleNext,
    fetchTasks,
  };
};
