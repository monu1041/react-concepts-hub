var e=`import { useMemo, useState } from "react";\r
\r
import SearchBar from "./SearchBar";\r
import UserCard from "./UserCard";\r
\r
import { useUsers } from "../hooks/useUsers";\r
\r
function Dashboard() {\r
  const { users, loading } =\r
    useUsers();\r
\r
  const [search, setSearch] =\r
    useState("");\r
\r
  const filteredUsers = useMemo(() => {\r
    return users.filter((user) =>\r
      user.name\r
        .toLowerCase()\r
        .includes(search.toLowerCase())\r
    );\r
  }, [users, search]);\r
\r
  if (loading) {\r
    return <p>Loading users...</p>;\r
  }\r
\r
  return (\r
    <>\r
      <SearchBar\r
        search={search}\r
        setSearch={setSearch}\r
      />\r
\r
      {filteredUsers.length === 0 ? (\r
        <p>No users found.</p>\r
      ) : (\r
        filteredUsers.map((user) => (\r
          <UserCard\r
            key={user.id}\r
            user={user}\r
          />\r
        ))\r
      )}\r
    </>\r
  );\r
}\r
\r
export default Dashboard;`;export{e as default};