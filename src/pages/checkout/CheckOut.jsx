import React from "react";
import "../../styles/index.scss";
import Logo from "../../components/navbar/navlogo.png";
import Ugwu from "./Ugu-Global-Food-Village.png";

function CheckOut() {
  return (
    <div className="__checkout-over-container ">
      <div className="__checkout-left bg-normalwhite">
        <div className="__checkout-left-logo-con display-f justify-center">
          <img src={Logo} alt="logo" className="__checkout-logo" />
        </div>
        <h1 className="__checkout-left-h1 sub-title-text text-normalblack">
          Checkout as Guest
        </h1>
        <p className="__checkout-left-p text-normalblack normal-font-text">
          or <span className="__checkout-left-p-span">sign in</span> for faster
          checkout
        </p>
        <form action="" className="__checkout-form">
          <h3 className="__checkout-form-contact-h3 p-text text-normalblack">
            Your Contact Information
          </h3>
          <div className="__checkout-form-contact-name-con display-f justify-space-between">
            <div className="__checkout-form-contact-name-sub-con">
              <p className="__checkout-form-contact-name-label small-text font-weight-semi">
                Name*
              </p>
              <input
                type="text"
                className="__checkout-form-contact-name-input normal-font-text text-primary"
              />
            </div>
            <div className="__checkout-form-contact-name-sub-con">
              <p className="__checkout-form-contact-name-label small-text font-weight-semi">
                Phone Number*
              </p>
              <input
                type="text"
                className="__checkout-form-contact-name-input normal-font-text text-primary"
              />
            </div>
          </div>
          <p className="__checkout-form-contact-name-p small-text text-primary-3">
            Phone number helps ensure package delivery.
          </p>
          <h3 className="__checkout-form-contact-h3 p-text text-normalblack">
            Deliver to
          </h3>
          <div className="__checkout-form-contact-address-sub-con">
            <p className="__checkout-form-contact-address-label small-text font-weight-semi">
              Address*
            </p>
            <input
              type="text"
              className="__checkout-form-contact-address-input normal-font-text text-primary"
            />
          </div>
          <div className="__checkout-form-contact-name-con display-f justify-space-between">
            <div className="__checkout-form-contact-name-sub-con">
              <p className="__checkout-form-contact-name-label small-text font-weight-semi">
                City*
              </p>
              <input
                type="text"
                className="__checkout-form-contact-name-input normal-font-text text-primary"
              />
            </div>
            <div className="__checkout-form-contact-name-sub-con">
              <p className="__checkout-form-contact-name-label small-text font-weight-semi">
                State*
              </p>
              <input
                type="text"
                className="__checkout-form-contact-name-input normal-font-text text-primary"
              />
            </div>
          </div>
          <div className="__checkout-form-contact-comment-sub-con">
            <p className="__checkout-form-contact-comment-label small-text font-weight-semi">
              Description*
              <span className="__checkout-form-contact-comment-label-span font-weight-normal">
                (Please include a popular landmark)
              </span>
            </p>
            <input
              type="text"
              className="__checkout-form-contact-comment-input normal-font-text text-primary"
            />
          </div>
          <p className="__checkout-form-notification-option small-text font-weight-semi">
            Method of Communication/notification*
            <span className="__checkout-form-notification-option-span font-weight-normal">
              (Please include a popular landmark)
            </span>
          </p>
          <div className="__checkout-form-notification-checkbox-con display-f justify-space-between align-center">
            <div className="__checkout-form-notification-checkbox-sub-con display-f align-center ">
              <input
                type="checkbox"
                name="whatsapp"
                id="whatsapp"
                className="__checkout-form-checkbox"
              />
              <label
                htmlFor="whatsapp"
                className="__checkout-form-notification-checkbox-label normal-font-text font-weight-semi text-normalblack">
                Whatsapp
              </label>
            </div>
            <div className="__checkout-form-notification-checkbox-sub-con display-f align-center ">
              <input
                type="checkbox"
                name="email"
                id="email"
                className="__checkout-form-checkbox"
              />
              <label
                htmlFor="email"
                className="__checkout-form-notification-checkbox-label normal-font-text font-weight-semi text-normalblack">
                Email
              </label>
            </div>
          </div>
          <div className="__checkout-form-btn-con display-f justify-center">
            <button className="__checkout-form-btn bg-primary-2 text-normalwhite p-text font-weight-semi">
              ORDER NOW
            </button>
          </div>
        </form>
      </div>
      <div className="__checkout-right bg-white-2">
        <div className="__checkout-product-con display-b">
          <div className="__checkout-product-card display-f justify-space-between align-center">
            <div className="__checkout-product-card-img-container bg-secondary-3">
              <img
                src={Ugwu}
                alt="ugwu"
                className="__checkout-product-card-img"
              />
              <p className="__checkout-card-qty bg-primary-2 small-text font-weight-semi text-normalwhite">
                2
              </p>
            </div>
            <div className="__checkout-product-card-title-con">
              <h4 className="__checkout-product-card-title-h4 normal-font-text font-weight-semi text-normalblack">
                Leafy Green Fresh Ugu Leaves
              </h4>
              <p className="__checkout-product-card-title-p small-text text-normalblack font-weight-semi">
                One bunch
              </p>
            </div>
            <h4 className="__checkout-product-card-price-h4 normal-font-text text-normalblack font-weight-semi">
              #1000.00
            </h4>
          </div>
        </div>
        <form
          action=""
          className="__checkout-discount-form display-f justify-space-between">
          <input
            type="text"
            className="__checkout-discount-input text-normalblack bg-normalwhite normal-font-text font-weight-semi"
            placeholder="Discount Code"
          />
          <button className="__checkout-discount-btn bg-primary-1 text-normalwhite normal-font-text font-weight-semi">
            Apply
          </button>
        </form>
        <div className="__checkout-sub-total display-f justify-space-between align-center">
          <p className="__checkout-sub-total-p normal-font-text text-normalblack ">
            Subtotal
          </p>
          <p className="__checkout-sub-total-price normal-font-text text-normalblack ">
            #1000.00
          </p>
        </div>
        <div className="__checkout-sub-total display-f justify-space-between align-center">
          <p className="__checkout-sub-total-p normal-font-text text-normalblack ">
            Shipping
          </p>
          <p className="__checkout-sub-total-price normal-font-text text-normalblack ">
            #500.00
          </p>
        </div>
        <div className="__checkout-total display-f justify-space-between align-center">
          <p className="__checkout-total-p p-text text-normalblack font-weight-semi">
            Total
          </p>
          <p className="__checkout-total-price p-text text-normalblack font-weight-semi">
            #1500.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
