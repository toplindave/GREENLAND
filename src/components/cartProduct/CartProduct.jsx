import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";

function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  return (
    <div>
      <h5>{product.title}</h5>
      <br />
      <h6>${product.price}</h6>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
        }}
      >
        <button onClick={() => Decrease(product.id)}>-</button>
        <button>{product.quantity}</button>
        <button onClick={() => Increase(product.id)}>+</button>
      </div>
      <br />
      <button onClick={() => dispatch({ type: "Remove", id: product.id })}>
        remove
      </button>
    </div>
  );
}

export default CartProduct;
