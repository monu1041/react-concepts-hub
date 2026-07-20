import React from "react";

const TodoItem = React.memo(
  ({ todo, index, deleteTodo, moveUp, updateTodo }) => {
    console.log("Rendered:", todo.text);

    return (
      <div className="todo-item">
        <span>{todo.text}</span>

        <div className="todo-buttons">
          <button onClick={() => updateTodo(todo.id)}>
            Update
          </button>

          <button onClick={() => moveUp(index)}>
            ↑
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
);

export default TodoItem;