var e=`function TodoItem({\r
  todo,\r
  onToggle,\r
  onDelete,\r
}) {\r
  return (\r
    <li\r
      className={\`todo-item \${\r
        todo.completed ? "completed" : ""\r
      }\`}\r
    >\r
      <label>\r
        <input\r
          type="checkbox"\r
          checked={todo.completed}\r
          onChange={() => onToggle(todo.id)}\r
        />\r
\r
        <span>{todo.text}</span>\r
      </label>\r
\r
      <button\r
        onClick={() => onDelete(todo.id)}\r
      >\r
        Delete\r
      </button>\r
    </li>\r
  );\r
}\r
\r
export default TodoItem;`;export{e as default};