import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import Main from "../checkout/Ugu-Global-Food-Village.png";
import { ReactComponent as Houses } from "./home2.svg";
import { ReactComponent as Truck } from "./truck.svg";

function ProductDetails() {
  return (
    <div className="__product-details container">
      <div className="__prod-detail-flex-con display-f justify-space-between">
        <div className="__prod-detail-flex-left">
          <div className="__main-image-display-con">
            <img src={Main} alt=" main" className="__main-image" />
          </div>
          <div className="__main-image-sub-display-con display-f justify-space-between">
            <div className="__main-image-sub-con">
              <img src={Main} alt=" sub" className="__sub-image" />
            </div>
            <div className="__main-image-sub-con">
              <img src={Main} alt=" sub" className="__sub-image" />
            </div>
            <div className="__main-image-sub-con">
              <img src={Main} alt=" sub" className="__sub-image" />
            </div>
          </div>
        </div>
        <div className="__prod-detail-flex-right">
          <h2 className="__prod-detail-flex-right-h2 sub-title-text font-weight-medium">
            Leafy Green Fresh Ugu Leaves
          </h2>
          <h1 className="__prod-detail-flex-right-price sub-title-text font-weight-semi">
            #500
          </h1>
          <div className="__prod-detail-flex-right-size-con">
            <p className="__prod-detail-flex-right-size normal-font-text">
              Size:
              <span className="__prod-detail-size normal-font-text font-weight-semi">
                One Bunch
              </span>
            </p>
            <div className="__prod-detail-size-flex-con display-f justify-space-between align-center">
              <button className="__product-detail-size-btn __size-btn-active bg-secondary small-text font-weight-semi">
                One Bunch
              </button>
              <button className="__product-detail-size-btn bg-secondary small-text font-weight-semi">
                4 Bunches
              </button>
              <button className="__product-detail-size-btn bg-secondary small-text font-weight-semi">
                Dozen
              </button>
              <button className="__product-detail-size-btn bg-secondary small-text font-weight-semi">
                15 Bunches
              </button>
            </div>
          </div>
          <div className="__prod-trans-container display-f justify-space-between">
            <button className="__prod-trans-btn __prod-trans-btn-active bg-secondary">
              <div className="__prod-trans-btn-svg">
                <Houses />
              </div>
              <h6 className="__prod-trans-btn-h6 p-text font-weight-semi text-normalblack">
                Pickup
              </h6>
              <p className="__prod-trans-btn-p normal-font-text ">
                Ready within 15 minutes
              </p>
            </button>
            <button className="__prod-trans-btn bg-secondary">
              <div className="__prod-trans-btn-svg">
                <Truck />
              </div>
              <h6 className="__prod-trans-btn-h6 p-text font-weight-semi text-normalblack">
                Delivery
              </h6>
              <p className="__prod-trans-btn-p normal-font-text ">
                As soon as 8am today
              </p>
            </button>
          </div>
          <p className="__pick-store p-text font-weight-semi text-normalblack">
            Pick up at the store &nbsp;
            <Link className="__get-location small-text text-hover-primary-3">
              Get location
            </Link>
          </p>
          <p className="__ready-in text-primary-3 small-text">
            Ready within 15 minutes &nbsp;
            <span className="__ready-in-span text-normalblack">
              for pickup inside the store
            </span>
          </p>
          <div className="__qty-btn-con display-f justify-space-between">
            <p className="__qty-p">Quantity:</p>
            <div className="__qty-manu-con display-f justify-space-between bg-secondary">
              <button className="__qty-manu-btn bg-secondary">-</button>
              <button className="__qty-manu-btn bg-secondary">2</button>
              <button className="__qty-manu-btn bg-secondary">+</button>
            </div>
          </div>
          <button className="__prod-add-to-basket-btn bg-primary-2 text-normalwhite p-text font-weight-semi">
            Add to basket
          </button>
        </div>
      </div>
      <div className="__prod-detail-description-con bg-secondary">
        <h3 className="__prod-detail-description-h3 sub-title-text">
          Description
        </h3>
        <p className="__prod-detail-description-p normal-font-text">
          Our premium fresh Ugu leaves is packed with flavor and nutrients,
          making it the perfect addition to meals. Grown with care, these
          vibrant green leaves are tender, crisp, and bursting with goodness.
          Whether you’re blending them into a smoothie, tossing them in a salad,
          or sautéing them for a warm dish, Ugu brings a delicious and healthy
          boost to your diet.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
