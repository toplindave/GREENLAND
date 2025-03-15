import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
import CartProduct from "../../components/cartProduct/CartProduct";
// import { totalItem, totalPrice } from "../../feature/CartReducer";
import "../../styles/index.scss";

function Cart({ displayCart }) {
  const { cart } = useContext(CartContext);

  return (
    <div className="__cart-container display-f">
      <div className="__cart-left"></div>
      <div className="__cart-right bg-primary-2">
        <div className="__cart-basket-header-con display-f justify-space-between align-center">
          <h3 className="__cart-basket-h3 text-s-18 font-weight-semi text-normalwhite">
            BASKET
          </h3>
          <p
            className="__cart-basket-cancel-btn text-normalwhite"
            onClick={displayCart}>
            X
          </p>
        </div>
        {cart.length === 0 ? (
          <p className="__empty-cart text-normalwhite sub-title-text font-weight-semi ">
            The shopping cart is empty
          </p>
        ) : (
          <div className="__cart-product-con">
            {cart.map((p) => (
              <CartProduct product={p} />
            ))}

            {/* <div>
              <h5>Total Items: {totalItem(cart)}</h5>
              <h4>Total price: ${totalPrice(cart)}</h4>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
