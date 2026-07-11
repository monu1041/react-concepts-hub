var e=`import ProductList from "./features/products/ProductList";\r
import { store } from "./store";\r
import { Provider } from "react-redux";\r
\r
function App() {\r
  return (\r
    <Provider store={store}>\r
      <div>\r
        <ProductList />\r
      </div>\r
    </Provider>\r
  );\r
}\r
\r
export default App;`;export{e as default};