import { React, useState } from "react";
import "../../styles/index.scss";
import CustomerInput from "../../components/customerInput/CustomerInput";
import Logo from "./becomeLogo.png";
import GrassField from "./grassfield.png";

function BecomeCustomer() {
  const [nextPage, setNextpage] = useState(true);

  function next() {
    setNextpage((prev) => !prev);
  }
  return (
    <div className="__become-customer-page display-f">
      <div className="__become-customer-left ">
        <img
          src={GrassField}
          alt="field"
          className="__become-customer-back-img"
        />
        <div className="__become-customer-left-text-overlay">
          <div className="__become-customer-overlay-img-con display-f justify-center">
            <img
              src={Logo}
              alt="logo"
              className="__become-customer-overlay-img"
            />
          </div>
          <h3 className="__become-customer-overlay-h3 text-s-18 text-normalwhite font-weight-semi">
            Customer Registration
          </h3>
          <h4 className="__become-customer-overlay-h4 p-text text-normalwhite font-weight-semi">
            Tell Us About Your Business
          </h4>
          <p className="__become-customer-overlay-p normal-font-text text-normalwhite">
            To optimize your Greenland experience, we use your business
            information to identify your best point of contact and how you
            anticipate engaging with the full breadth of Greenland services.
          </p>
        </div>
      </div>
      {nextPage ? (
        <div className="__become-customer-right">
          <form action="" className="__become-customer-form">
            <div className="__become-customer-select-con">
              <p className="__become-customer-select-p text-normalblack small-text">
                Are you the primary contact? *
              </p>
              <select name="" id="" className="__become-customer-select">
                <option value="" className="__become-customer-select"></option>
                <option value="" className="__become-customer-select">
                  yes
                </option>
                <option value="" className="__become-customer-select">
                  no
                </option>
              </select>
              <div className="__become-customer-contact-h3-con display-f justify-space-between align-center">
                <h3 className="__become-customer-contact-h3 p-text text-normalblack">
                  Your Contact Information
                </h3>
                <div className="__become-customer-contact-line bg-primary"></div>
              </div>
              <div className="__become-customer-form-name-con display-f justify-space-between">
                <div className="__become-customer-form-name-input-con">
                  <p className="__become-customer-form-name-input-label  small-text font-weight-semi text-normalblack">
                    First Name*
                  </p>
                  <input
                    type="text"
                    className="__become-customer-form-name-input text-primary"
                  />
                </div>
                <div className="__become-customer-form-name-input-con">
                  <p className="__become-customer-form-name-input-label  small-text font-weight-semi text-normalblack">
                    Last Name*
                  </p>
                  <input
                    type="text"
                    className="__become-customer-form-name-input text-primary"
                  />
                </div>
              </div>
              <CustomerInput inputLabel={" Phone* "} />
              <CustomerInput inputLabel={" Email*"} />
              <div className="__become-customer-address-h3-con display-f justify-space-between align-center">
                <h3 className="__become-customer-address-h3 p-text text-normalblack">
                  Business Address
                </h3>
                <div className="__become-customer-address-line bg-primary"></div>
              </div>
              <CustomerInput inputLabel={"Street Address*"} />
            </div>
            <div className="__become-customer-form-name-con display-f justify-space-between">
              <div className="__become-customer-form-name-input-con">
                <p className="__become-customer-form-name-input-label  small-text font-weight-semi text-normalblack">
                  City*
                </p>
                <input
                  type="text"
                  className="__become-customer-form-name-input text-primary"
                />
              </div>
              <div className="__become-customer-form-name-input-con">
                <p className="__become-customer-form-name-input-label  small-text font-weight-semi text-normalblack">
                  State*
                </p>
                <input
                  type="text"
                  className="__become-customer-form-name-input text-primary"
                />
              </div>
            </div>
            <div className="__become-customer-btn-con bg-white-1 display-f justify-space-around">
              <button className="__become-customer-btn small-text text-secondary-info bg-secondary-peach font-weight-semi">
                Cancel
              </button>
              <button
                className="__become-customer-btn small-text text-normalwhite bg-primary-1 font-weight-semi"
                onClick={next}>
                Next
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="__become-customer-next-con display-f justify-center align-center">
          <div className="__become-customer-next-sub-con">
            <h3 className="__become-customer-next-h3 text-primary-1 sub-title-text font-weight-semi">
              Welcome to Greenland!
            </h3>
            <p className="__become-customer-next-p text-normalblack p-text">
              A link has been sent to your email. Please, follow this link to
              create a password for your account
            </p>
            <div className="__become-customer-next-btn-con display-f justify-center">
              <button className="__become-customer-next-btn bg-primary-2 text-normalwhite p-text font-weight-semi">
                Explore our products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BecomeCustomer;
