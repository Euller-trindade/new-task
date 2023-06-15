import { useEffect, useState } from "react";
import "./App.css";

import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

const getLocalTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [todos, setTodos] = useState(getLocalTodos());
  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };
  const removeTodo = (id) => {
    const newTodo = [...todos];
    const filtredTodo = newTodo.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filtredTodo);
  };
  const completeTodo = (id) => {
    const newTodo = [...todos];
    newTodo.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodo);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <div className="atalhos">
          <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
          <Search search={search} setSearch={setSearch} />
        </div>

        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "ASC"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
