function TodoFooter({ todos }) {
  const remainingCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <footer className="todo-footer">
      <span>
        {remainingCount} remaining
      </span>

      <span>
        {todos.length} total
      </span>
    </footer>
  );
}

export default TodoFooter;