import React from "react";
import { useRouteError } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
    >
      <div className="container">
        <div className="alert alert-danger" role="alert">
          <h1 className="display-4">Oops!</h1>
          <p className="lead">
            Sorry, an unexpected error has occurred. Please try again later.
          </p>
          <hr className="my-4" />
          <p className="text-muted">
            <i>{error.statusText || error.message}</i>
          </p>
          <a href="/" className="btn btn-primary mt-3">
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
