import { useTaskStore } from "@/store/useTaskStore";

export const usePagination = () => {
  const { meta, page, setPage } = useTaskStore();

  if (!meta) return null;

  const { totalPages } = meta;

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return { page, pagesArray, totalPages, handlePrevious, handleNext, setPage };
};
