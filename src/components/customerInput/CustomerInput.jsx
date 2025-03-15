import React from "react";
import "../../styles/index.scss";

function CustomerInput({ inputLabel }) {
  return (
    <div className="__become-customer-form-input-con">
      <p className="__become-customer-form-input-label  small-text font-weight-semi text-normalblack">
        {inputLabel}
      </p>
      <input
        type="text"
        className="__become-customer-form-input text-primary"
      />
    </div>
  );
}

export default CustomerInput;
