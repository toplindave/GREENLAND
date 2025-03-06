import React from "react";
import { useParams } from "react-router-dom";
// import products from "../../components/data/Data";
import { productdata } from "../../components/data/Data";

function ProductDetails() {
  const { productId } = useParams();
  //   const thisProduct = productdata.find((prod) => prod.id === productId);
  //   const thisProduct = productdata;
  const { id, price, quantity, title } = productdata;
  console.log(price, 1);
  //   console.log(productId, 5);
  return (
    <div>
      {/* <p>user is {thisProduct.id}</p> */}

      <p></p>
    </div>
  );
}

export default ProductDetails;
