var e=`import React from "react";\r
\r
const TodoItem = React.memo(\r
  ({ todo, index, deleteTodo, moveUp, updateTodo }) => {\r
    console.log("Rendered:", todo.text);\r
\r
    return (\r
      <div className="todo-item">\r
        <span>{todo.text}</span>\r
\r
        <div className="todo-buttons">\r
          <button onClick={() => updateTodo(todo.id)}>\r
            Update\r
          </button>\r
\r
          <button onClick={() => moveUp(index)}>\r
            ↑\r
          </button>\r
\r
          <button onClick={() => deleteTodo(todo.id)}>\r
            Delete\r
          </button>\r
        </div>\r
      </div>\r
    );\r
  }\r
);\r
\r
export default TodoItem;`;export{e as default};