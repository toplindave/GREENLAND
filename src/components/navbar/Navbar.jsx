import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../feature/CartContextProvider";
import NavLogo from "./navlogo.png";
import "../../styles/index.scss";
import { ReactComponent as Browse } from "./browse.svg";
import { ReactComponent as Flame } from "./flame.svg";
import Cart from "../../pages/cart/Cart";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [showCart, setShowcart] = useState(false);
  function displayCart() {
    setShowcart((prev) => !prev);
  }
  console.log(showCart);
  return (
    <>
      <div className=" __navbarr  ">
        <div className="__nav-upper display-f justify-space-between align-center container">
          <Link to="/" className="__nav-logo">
            <img src={NavLogo} alt="navigation logo" />
          </Link>
          <input
            type="text"
            placeholder="Search for products (e.g. Efo, Ewedu)"
            className="__search-input text-normalblack small-text font-weight-normal"
          />
          <button className="__basket display-f" onClick={displayCart}>
            <h3 className=" p-text font-weight-semi">Basket</h3>
            <span className="__basket-span bg-secondary-info text-white-1 smallest-text">
              {cart.length}
            </span>
          </button>
        </div>
        <div className="__nav-down display-f justify-space-between align-center container">
          <button className="__browse-all-product bg-primary display-f  align-center">
            <Browse />
            <p className="text-white-1 font-weight-medium normal-font-text">
              Browse All Products
            </p>
          </button>
          <div className="__navigation display-f justify-space-between align-center font-weight-semi p-text">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/">Instant delivery</NavLink>
            <NavLink to="/">Wholesale program</NavLink>
          </div>
          <button className="__hot-deal bg-secondary-peach text-secondary-info display-f align-center small-text">
            <Flame />
            <p>Hot Deals</p>
          </button>
        </div>
      </div>
      {showCart ? <Cart displayCart={displayCart} /> : null}
    </>
  );
}

export default Navbar;
