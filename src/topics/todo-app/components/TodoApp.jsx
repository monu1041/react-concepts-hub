import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoSearch from "./TodoSearch";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function searchApi(searchTerm) {
  console.log("Search API called:", searchTerm);
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      searchApi(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((currentTodos) => [
      ...currentTodos,
      newTodo,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  // Derived state
  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <TodoInput onAddTodo={addTodo} />

      <TodoSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
      />

      <TodoList
        filteredTodos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />

      <TodoFooter todos={todos} />
    </div>
  );
}

export default TodoApp;