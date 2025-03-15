import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import FooterLogo from "./footerLogo.png";
function Footer() {
  return (
    <div className="__footer-container bg-white-1">
      <h4 className="__footer-container-h4 text-normalblack text-s-18 ">
        Big Value, Small Price
      </h4>
      <h1 className="__footer-container-h1 text-primary-1 big-text font-weight-medium">
        GREENLAND
      </h1>

      <div className="__footer-navigation-container display-f justify-space-between">
        <div className="__footer-navigation-logo-con">
          <div className="__footer-navigation-img-con">
            <img
              src={FooterLogo}
              alt="footerlogo"
              className="__footer-navigation-img"
            />
            <p className="__footer-navigation-img-sub-text small-text text-primary-1 font-weight-semi">
              Store location:
            </p>
          </div>
          <p className="__footer-navigation-logo-p small-text text-normalblack">
            Akala Expressway, Ibadan
          </p>
        </div>
        <div className="__footer-navigation-service-con">
          <h5 className="__footer-navigation-service-h5 p-text text-normalblack font-weight-semi">
            SERVICES
          </h5>
          <ul className="__footer-navigation-service-link-con">
            <li className="__footer-navigation-service-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">Wholesale program</Link>
            </li>
            <li className="__footer-navigation-service-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">Instant Delivery</Link>
            </li>
          </ul>
        </div>
        <div className="__footer-navigation-contact-con">
          <h5 className="__footer-navigation-contact-h5 p-text text-normalblack font-weight-semi">
            CONTACT US
          </h5>
          <ul className="__footer-navigation-contact-link-con">
            <li className="__footer-navigation-contact-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">greenlandenterprise2@gmail.com</Link>
            </li>
            <li className="__footer-navigation-contact-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">07037393984</Link>
            </li>
          </ul>
        </div>
        <div className="__footer-navigation-follow-con">
          <h5 className="__footer-navigation-follow-h5 p-text text-normalblack font-weight-semi">
            FOLLOW
          </h5>
          <ul className="__footer-navigation-follow-link-con">
            <li className="__footer-navigation-follow-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">Instagram</Link>
            </li>
            <li className="__footer-navigation-follow-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">Facebook</Link>
            </li>
            <li className="__footer-navigation-follow-link normal-font-text text-normalblack text-hover-primary-1">
              <Link to="">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="__footer-copy-right small-text text-primary-1">
        Copyright 2025 Greenland enterprise. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
