function TodoItem({
  todo,
  onToggle,
  onDelete,
}) {
  return (
    <li
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
    >
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;