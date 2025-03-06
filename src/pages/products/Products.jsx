import React, { useState } from "react";
// import Data from "../../components/data/Data";
import Product from "../../components/product/Product";
import { productdata } from "../../components/data/Data";

function Products() {
  //   const [products] = useState(Data.products);
  const [products] = useState(productdata);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {products.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
}

export default Products;
