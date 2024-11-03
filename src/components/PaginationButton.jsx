import React from "react";
import PropTypes from "prop-types";
function PaginationButton({ pages, currentPage, onChange }) {
  return (
    <div className="d-flex flex-row-reverse mx-auto p-2">
      <nav aria-label="Page navigation example">
        <ul className="pagination ">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => {
                if (currentPage > 1) onChange(e, currentPage - 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          {[...Array(pages + 1).keys()].slice(1).map((number) => (
            <li
              className={
                number === currentPage ? "page-item active" : "page-item"
              }
              key={number}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  onChange(e, number);
                }}
              >
                {number}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => {
                if (currentPage < pages) onChange(e, currentPage + 1);
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

PaginationButton.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaginationButton;
