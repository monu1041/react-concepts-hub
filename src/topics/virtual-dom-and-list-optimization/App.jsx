import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

let nextId = 6;

const initialTodos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Hooks" },
  { id: 3, text: "Learn React.memo" },
  { id: 4, text: "Understand Virtual DOM" },
  { id: 5, text: "Optimize Lists" },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  // Add Todo
  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        id: nextId++,
        text: input,
      },
    ]);

    setInput("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Move Item Up
  const moveUp = (index) => {
    if (index === 0) return;

    const updated = [...todos];

    [updated[index], updated[index - 1]] = [
      updated[index - 1],
      updated[index],
    ];

    setTodos(updated);
  };

  // Update Todo
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: todo.text + " ✔",
            }
          : todo
      )
    );
  };

  return (
    <div className="virtual-dom-list-optimization">
      <h1>Virtual DOM & List Optimization</h1>

      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <hr />

      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          moveUp={moveUp}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default App;