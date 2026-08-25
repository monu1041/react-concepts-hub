function TodoSearch({
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="todo-search">
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(event) => {
          onSearchChange(event.target.value);
        }}
      />
    </div>
  );
}

export default TodoSearch;