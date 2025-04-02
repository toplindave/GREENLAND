import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "./rightArrow.svg";

function Contact() {
  return (
    <div className="__contact-con container ">
      <div className="__contact-left">
        <h1 className="__contact-h1 contact-header font-weight-semi text-normalblack">
          We’re introducing a fresh perspective. Get in touch to hear more.
        </h1>
        <p className="__contact-p p-text text-normalblack">
          Call us, drop a line or fill in the form below and we will answer you
          as soon as possible.
        </p>
        <p className="__contact-mail font-weight-semi text-normalblack">
          Email: &nbsp;
          <Link className="__contact-mail-span font-weight-medium text-primary-1 text-hover-normalblack">
            greenlandenterprise2@gmail.com
          </Link>
        </p>
        <p className="__contact-mail font-weight-semi text-normalblack">
          Phone: &nbsp;
          <Link className="__contact-mail-span font-weight-medium text-primary-1 text-hover-normalblack">
            07037274356
          </Link>
        </p>
        <form action="" className="__contact-form">
          <h4 className="__contact-form-h4 sub-title-text text-normalblack font-weight-semi">
            Contact Information
          </h4>
          <p className="__contact-form-input-label text-normalblack font-weight-semi normal-font-text">
            FULL NAME
          </p>
          <input
            type="text"
            className="__contact-form-input text-normalblack p-text"
            placeholder="Enter full name"
          />
          <p className="__contact-form-input-label text-normalblack font-weight-semi normal-font-text">
            YOUR EMAIL
          </p>
          <input
            type="email"
            className="__contact-form-input text-normalblack p-text"
            placeholder="Email@example.com"
          />
          <p className="__contact-form-input-label text-normalblack font-weight-semi normal-font-text">
            HOW CAN WE HELP YOU
          </p>
          <textarea
            type="text"
            className="__contact-form-text-area text-normalblack p-text"
          />
          <button className="__contact-form-send-btn display-f justify-space-between align-center  faq-header text-normalblack font-weight-semi  ">
            Send Message
            <ArrowRight />
          </button>
        </form>
      </div>
      <div className="__contact-right bg-white-1">
        <p className="__contact-right-p normal-font-text text-primary-1">
          Connect
        </p>
        <ul>
          <li className="__contact-social text-normalblack text-hover-primary-1 normal-font-text">
            <Link to="">Instagram</Link>
          </li>
          <li className="__contact-social text-normalblack text-hover-primary-1 normal-font-text">
            <Link to="">Facebook</Link>
          </li>
          <li className="__contact-social text-normalblack text-hover-primary-1 normal-font-text">
            <Link to="">Twitter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
