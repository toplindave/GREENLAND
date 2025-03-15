import React, { useState } from "react";
// import Data from "../../components/data/Data";
import Product from "../product/Product";
import { productdata } from "../data/Data";
import "../../styles/index.scss";

function Products() {
  //   const [products] = useState(Data.products);
  const [products] = useState(productdata);
  return (
    <div className="__products-container">
      {products.map((prod, index) => (
        <Product product={prod} key={index} />
      ))}
    </div>
  );
}

export default Products;
