var e=`import { useState } from "react";\r
\r
function TodoInput({ onAddTodo }) {\r
  const [inputValue, setInputValue] = useState("");\r
\r
  const handleSubmit = (event) => {\r
    event.preventDefault();\r
\r
    const trimmedValue = inputValue.trim();\r
\r
    if (!trimmedValue) {\r
      return;\r
    }\r
\r
    onAddTodo(trimmedValue);\r
\r
    setInputValue("");\r
  };\r
\r
  return (\r
    <form className="todo-input" onSubmit={handleSubmit}>\r
      <input\r
        type="text"\r
        placeholder="What needs to be done?"\r
        value={inputValue}\r
        onChange={(event) => {\r
          setInputValue(event.target.value);\r
        }}\r
      />\r
\r
      <button type="submit">\r
        Add\r
      </button>\r
    </form>\r
  );\r
}\r
\r
export default TodoInput;`;export{e as default};