import React, { useContext } from "react";
import { CartContext } from "../../feature/CartContextProvider";
// import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="__product-container">
      <div className="__product-img-container">
        <img src={product.image} alt="" className="__product-img" />
      </div>
      <div className="__product-dowm-sec">
        <div className="__product-dowm-sec-tile">
          <h5 className="__product-dowm-sec-tile-h5 text-s-18  text-normalblack font-weight-semi">
            {product.title}
          </h5>
          <div className="__product-dowm-sec-category-con display-f ">
            {product.category.map((pro, index) => (
              <div
                className="__product-dowm-sec-category display-f justify-space-between align-center bg-secondary-3"
                key={index}>
                <p className="__product-dowm-sec-category-title text-normalblack small-text font-weight-semi">
                  {pro.title}
                </p>
                <p className="__product-dowm-sec-category-price text-secondary-info smallest-text">
                  #{pro.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <Link to={`/${product.id}`}> view product</Link> */}
      </div>
      <button
        onClick={() => dispatch({ type: "Add", product: product })}
        className="__product-card-btn bg-primary-2 text-normalwhite p-text">
        Add to cart
      </button>
      {/* <br /> */}
      {/* <p>{product.description} </p> */}
      {/* <h6>{product.price}</h6> */}
    </div>
  );
}

export default Product;
