import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
// import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  console.log(product);
  return (
    <div className="__product-container">
      <div className="__product-img-container">
        <img src={product.image} alt="" className="" />
      </div>
      <div className="__product-dowm-sec">
        <div className="__product-dowm-sec-tile">
          <h5>{product.title}</h5>
          <div className="__product-dowm-sec-category"></div>
        </div>
        {/* <Link to={`/${product.id}`}> view product</Link> */}
        <button onClick={() => dispatch({ type: "Add", product: product })}>
          Add to cart
        </button>
      </div>
      {/* <br /> */}
      {/* <p>{product.description} </p> */}
      {/* <h6>{product.price}</h6> */}
    </div>
  );
}

export default Product;
