import React from "react";
import PropTypes from "prop-types";
function ProgressBar({ todos }) {
  let progress = 0;
  if (todos.length > 0) {
    progress =
      (todos.filter((todo) => todo.done === true).length * 100) / todos.length;
  }

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Example 1px high"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ height: 3 }}
    >
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProgressBar;
