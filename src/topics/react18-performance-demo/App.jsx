import { lazy, Suspense, useState } from "react";

import Spinner from "./components/Spinner";

import NormalSearch from "./components/NormalSearch";
import TransitionSearch from "./components/TransitionSearch";
import DeferredSearch from "./components/DeferredSearch";

const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="react18-demo">
      <div className="container">

        <NormalSearch />

        <TransitionSearch />

        <DeferredSearch />

        <hr />

        <button
          className="dashboard-btn"
          onClick={() => setShowDashboard(true)}
        >
          Load Dashboard
        </button>

        {showDashboard && (
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;