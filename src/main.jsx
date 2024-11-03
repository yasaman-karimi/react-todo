import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/LoginPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Signup from "./components/SignUpPage.jsx";
import { todosLoader } from "./loaders.js";
import {
  addTodoAction,
  editInputAction,
  deleteAction,
  updatePriorityAction,
  updateDoneAction,
} from "./actions.js";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: todosLoader,
    children: [
      {
        path: "add",
        action: addTodoAction,
      },
      {
        path: "edit/:id",
        action: editInputAction,
      },
      {
        path: "priority/:id",
        action: updatePriorityAction,
      },
      {
        path: "editdone/:id",
        action: updateDoneAction,
      },
      {
        path: "delete/:id",
        action: deleteAction,
      },
      {
        path: "search/",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
