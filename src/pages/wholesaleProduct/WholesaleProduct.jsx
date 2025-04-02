import React from "react";
import "../../styles/index.scss";
import { wholeSaleProductFaq } from "../../components/data/WholeSaleProduct";
import FaqDropDown from "../../components/faqdropdown/FaqDropDown";

function WholesaleProduct() {
  return (
    <div className="__wholesale-product-con container">
      <div className="__wholesale-product-intro">
        <h1 className="__wholesale-product-h1 contact-header text-normalblack font-weight-medium">
          Greenland Wholesale program
        </h1>
        <p className="__wholesale-product-p p-text text-normalblack">
          The Greenland wholesale program gives your business convenient access
          to safe, healthy and tasty food from local, diverse farmers. Enjoy
          access to beautiful produce ranging from familiar favorites to
          culturally specific specialties knowing every purchase helps farmers
          achieve and sustain economic well-being.
        </p>
        <button className="__wholesale-product-intro-btn bg-primary-1 p-text text-normalwhite">
          Get Started
        </button>
      </div>
      <div className="__why-whole-sale-con display-f justify-space-between">
        <h1 className="__why-whole-sale-h1 contact-header text-primary-1 font-weight-semi ">
          Why Green Garden wholesale program
        </h1>
        <div className="__why-whole-sale-faq-con">
          {wholeSaleProductFaq.map((faq) => (
            <FaqDropDown faq={faq} />
          ))}
          <div className="__get-started-btn-con display-f justify-center">
            <button className="__get-started-btn bg-primary-1 text-normalwhite p-text font-weight-semi">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WholesaleProduct;
