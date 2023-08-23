import { useTheme } from "@/context/ThemeContext";
import React from "react";

type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const { theme } = useTheme();

  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageClick = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Display at most 2 page numbers before and after the current page
    const maxPagesToShow = 2;

    for (let i = 1; i <= totalPages; i++) {
      // Display the current page and up to maxPagesToShow before and after it
      if (
        i === currentPage ||
        (i >= currentPage - maxPagesToShow && i <= currentPage + maxPagesToShow)
      ) {
        pageNumbers.push(
          <li
            key={i}
            className={`${
              currentPage === i
                ? `${[theme]}-current`
                : `bg-transparent dark:hover:bg-slate-400`
            } relative block rounded px-3 py-1.5 text-sm ${[
              theme,
            ]}-text transition-all duration-300 `}
            onClick={() => handlePageClick(i)}
          >
            {i}
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li
            className={`${
              currentPage === 1
                ? "pointer-events-none text-neutral-400 "
                : "cursor-pointer"
            } relative block rounded px-3 py-1.5 text-sm ${[
              theme,
            ]}-selected transition-all duration-300`}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </li>
          {renderPageNumbers()}
          <li
            className={`${
              currentPage === totalPages
                ? "pointer-events-none text-neutral-400"
                : "cursor-pointer"
            } relative block rounded ${[
              theme,
            ]}-selected px-3 py-1.5 text-sm  transition-all duration-300 `}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
