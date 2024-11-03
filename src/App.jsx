import { useEffect, useState } from "react";
import React from "react";
import ProgressBar from "./components/ProgressBar";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import PaginationButton from "./components/PaginationButton";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import { useLoaderData } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState([]);
  const userTodos = useLoaderData();
  const [active, setActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const activeTodos = todos.filter((item) => item.done === false);
  const numberOfActivePages = Math.ceil(activeTodos.length / 5);

  const completedTodos = todos.filter((item) => item.done === true);
  const numberOfCompletedPages = Math.ceil(completedTodos.length / 5);

  useEffect(() => {
    setTodos(userTodos);
  }, [userTodos]);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">My To-Do List</h1>
        <SearchBar />
        <AddTodo />

        <FilterBar
          onChange={(active) => {
            setActive(active);
            setCurrentPage(1);
          }}
        />
        <ProgressBar todos={todos} />

        <ul className="list-group">
          {(active ? activeTodos : completedTodos)
            .slice(currentPage * 5 - 5, currentPage * 5)
            .map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
        </ul>

        <PaginationButton
          onChange={(e, currentPage) => {
            setCurrentPage(currentPage);
          }}
          currentPage={currentPage}
          pages={active ? numberOfActivePages : numberOfCompletedPages}
        />
      </div>
    </>
  );
}

export default App;
