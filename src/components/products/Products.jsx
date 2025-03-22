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
        // <div className="__product-card" key={index}>
        //   <div className="__product-card-img-con">
        //     <img src={prod.image} alt="pic" className="__product-card-img" />
        //   </div>
        //   <h1>{prod.title}</h1>
        //   <div className="">
        //     {prod.category.map((pro, index) => (
        //       <div className="d" key={index}>
        //         {pro.title} {pro.price}
        //       </div>
        //     ))}
        //   </div>
        // </div>
      ))}
    </div>
  );
}

export default Products;
