var e=`import TodoItem from "./TodoItem";\r
\r
function TodoList({\r
  filteredTodos,\r
  onToggleTodo,\r
  onDeleteTodo,\r
}) {\r
  if (filteredTodos.length === 0) {\r
    return (\r
      <p className="empty-message">\r
        No todos found.\r
      </p>\r
    );\r
  }\r
\r
  return (\r
    <ul className="todo-list">\r
      {filteredTodos.map((todo) => (\r
        <TodoItem\r
          key={todo.id}\r
          todo={todo}\r
          onToggle={onToggleTodo}\r
          onDelete={onDeleteTodo}\r
        />\r
      ))}\r
    </ul>\r
  );\r
}\r
\r
export default TodoList;`;export{e as default};