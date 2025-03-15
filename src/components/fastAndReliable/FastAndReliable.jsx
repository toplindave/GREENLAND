import React from "react";
import "../../styles/index.scss";
import truckk from "./truck.png";

function FastAndReliable() {
  return (
    <div className="__fast-and-reliable-container">
      <h2 className="__fast-and-reliable-container-h2 sub-title-text font-weight-semi text-normalblack">
        Fast & Reliable Delivery to Any Location – Bringing Convenience to Your
        Doorstep
      </h2>
      <p className="__fast-and-reliable-container-p p-text text-normalblack">
        In today’s fast-paced world, convenience is key. That’s why we offer
        delivery to any location, ensuring you get what you need, when and where
        you need it. Whether you’re at home, the office, or even on the go, our
        efficient delivery service brings your favorite products straight to
        your doorstep.
      </p>
      <div className="__why-greenland-flex-container display-f justify-space-between">
        <div className="__why-greenland-flex-left">
          <h2 className="__why-greenland-h2 text-primary-1 h3-text font-weight-semi">
            Why Greenland Fresh Produce delivery
          </h2>
          <div className="__why-greenland-grid">
            <div className="__why-greenland-flex-card">
              <h4 className="__why-greenland-flex-card-h4 p-text">
                Citywide Coverage
              </h4>
              <p className="__why-greenland-flex-card-p normal-font-text">
                No matter where you are in the city , we’ve got you covered.
              </p>
            </div>
            <div className="__why-greenland-flex-card">
              <h4 className="__why-greenland-flex-card-h4 p-text">
                Fast & Secure
              </h4>
              <p className="__why-greenland-flex-card-p normal-font-text">
                Timely delivery with care and precision.
              </p>
            </div>
            <div className="__why-greenland-flex-card">
              <h4 className="__why-greenland-flex-card-h4 p-text">
                Flexible Options
              </h4>
              <p className="__why-greenland-flex-card-p normal-font-text">
                Choose your preferred time and location.
              </p>
            </div>
            <div className="__why-greenland-flex-card">
              <h4 className="__why-greenland-flex-card-h4 p-text">
                Cheap options
              </h4>
              <p className="__why-greenland-flex-card-p normal-font-text">
                Choose your preferred time and location.
              </p>
            </div>
          </div>
          <h2 className="__delivery-option-h2 text-s-18 text-primary-1">
            Delivery Options
          </h2>
          <div className="__delivery-option-grid">
            <div className="__delivery-option-flex-card">
              <h4 className="__delivery-option-flex-card-h4 p-text">
                1 - hour Delivery
              </h4>
              <p className="__delivery-option-flex-card-p normal-font-text">
                Delivery within an hour after you place an order.
              </p>
            </div>
            <div className="__delivery-option-flex-card">
              <h4 className="__delivery-option-flex-card-h4 p-text">
                2 - hour Delivery
              </h4>
              <p className="__delivery-option-flex-card-p normal-font-text">
                Delivery within 2 hours after you place an order.
              </p>
            </div>
            <div className="__delivery-option-flex-card">
              <h4 className="__delivery-option-flex-card-h4 p-text">
                Next - Day Delivery
              </h4>
              <p className="__delivery-option-flex-card-p normal-font-text">
                Delivery between 10:30 am and noon the next day after you place
                an order.
              </p>
            </div>
            <div className="__delivery-option-flex-card">
              <h4 className="__delivery-option-flex-card-h4 p-text">
                Customized Delivery
              </h4>
              <p className="__delivery-option-flex-card-p normal-font-text">
                Delivery that allows customers to set the time and date to
                receive their order
              </p>
            </div>
          </div>
          <button className="__delivery-option-btn bg-primary-1 text-normalwhite normal-font-text font-weight-semi">
            Order now
          </button>
        </div>
        <div className="__why-greenland-flex-right ">
          <img src={truckk} alt="" className="__why-greenland-flex-right-img" />
        </div>
      </div>
    </div>
  );
}

export default FastAndReliable;
