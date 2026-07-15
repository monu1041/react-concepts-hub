// components/TransitionSearch.jsx

import {
  useMemo,
  useState,
  useTransition,
} from "react";

import ProductList from "./ProductList";
import Spinner from "./Spinner";
import { generateProducts } from "../data/generateProducts";

const products = generateProducts();

const TransitionSearch = () => {
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  const [isPending, startTransition] =
    useTransition();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Urgent
    setSearch(value);

    // Non-Urgent
    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div className="section">
      <h2>Search using useTransition</h2>

      <input
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />

      {isPending && <Spinner />}

      <p>
        Showing {filteredProducts.length} products
      </p>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default TransitionSearch;