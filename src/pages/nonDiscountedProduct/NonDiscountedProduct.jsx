import React, { useContext } from "react";
import "../../styles/index.scss";
import { productdata } from "../../components/data/Data";
// import Product from "../../components/product/Product";
import { CartContext } from "../../feature/CartContextProvider";

function NonDiscountedProduct() {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="__non-discounted-con container">
      <h1 className="__non-discounted-h1 text-normalblack font-weight-semi sub-title-text">
        Products
      </h1>
      <div className="__non-discounted-grid-con">
        {productdata.map((prod) => (
          <div className="__product-container  " key={prod.id}>
            <div className="__product-img-container">
              <img src={prod.image} alt="" className="__product-img" />
            </div>
            <div className="__product-dowm-sec">
              <div className="__product-dowm-sec-tile">
                <h5 className="__product-dowm-sec-tile-h5 text-s-18  text-normalblack font-weight-semi">
                  {prod.title}
                </h5>
                <div className="__product-dowm-sec-category-con display-f ">
                  {prod.category.map((pro, index) => (
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
              onClick={() => dispatch({ type: "Add", product: prod })}
              className="__product-card-btn bg-primary-2 text-normalwhite p-text">
              Add to cart
            </button>
            {/* <br /> */}
            {/* <p>{product.description} </p> */}
            {/* <h6>{product.price}</h6> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonDiscountedProduct;
