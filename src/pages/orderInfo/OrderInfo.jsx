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
      <div className="__order-info-container-infomation-con display-f align-center justify-center">
        <div className="__order-info-container-infomation">
          <OrderInformation />
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
