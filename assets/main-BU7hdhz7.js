var e=`// main.jsx\r
// This is superseded by App.jsx, which is the entry point for the product-slice-async topic.\r
import React from "react";\r
import ReactDOM from "react-dom/client";\r
import App from "./App";\r
\r
import { Provider } from "react-redux";\r
import { store } from "./store";\r
\r
ReactDOM.createRoot(document.getElementById("root")).render(\r
  <Provider store={store}>\r
    <App />\r
  </Provider>\r
);`;export{e as default};