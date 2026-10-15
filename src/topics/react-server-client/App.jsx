// app.jsx (Server Component)
import ClientWrapper from "./components/ClientWrapper";
import ServerChild from "./components/ServerChild";

export default function RscDemo() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Server-to-Client Composition Demo</h1>
      <p>This page demonstrates passing a Server Component into a Client Component.</p>
      
      <ClientWrapper>
        <ServerChild />
      </ClientWrapper>
    </div>
  );
}