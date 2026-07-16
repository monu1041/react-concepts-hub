const ProductList = ({ products }) => {

  return (
    <div>
      <p>
        Rendering:
        <strong> {Math.min(products.length, 100)} </strong>
        of
        <strong> {products.length} </strong>
        results
      </p>

      <div className="product-list" style={{
        height: '400px',
        overflowY: 'auto',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '4px'
      }}>
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

    </div>
  );
};


export default ProductList;