import ProductList from "./features/products/ProductList";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;