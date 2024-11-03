import React from "react";
import PropTypes from "prop-types";

function FilterBar({ onChange }) {
  return (
    <div
      className="btn-group mb-3"
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          onChange(true);
        }}
      >
        Active items
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => {
          onChange(false);
        }}
      >
        History
      </button>
    </div>
  );
}

FilterBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterBar;
