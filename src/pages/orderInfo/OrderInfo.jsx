import React from "react";
import "../../styles/index.scss";
import Logo from "../../components/navbar/navlogo.png";
import OrderInformation from "../../components/orderinformation/OrderInformation";

function OrderInfo() {
  return (
    <div className="__order-info-container">
      <div className="__order-info-logo-con display-f justify-center">
        <img src={Logo} alt="logo" className="__order-info-logo" />
      </div>
      <OrderInformation />
    </div>
  );
}

export default OrderInfo;
