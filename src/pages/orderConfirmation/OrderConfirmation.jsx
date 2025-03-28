import React from "react";
import Logo from "../../components/navbar/navlogo.png";
import OrderInformation from "../../components/orderinformation/OrderInformation";
import "../../styles/index.scss";

function OrderConfirmation() {
  return (
    <div className="__order-confirmation-con">
      <div className="__order-confirmation-logo-con display-f justify-center">
        <img src={Logo} alt="logo" className="__order-confirmation-logo" />
      </div>
      <h4 className="__order-confirmation-customer p-text text-primary-1 font-weight-semi">
        DEAR CUSTOMER
      </h4>
      <div className="__order-confirmation-received-con display-f justify-center">
        <div className="__order-confirmation-received-sub-con">
          <h3 className="__order-confirmation-received-h3 sub-title-text text-primary-2 font-weight-semi">
            WE RECEIVED YOUR ORDER
          </h3>
          <p className="__order-confirmation-received-p text-primary-3 normal-font-text">
            Your order will be delivered to you in 1 hour
          </p>
        </div>
      </div>
      <div className="__order-com-container-infomation-con display-f align-center justify-center">
        <div className="__order-com-container-infomation">
          <OrderInformation />
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
