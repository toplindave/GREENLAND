import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
import CartProduct from "../../components/cartProduct/CartProduct";
import { totalItem, totalPrice } from "../../feature/CartReducer";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.length === 0 ? (
        <p> the shopping cart is empty</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          cart
          <br />
          <br />
          <div
            style={{
              width: "65%",
              background: "#F1F1F1",
            }}
          >
            {cart.map((p) => (
              <CartProduct product={p} />
            ))}
          </div>
          <div
            style={{
              width: "20%",
              background: "#F1F1F1",
            }}
          >
            <h5>Total Items: {totalItem(cart)}</h5>
            <h4>Total price: ${totalPrice(cart)}</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
