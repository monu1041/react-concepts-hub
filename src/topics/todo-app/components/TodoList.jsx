import TodoItem from "./TodoItem";

function TodoList({
  filteredTodos,
  onToggleTodo,
  onDeleteTodo,
}) {
  if (filteredTodos.length === 0) {
    return (
      <p className="empty-message">
        No todos found.
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;