import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../feature/CartContextProvider";
import NavLogo from "../../components/navbar/navlogo.png";
import Cart from "../cart/Cart";
import "../../styles/index.scss";
import { productdata } from "../../components/data/Data";
import Ugwu from "../../pages/checkout/Ugu-Global-Food-Village.png";
import Footer from "../../components/footer/Footer";

function CustomerDiscount() {
  const { cart } = useContext(CartContext);
  const [showCart, setShowcart] = useState(false);
  function displayCart() {
    setShowcart((prev) => !prev);
  }
  return (
    <div className="__discount-customer">
      <div className="__discount-nav">
        <div className="__nav-upper-discount display-f justify-space-between align-center container">
          <Link to="/" className="__nav-logo">
            <img src={NavLogo} alt="navigation logo" />
          </Link>
          <input
            type="text"
            placeholder="Search for products (e.g. Efo, Ewedu)"
            className="__search-input text-normalblack small-text font-weight-normal"
          />
          <div className="__basket display-f" onClick={displayCart}>
            <h3 className=" p-text font-weight-semi">Basket</h3>
            <span className="__basket-span bg-secondary-info text-white-1 smallest-text">
              {cart.length}
            </span>
          </div>
        </div>
        <div className="__nav-down-discount-con display-f justify-flex-end container">
          <div className="__nav-down-discount display-f justify-space-between">
            <Link className="__nav-down-discount-signin text-normalblack normal-font-text font-weight-semi">
              Sign in
            </Link>
            <Link className="__nav-down-discount-become-cus text-primary-1 normal-font-text  font-weight-semi">
              Become a customer
            </Link>
          </div>
        </div>
      </div>
      <div className="__discount-customer-product container">
        <h1 className="__discount-customer-h1 sub-title-text font-weight-semi text-normalblack ">
          Products
        </h1>
        <div className="__discount-customer-product-grid-con">
          {productdata.map((prod) => (
            <div className="__discount-customer-product-card" key={prod.id}>
              <div className="__discount-customer-product-card-img-con display-f justify-center">
                <div className="__discount-customer-product-card-img-sub-con">
                  <img
                    src={Ugwu}
                    alt="pic"
                    className="__discount-customer-product-card-img"
                  />
                </div>
              </div>
              <h2 className="__discount-customer-product-card-h2 p-text font-weight-semi text-normalblack">
                {prod.title}
              </h2>
              <div className="__discount-customer-product-card-select-con display-f justify-center">
                <select
                  name=""
                  id=""
                  className="__discount-customer-product-card-select small-text text-normalblack">
                  <option value="" className=" small-text text-normalblack">
                    bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    2 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    3 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    4 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    5 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    6 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    7 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    8 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    9 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    {" "}
                    10 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    {" "}
                    11 &times; 1bunch
                  </option>
                  <option value="" className=" small-text text-normalblack">
                    {" "}
                    12 &times; 1bunch
                  </option>
                </select>
              </div>
              <h1 className="__discount-customer-product-card-price-h1 text-secondary-info font-weight-semi text-s-18">
                #5400
              </h1>
              <button className="__discount-customer-product-card-btn bg-primary-2 text-normalwhite normal-font-text font-weight-semi">
                Add to basket
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {showCart ? <Cart displayCart={displayCart} /> : null}
    </div>
  );
}

export default CustomerDiscount;
