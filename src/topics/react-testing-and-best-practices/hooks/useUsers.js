import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 2,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        {
          id: 3,
          name: "Charlie Brown",
          email: "charlie@example.com",
        },
      ]);

      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return {
    users,
    loading,
  };
}