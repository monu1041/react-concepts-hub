import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

import { useUsers } from "../hooks/useUsers";

function Dashboard() {
  const { users, loading } =
    useUsers();

  const [search, setSearch] =
    useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      )}
    </>
  );
}

export default Dashboard;