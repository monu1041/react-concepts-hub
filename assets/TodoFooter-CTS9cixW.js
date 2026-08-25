var e=`function TodoFooter({ todos }) {\r
  const remainingCount = todos.filter(\r
    (todo) => !todo.completed\r
  ).length;\r
\r
  return (\r
    <footer className="todo-footer">\r
      <span>\r
        {remainingCount} remaining\r
      </span>\r
\r
      <span>\r
        {todos.length} total\r
      </span>\r
    </footer>\r
  );\r
}\r
\r
export default TodoFooter;`;export{e as default};