import React, {  } from "react";
import PropTypes from "prop-types";


interface Props {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
  }
const Pagination:React.FC <Props>= ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
      >
        &larr;
      </button>

      <span className="pagination__info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination__button"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
      >
         &rarr;
      </button>
    </div>
  );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePrevPage: PropTypes.func.isRequired,
    handleNextPage: PropTypes.func.isRequired,
  };

export default Pagination