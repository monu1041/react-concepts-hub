// components/ProductList.jsx

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product"
        >
          <strong>{product.name}</strong>

          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;