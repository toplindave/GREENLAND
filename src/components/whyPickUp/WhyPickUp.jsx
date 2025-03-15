import React from "react";
import "../../styles/index.scss";
function WhyPickUp() {
  return (
    <div className="__whypickup-container bg-secondary">
      <p className="__whypickup-p p-text font-weight-normal text-normalblack">
        In today’s fast-paced world, convenience is key. That’s why we the
        option to order on-line or over the phone and pickup at our store
        location. By leveraging these benefits, you can streamline your grocery
        shopping experience, making it more efficient, cost-effective, and
        enjoyable. Why Greenland Fresh Produce Order Online/Store Pickup
      </p>
      <h4 className="__whypickup-h4 h3-text font-weight-semi text-primary-1">
        Why Greenland Fresh Produce Order Online/Store Pickup
      </h4>
      <div className="__whypickup-grid-container">
        <div className="__whypickup-grid-card">
          <h4 className="__whypickup-grid-card-h4 p-text text-normalblack">
            Convenience
          </h4>
          <p className="__whypickup-grid-card-p small-text text-normalblack">
            You can place your order from the comfort of your home or office,
            avoiding the time spent walking around the store. Also, you can
            choose a pickup time that fits your schedule, often with same-day
            options available.
          </p>
        </div>
        <div className="__whypickup-grid-card">
          <h4 className="__whypickup-grid-card-h4 p-text text-normalblack">
            Efficiency
          </h4>
          <p className="__whypickup-grid-card-p small-text text-normalblack">
            Unlike home delivery services, store pickup usually doesn't involve
            additional fees. You can also take advantage of online-only
            promotions and discounts.
          </p>
        </div>
        <div className="__whypickup-grid-card">
          <h4 className="__whypickup-grid-card-h4 p-text text-normalblack">
            Cost Effective
          </h4>
          <p className="__whypickup-grid-card-p small-text text-normalblack">
            Shopping online helps you stick to your list, reducing the
            likelihood of impulse purchases. Quick Checkout: Skip the checkout
            lines and simply pick up your pre-packed groceries.
          </p>
        </div>
        <div className="__whypickup-grid-card">
          <h4 className="__whypickup-grid-card-h4 p-text text-normalblack">
            Enhanced Shopping Experience
          </h4>
          <p className="__whypickup-grid-card-p small-text text-normalblack">
            Check product availability online, ensuring you get what you need
            without the risk of items being out of stock when you arrive.
          </p>
        </div>
      </div>
      <button className="__whypickup-btn text-normalwhite p-text bg-primary-1 font-weight-semi">
        Order now
      </button>
    </div>
  );
}

export default WhyPickUp;
