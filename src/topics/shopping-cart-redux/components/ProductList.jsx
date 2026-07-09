import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Mouse", price: 1000 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ₹{product.price}
          </span>

          <button
            onClick={() => dispatch(addItem(product))}
          >
            Add
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;