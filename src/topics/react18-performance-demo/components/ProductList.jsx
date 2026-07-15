const ProductList = ({ products }) => {

  return (
    <div className="product-list">

      <p>
        Rendering:
        <strong> {Math.min(products.length, 100)} </strong>
        of
        <strong> {products.length} </strong>
        results
      </p>


      {products
        .slice(0, 100)
        .map((product) => (

          <div
            key={product.id}
            className="product"
          >

            <strong>
              {product.name}
            </strong>

            <p>
              ${product.price}
            </p>

          </div>

      ))}

    </div>
  );
};


export default ProductList;