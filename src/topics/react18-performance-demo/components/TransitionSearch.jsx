import {
  useMemo,
  useState,
  useTransition,
} from "react";

import ProductList from "./ProductList";
import { products } from "../data/products";


const TransitionSearch = () => {

  const [search, setSearch] =
    useState("");

  const [query, setQuery] =
    useState("");


  const [
    isPending,
    startTransition
  ] = useTransition();



  const filteredProducts = useMemo(() => {

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  }, [query]);



  const handleChange = (e) => {

    const value = e.target.value;


    // Immediate update
    setSearch(value);


    // Low priority update
    startTransition(() => {

      setQuery(value);

    });

  };



  return (

    <div className="section">

      <h2>
        🟢 useTransition Search
      </h2>


      <input
        value={search}
        onChange={handleChange}
        placeholder="Search 500000 products..."
      />


      {
        isPending &&
        <p>
          Filtering...
        </p>
      }


      <p>
        Results:
        <strong>
          {" "}
          {filteredProducts.length}
        </strong>
      </p>


      <ProductList
        products={filteredProducts}
      />


    </div>

  );
};


export default TransitionSearch;