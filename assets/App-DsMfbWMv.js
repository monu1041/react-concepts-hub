var e=`import { lazy, Suspense, useState } from "react";\r
\r
import Spinner from "./components/Spinner";\r
\r
import NormalSearch from "./components/NormalSearch";\r
import TransitionSearch from "./components/TransitionSearch";\r
import DeferredSearch from "./components/DeferredSearch";\r
\r
const Dashboard = lazy(() => import("./components/Dashboard"));\r
\r
function App() {\r
  const [showDashboard, setShowDashboard] = useState(false);\r
\r
  return (\r
    <div className="react18-demo">\r
      <div className="container">\r
\r
        <NormalSearch />\r
\r
        <TransitionSearch />\r
\r
        <DeferredSearch />\r
\r
        <hr />\r
\r
        <button\r
          className="dashboard-btn"\r
          onClick={() => setShowDashboard(true)}\r
        >\r
          Load Dashboard\r
        </button>\r
\r
        {showDashboard && (\r
          <Suspense fallback={<Spinner />}>\r
            <Dashboard />\r
          </Suspense>\r
        )}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default App;`;export{e as default};