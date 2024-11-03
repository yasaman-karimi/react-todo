import { useState } from "react";
import React from "react";
import { Form } from "react-router-dom";
function AddTodo() {
  const [input, setInput] = useState("");

  return (
    <Form method="POST" action="/add" onSubmit={() => setInput("")}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter a task..."
          name="title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success btn-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>
    </Form>
  );
}

export default AddTodo;
