// components/ClientWrapper.jsx
"use client";

import { useState } from "react";

export default function ClientWrapper({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid #0070f3", padding: "1rem", borderRadius: "8px" }}>
      <h3>⚡ I am a Client Component</h3>
      <button onClick={() => setCount(count + 1)}>
        Client State Count: {count}
      </button>
      
      <div style={{ marginTop: "1rem" }}>
        {children}
      </div>
    </div>
  );
}