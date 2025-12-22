import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { usePagination } from "@/hooks/usePagination";

export default function PaginationComponent() {
  const dataPages = usePagination();

  return (
    <Pagination>
      <PaginationContent>
        {/* PREVIOUS */}
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={dataPages?.page === 1}
            onClick={dataPages?.handlePrevious}
            className={
              dataPages?.page === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* NÚMEROS */}
        {dataPages?.pagesArray.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === dataPages?.page}
              onClick={() => dataPages.fetchTasks(p)}
              className="cursor-pointer"
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* ELLIPSIS (opcional caso tenha muitas páginas) */}
        {dataPages?.totalPages! > 7 && <PaginationEllipsis />}

        {/* NEXT */}
        <PaginationItem>
          <PaginationNext
            aria-disabled={dataPages?.page === dataPages?.totalPages}
            onClick={dataPages?.handleNext}
            className={
              dataPages?.page === dataPages?.totalPages
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
