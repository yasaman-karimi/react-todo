import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Form, useSubmit } from "react-router-dom";

function TodoItem({ item }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");
  let ref = useRef();
  const submitPriority = useSubmit();

  const handleInput = () => {
    setEditing(false);
    setInput("");
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        item.done
          ? "list-group-item-secondary text-decoration-line-through"
          : ""
      }`}
    >
      {!editing ? (
        <>
          {item.input}
          <div className="dropdown">
            <button
              className="btn btn-sm btn-danger mx-1 "
              onClick={() => {
                setInput(item.input);
                setEditing(true);
              }}
            >
              Edit
            </button>
            <Form
              method="POST"
              action={`/priority/${item.id}`}
              className="form-check form-check-inline"
              style={{ margin: "-7px" }}
            >
              <input
                type="hidden"
                name="priority"
                value={item.priority}
                ref={ref}
              />

              <DropdownButton
                className="mx-1 d-inline"
                id="dropdown-basic-button"
                title="Priority"
                size="sm"
              >
                {[1, 2, 3, 4, 5].map((number) => (
                  <Dropdown.Item
                    key={number}
                    onClick={() => {
                      ref.current.value = number;
                      submitPriority(ref.current.parentElement);
                    }}
                    className={
                      item.priority === number ? "text-bg-primary" : ""
                    }
                  >
                    {number}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form>
            <Form
              method="POST"
              action={`/delete/${item.id}`}
              className="form-check form-check-inline"
            >
              <button className="btn btn-sm btn-danger mx-1 " type="submit">
                Delete
              </button>
            </Form>
            <Form
              method="POST"
              action={`/editdone/${item.id}`}
              className="form-check form-check-inline"
              style={{ margin: "2px", marginLeft: "-23px" }}
            >
              <input type="hidden" name="done" value={!item.done} />

              <button className="btn btn-sm btn-info mx-1">
                {item.done ? "Undo" : "Done"}
              </button>
            </Form>
          </div>
        </>
      ) : (
        <Form method="POST" action={`/edit/${item.id}`} onSubmit={handleInput}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            name="input"
            value={input}
            placeholder={item.input}
          />

          <button className="btn btn-sm btn-success mx-1">Save</button>
        </Form>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};
export default TodoItem;
