var e=`import { useState } from "react";\r
import TodoItem from "./components/TodoItem";\r
import "./App.css";\r
\r
let nextId = 6;\r
\r
const initialTodos = [\r
  { id: 1, text: "Learn React" },\r
  { id: 2, text: "Learn Hooks" },\r
  { id: 3, text: "Learn React.memo" },\r
  { id: 4, text: "Understand Virtual DOM" },\r
  { id: 5, text: "Optimize Lists" },\r
];\r
\r
function App() {\r
  const [todos, setTodos] = useState(initialTodos);\r
  const [input, setInput] = useState("");\r
\r
  // Add Todo\r
  const addTodo = () => {\r
    if (!input.trim()) return;\r
\r
    setTodos([\r
      ...todos,\r
      {\r
        id: nextId++,\r
        text: input,\r
      },\r
    ]);\r
\r
    setInput("");\r
  };\r
\r
  // Delete Todo\r
  const deleteTodo = (id) => {\r
    setTodos(todos.filter((todo) => todo.id !== id));\r
  };\r
\r
  // Move Item Up\r
  const moveUp = (index) => {\r
    if (index === 0) return;\r
\r
    const updated = [...todos];\r
\r
    [updated[index], updated[index - 1]] = [\r
      updated[index - 1],\r
      updated[index],\r
    ];\r
\r
    setTodos(updated);\r
  };\r
\r
  // Update Todo\r
  const updateTodo = (id) => {\r
    setTodos(\r
      todos.map((todo) =>\r
        todo.id === id\r
          ? {\r
              ...todo,\r
              text: todo.text + " ✔",\r
            }\r
          : todo\r
      )\r
    );\r
  };\r
\r
  return (\r
    <div className="virtual-dom-list-optimization">\r
      <h1>Virtual DOM & List Optimization</h1>\r
\r
      <div className="todo-input-section">\r
        <input\r
          type="text"\r
          placeholder="Enter Todo"\r
          value={input}\r
          onChange={(e) => setInput(e.target.value)}\r
        />\r
\r
        <button onClick={addTodo}>Add</button>\r
      </div>\r
\r
      <hr />\r
\r
      {todos.map((todo, index) => (\r
        <TodoItem\r
          key={todo.id}\r
          todo={todo}\r
          index={index}\r
          deleteTodo={deleteTodo}\r
          moveUp={moveUp}\r
          updateTodo={updateTodo}\r
        />\r
      ))}\r
    </div>\r
  );\r
}\r
\r
export default App;`;export{e as default};