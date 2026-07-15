import {
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import ProductList from "./ProductList";
import { products } from "../data/products";


const DeferredSearch = () => {

  const [search, setSearch] =
    useState("");


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

      <h2>
        🔵 useDeferredValue Search
      </h2>


      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search 500000 products..."
      />


      <p>
        Current:
        <strong>
          {" "}
          {search}
        </strong>
      </p>


      <p>
        Deferred:
        <strong>
          {" "}
          {deferredSearch}
        </strong>
      </p>


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


export default DeferredSearch;