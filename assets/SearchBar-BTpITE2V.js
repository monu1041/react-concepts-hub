var e=`function SearchBar({\r
  search,\r
  setSearch,\r
}) {\r
  return (\r
    <input\r
      type="text"\r
      placeholder="Search users..."\r
      aria-label="Search users"\r
      value={search}\r
      onChange={(e) =>\r
        setSearch(e.target.value)\r
      }\r
    />\r
  );\r
}\r
\r
export default SearchBar;`;export{e as default};