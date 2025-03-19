import React from "react";
import "../../styles/index.scss";
import Carrot from "./carrot.png";
import Products from "../../components/products/Products";
import GreenlandWholesale from "../../components/greenlandWholesale/GreenlandWholesale";
import FastAndReliable from "../../components/fastAndReliable/FastAndReliable";
import WhyPickUp from "../../components/whyPickUp/WhyPickUp";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="__home-page ">
      {/* <Navbar /> */}
      <div className="container">
        <div className="__home-intro display-f justify-space-between">
          <div className="__home-intro-left">
            <h3 className="__home-intro-h3 text-primary h3-text">greenland</h3>
            <h1 className="__home-intro-h1 font-weight-semi faq-header text-normalblack">
              Big Value, Small Price – Quality You Can Afford!
            </h1>
            <p className="__home-intro-p text-s-18 text-normalblack">
              Let greenland facilitate your informed nutritious choices. With a
              little effort and the right approach, you can enjoy high-quality
              products at prices that fit your budget—proving that affordability
              and excellence can go hand in hand!
            </p>
            <div className="__intro-btn-column display-f justify-space-between">
              <button className="__intro-btn  text-normalwhite p-text bg-primary-2">
                Deliver to your location
              </button>
              <button className="__intro-btn p-text text-primary-2 bg-white-3">
                Pick up at our store
              </button>
            </div>
          </div>
          <div className="__home-intro-right">
            <div className="__home-intro-right-img-container ">
              <img
                src={Carrot}
                alt="carrot"
                className="__home-intro-right-img"
              />
            </div>
          </div>
        </div>
        <section className="__featured-product">
          <div className=" display-f justify-space-between">
            <h1 className="">Featured products</h1>
            <h4 className="">View All</h4>
          </div>
          <Products />
        </section>
        <section className="__greenland-Wholesale-section">
          <GreenlandWholesale />
        </section>
        <section className="__fast-and-reliabe-section">
          <FastAndReliable />
        </section>
        <section className="__whypickup-section">
          <WhyPickUp />
        </section>
      </div>
      
    </div>
  );
}

export default Home;
