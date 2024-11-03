import React from "react";
import PropTypes from "prop-types";

function Pagination({ number, onClick, currentPage }) {
  return (
    <li className={currentPage === number ? "page-item active" : "page-item"}>
      <a className="page-link" href="#" onClick={onClick}>
        {number}
      </a>
    </li>
  );
}

Pagination.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
