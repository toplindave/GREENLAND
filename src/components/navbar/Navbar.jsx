import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../feature/CartContextProvider";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Link to="/">Shop</Link>
      <br />
      <br />
      <br />
      <Link to="/cart">cart {cart.length}</Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Navbar;
