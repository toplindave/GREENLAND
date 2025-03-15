import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
import "../../styles/index.scss";

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
    <div className="__cart-product-card display-f justify-space-between">
      <div className="__cart-product-card-img-con">
        {/* <img
          src={product.image}
          alt="img"
          className="__cart-product-card-img"
        /> */}
      </div>
      <div className="__cart-product-card-details">
        <h3 className="__cart-product-card-detail-h3 p-text font-weight-semi text-normalwhite">
          {product.title}
        </h3>
        <p className="__cart-product-card-detail-p normal-font-text text-normalwhite">
          One Bunch
        </p>
        <p className="__cart-product-card-detail-price normal-font-text text-normalwhite font-weight-semi">
          #{product.price}
        </p>
        <div className="__cart-product-card-detail-qty-and-remove-con display-f ">
          <div className="__cart-product-card-detail-qty-con display-f justify-space-between align-center">
            <button
              onClick={() => Decrease(product.id)}
              className="__cart-product-card-detail-qty-btn text-normalwhite title-text font-weight-semi">
              -
            </button>
            <button className="__cart-product-card-detail-qty-btn text-normalwhite normal-font-text font-weight-semi">
              {product.quantity}
            </button>
            <button
              onClick={() => Increase(product.id)}
              className="__cart-product-card-detail-qty-btn text-normalwhite h3-text font-weight-semi">
              +
            </button>
          </div>
          <button
            onClick={() => dispatch({ type: "Remove", id: product.id })}
            className="__cart-product-card-detail-remove-btn text-normalwhite small-text ">
            REMOVE
          </button>
        </div>
      </div>
      <h2 className="__cart-product-card-total-price p-text font-weight-semi text-normalwhite">
        #10000
      </h2>
      {/* <h5>{product.title}</h5>

      <h6>${product.price}</h6> */}
      {/* <div>
      </div>
      <br />
     */}
    </div>
  );
}

export default CartProduct;
