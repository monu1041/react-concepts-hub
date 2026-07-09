import { useDispatch, useSelector } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <h2>Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} × {item.quantity} - ₹{item.price * item.quantity}
          </span>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
          
          <button 
           onClick={() => dispatch(incrementQuantity(item.id))}
          > 
            +
          </button>
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
          >
            -
          </button>
        </div>
      ))}

      <h3>
        Total Items:{" "}
        {items.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      </h3>
      <h3>
        Total Price: ₹
        { items.reduce((total, item) => total + (item.price * item.quantity), 0) }
      </h3>
    </>
  );
  
}

export default Cart;