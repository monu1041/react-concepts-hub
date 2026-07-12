var e=`import { Provider } from "react-redux";\r
import { store } from "./app/store";\r
import Notification from "./features/notifications/Notification";\r
\r
function App() {\r
  return (\r
    <Provider store={store}>\r
      <Notification />\r
    </Provider>\r
  );\r
}\r
\r
export default App;`;export{e as default};