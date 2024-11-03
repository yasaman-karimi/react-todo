import React, { useState } from "react";
import { Form, useSearchParams, useNavigate } from "react-router-dom";
function SearchBar() {
  let [searchParams] = useSearchParams();
  const [searchPhrase, setSearchPhrase] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();
  return (
    <Form
      method="GET"
      action="/"
      className="form-inline my-2 my-lg-0 w-25 p-3 d-inline-flex flex-row justify-content-end"
    >
      <input
        className="form-control mr-sm-2 "
        type="search"
        name="q"
        placeholder="Search"
        aria-label="Search"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      {searchParams.get("q") && (
        <button
          className="btn btn-outline-success my-2 my-sm-0 mx-1"
          type="reset"
          onClick={() => {
            setSearchPhrase("");
            navigate("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="17"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      )}
      <button
        className="btn btn-outline-success my-2 my-sm-0 mx-1"
        type="submit"
      >
        Search
      </button>
    </Form>
  );
}

export default SearchBar;
