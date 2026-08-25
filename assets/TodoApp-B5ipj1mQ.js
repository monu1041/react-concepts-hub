var e=`import { useEffect, useState } from "react";\r
import TodoInput from "./TodoInput";\r
import TodoSearch from "./TodoSearch";\r
import TodoFilter from "./TodoFilter";\r
import TodoList from "./TodoList";\r
import TodoFooter from "./TodoFooter";\r
\r
function searchApi(searchTerm) {\r
  console.log("Search API called:", searchTerm);\r
}\r
\r
function TodoApp() {\r
  const [todos, setTodos] = useState([]);\r
  const [filter, setFilter] = useState("all");\r
  const [searchTerm, setSearchTerm] = useState("");\r
\r
  // Debounced search\r
  useEffect(() => {\r
    const timer = setTimeout(() => {\r
      searchApi(searchTerm);\r
    }, 500);\r
\r
    return () => {\r
      clearTimeout(timer);\r
    };\r
  }, [searchTerm]);\r
\r
  const addTodo = (text) => {\r
    const newTodo = {\r
      id: crypto.randomUUID(),\r
      text,\r
      completed: false,\r
    };\r
\r
    setTodos((currentTodos) => [\r
      ...currentTodos,\r
      newTodo,\r
    ]);\r
  };\r
\r
  const toggleTodo = (id) => {\r
    setTodos((currentTodos) =>\r
      currentTodos.map((todo) =>\r
        todo.id === id\r
          ? {\r
              ...todo,\r
              completed: !todo.completed,\r
            }\r
          : todo\r
      )\r
    );\r
  };\r
\r
  const deleteTodo = (id) => {\r
    setTodos((currentTodos) =>\r
      currentTodos.filter((todo) => todo.id !== id)\r
    );\r
  };\r
\r
  // Derived state\r
  const filteredTodos = todos.filter((todo) => {\r
    const matchesFilter =\r
      filter === "all" ||\r
      (filter === "active" && !todo.completed) ||\r
      (filter === "completed" && todo.completed);\r
\r
    const matchesSearch = todo.text\r
      .toLowerCase()\r
      .includes(searchTerm.toLowerCase());\r
\r
    return matchesFilter && matchesSearch;\r
  });\r
\r
  return (\r
    <div className="todo-app">\r
      <h1>Todo App</h1>\r
\r
      <TodoInput onAddTodo={addTodo} />\r
\r
      <TodoSearch\r
        searchTerm={searchTerm}\r
        onSearchChange={setSearchTerm}\r
      />\r
\r
      <TodoFilter\r
        filter={filter}\r
        onFilterChange={setFilter}\r
      />\r
\r
      <TodoList\r
        filteredTodos={filteredTodos}\r
        onToggleTodo={toggleTodo}\r
        onDeleteTodo={deleteTodo}\r
      />\r
\r
      <TodoFooter todos={todos} />\r
    </div>\r
  );\r
}\r
\r
export default TodoApp;`;export{e as default};