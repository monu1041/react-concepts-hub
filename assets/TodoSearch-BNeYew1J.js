var e=`function TodoSearch({\r
  searchTerm,\r
  onSearchChange,\r
}) {\r
  return (\r
    <div className="todo-search">\r
      <input\r
        type="text"\r
        placeholder="Search todos..."\r
        value={searchTerm}\r
        onChange={(event) => {\r
          onSearchChange(event.target.value);\r
        }}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default TodoSearch;`;export{e as default};