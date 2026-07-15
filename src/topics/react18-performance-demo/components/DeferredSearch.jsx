// components/DeferredSearch.jsx

import {
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import ProductList from "./ProductList";
import { generateProducts } from "../data/generateProducts";

const products = generateProducts();

const DeferredSearch = () => {
  const [search, setSearch] = useState("");

  const deferredSearch =
    useDeferredValue(search);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          deferredSearch.toLowerCase()
        )
    );
  }, [deferredSearch]);

  return (
    <div className="section">
      <h2>Search using useDeferredValue</h2>

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search..."
      />

      <p>
        Showing {filteredProducts.length} products
      </p>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default DeferredSearch;