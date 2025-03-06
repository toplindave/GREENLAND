import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <div
      style={{
        background: "#F1F1F1",
        color: "black",
        textAlign: "center",
      }}
    >
      <h5>{product.title}</h5>
      <br />
      <p>{product.description} </p>
      <h6>{product.price}</h6>

      <br />
      <br />
      <br />
      <br />
      <Link to={`/${product.id}`}> view product</Link>
      <button onClick={() => dispatch({ type: "Add", product: product })}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
