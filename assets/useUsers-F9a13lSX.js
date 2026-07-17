var e=`import { useEffect, useState } from "react";\r
\r
export function useUsers() {\r
  const [users, setUsers] = useState([]);\r
  const [loading, setLoading] = useState(true);\r
\r
  useEffect(() => {\r
    const timer = setTimeout(() => {\r
      setUsers([\r
        {\r
          id: 1,\r
          name: "Alice Johnson",\r
          email: "alice@example.com",\r
        },\r
        {\r
          id: 2,\r
          name: "Bob Smith",\r
          email: "bob@example.com",\r
        },\r
        {\r
          id: 3,\r
          name: "Charlie Brown",\r
          email: "charlie@example.com",\r
        },\r
      ]);\r
\r
      setLoading(false);\r
    }, 800);\r
\r
    return () => clearTimeout(timer);\r
  }, []);\r
\r
  return {\r
    users,\r
    loading,\r
  };\r
}`;export{e as default};