import React from "react";
import "../../styles/index.scss";
import { wholeSaleData } from "../data/WholeSaleCardData";

function GreenlandWholesale() {
  return (
    <div className="__greenland-Wholesale-container bg-secondary">
      <h2 className="__greenland-Wholesale-h2 sub-title-text font-weight-semi">
        Greenland Wholesale program
      </h2>
      <p className="__greenland-Wholesale-p p-text font-weight-normal">
        The Greenland wholesale program gives your business convenient access to
        safe, healthy and tasty food from local, diverse farmers. Enjoy access
        to beautiful produce ranging from familiar favorites to culturally
        specific specialties knowing every purchase helps farmers achieve and
        sustain economic well-being.
      </p>
      <h1 className="__greenland-Wholesale-h1 text-primary-1 h3-text">
        Why Green Garden wholesale program
      </h1>
      <div className="_greenland-Wholesale-grid-sec display-f justify-space-between">
        <div className="_greenland-Wholesale-grid">
          {wholeSaleData.map((whole) => (
            <div className="_greenland-Wholesale-grid-card" key={whole.id}>
              <h4 className="_greenland-Wholesale-grid-card-h4 text-primary-1 text-s-18 font-weight-semi">
                {whole.title}
              </h4>
              <p className="_greenland-Wholesale-grid-card-p normal-font-text text-normalblack">
                {whole.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="__become-customer-container bg-primary">
          <h4 className="__become-customer-h4 sub-title-text text-normalwhite font-weight-semi">
            Let's create a strong relationship today.
          </h4>
          <h3 className="__become-customer-h3 sub-title-text text-normalblack font-weight-semi">
            Become a Customer
          </h3>
          <div className="__become-customer-btn-container display-f justify-center align-center">
            <button className="__become-customer-btn  bg-white-3 text-primary-2 p-text font-weight-semi">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenlandWholesale;
