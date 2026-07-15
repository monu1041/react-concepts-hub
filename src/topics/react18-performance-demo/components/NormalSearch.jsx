import { useMemo, useState } from "react";

import ProductList from "./ProductList";
import { products } from "../data/products";


const NormalSearch = () => {

  const [search, setSearch] = useState("");


  const filteredProducts = useMemo(() => {

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  }, [search]);



  return (

    <div className="section">

      <h2>
        🔴 Normal Search
      </h2>


      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search 500000 products..."
      />


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


export default NormalSearch;