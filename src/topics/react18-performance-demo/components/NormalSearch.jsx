// components/NormalSearch.jsx

import { useMemo, useState } from "react";
import ProductList from "./ProductList";
import { generateProducts } from "../data/generateProducts";

const products = generateProducts();

const NormalSearch = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="section">
      <h2>Normal Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>
        Showing {filteredProducts.length} products
      </p>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default NormalSearch;