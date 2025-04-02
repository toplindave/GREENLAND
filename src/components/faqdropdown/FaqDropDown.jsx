import React, { useState } from "react";
import "../../styles/index.scss";
import { ReactComponent as AngleDown } from "./angleDown.svg";
import { ReactComponent as AngleRight } from "./angleRight.svg";

function FaqDropDown({ faq }) {
  const [Faq, setFaq] = useState(false);
  function openFaq() {
    setFaq((prev) => !prev);
  }
  return (
    <div key={faq.id} className="__why-whole-sale-faq-parent-con">
      <div
        className="__why-whole-sale-faq-parent display-f align-center justify-space-between bg-secondary"
        onClick={openFaq}>
        <p className="__why-whole-sale-faq-parent-p p-text text-normalblack font-weight-semi">
          {faq.title}
        </p>
        <div className="__why-whole-sale-faq-parent-svg-con">
          {faq ? <AngleDown /> : <AngleRight />}
        </div>
      </div>
      {Faq && (
        <div className="__why-whole-sale-faq-child bg-secondary normal-font-text text-normalblack">
          {faq.desc}
        </div>
      )}
    </div>
  );
}

export default FaqDropDown;
