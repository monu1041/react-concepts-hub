var e=`function TodoFilter({\r
  filter,\r
  onFilterChange,\r
}) {\r
  return (\r
    <div className="todo-filter">\r
      <button\r
        className={filter === "all" ? "active" : ""}\r
        onClick={() => onFilterChange("all")}\r
      >\r
        All\r
      </button>\r
\r
      <button\r
        className={filter === "active" ? "active" : ""}\r
        onClick={() => onFilterChange("active")}\r
      >\r
        Active\r
      </button>\r
\r
      <button\r
        className={filter === "completed" ? "active" : ""}\r
        onClick={() => onFilterChange("completed")}\r
      >\r
        Completed\r
      </button>\r
    </div>\r
  );\r
}\r
\r
export default TodoFilter;`;export{e as default};