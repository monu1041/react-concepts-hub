function SearchBar({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      aria-label="Search users"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;