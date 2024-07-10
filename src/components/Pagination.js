import React, { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`rounded py-1 ${i === currentPage ? "bg-gray-200" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(<span key="start-ellipsis">...</span>);
    }
    if (endPage < totalPages) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    return pageNumbers;
  };

  return (
    <div className="bg-[#181818] bg-opacity-10">
      <div className="flex justify-between items-center py-2 px-2 mt-2">
        <button
          className="bg-white rounded p-[5px]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="space-x-3 flex">{renderPageNumbers()}</div>
        <button
          className="bg-white rounded p-[5px]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
