import React from "react";
import Ugu from "./Fresh-Ugu-leaf-300x300.jpeg";
import "../../styles/index.scss";

function OrderInformation() {
  return (
    <div className="__order-infomation">
      <div className="__order-infomation-con">
        <div className="__order-infomation-and-date display-f justify-space-between align-center">
          <h4 className="__order-infomation-h4 p-text font-weight-semi text-normalblack">
            INFORMATION
          </h4>
          <p className="__order-infomation-date small-text text-normalblack">
            05-March-2025
          </p>
        </div>
        <div className="__order-infomation-order-id display-f justify-space-between align-center">
          <p className="__order-infomation-order-p normal-font-text text-normalblack">
            Order Id:
          </p>
          <h5 className="__order-infomation-id-h5 normal-font-text text-normalblack font-weight-semi">
            c123rts678567yu899ohh644
          </h5>
        </div>
      </div>
      <div className="__recap-order-con">
        <h3 className="__recap-order-h3 p-text text-normalblack font-weight-semi">
          A RECAP OF YOUR ORDER
        </h3>
        <div className="__recap-order-product-grid-con">
          <div className="__recap-order-product-grid-card">
            <div className="__recap-order-product-grid-card-img-con">
              <img
                src={Ugu}
                alt="productimg"
                className="__recap-order-product-grid-card-img"
              />
              <p className="__recap-order-product-grid-card-qty normal-font-text text-normalwhite font-weight-semi bg-primary-2">
                2
              </p>
            </div>
            <p className="__recap-order-product-grid-card-title small-text font-weight-semi text-normalblack">
              One bunch - Leafy Green Fresh Ugu Leaves
            </p>
          </div>
        </div>
      </div>
      <h6 className="__recap-total-order p-text font-weight-semi text-normalblack">
        TOTAL ORDER
      </h6>
      <div className="__recap-total-item-and-price-con display-f justify-space-between">
        <h2 className="__recap-item-h2 p-text font-weight-medium text-normalblack">
          ITEMS:
          <span className="__recap-item-h2-span font-weight-semi">2</span>
        </h2>
        <h2 className="__recap-item-h2 p-text font-weight-medium text-normalblack">
          COST:
          <span className="__recap-item-h2-span font-weight-semi">#1000</span>
        </h2>
      </div>
    </div>
  );
}

export default OrderInformation;
