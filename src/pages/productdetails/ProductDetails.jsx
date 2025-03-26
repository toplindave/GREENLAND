import React from "react";
import "../../styles/index.scss";

function ProductDetails() {
  return (
    <div className="__product-details container">
      <div className="__prod-detail-flex-con display-f">
        <div className="__prod-detail-flex-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          ipsa aut omnis impedit nam quis quidem vero laboriosam animi. Sint sit
          laboriosam quod laborum voluptatibus, quis sunt cum, obcaecati
          provident dolor similique, sed saepe aliquid? In dolores harum,
          numquam facilis suscipit id impedit autem aliquid nihil a. Dolores
          pariatur suscipit accusantium vitae quibusdam fugiat mollitia aut unde
          aperiam sunt culpa magnam ea cum in vel, aspernatur nemo ipsum
          commodi, a ab officia aliquam illo beatae atque? Ut, reiciendis
          deleniti corrupti a dolores, soluta maiores temporibus, sed quas quo
          labore? Laudantium vitae eos quibusdam fugit eius quas omnis quaerat
          earum corporis sequi maiores optio quasi rem culpa aperiam aliquam
          quidem nostrum ducimus ab aliquid iste magnam, nobis animi.
          Voluptatibus consectetur quia, et alias laudantium neque id.
          Exercitationem consequatur velit praesentium nulla assumenda aliquam
          deserunt id voluptatum tenetur! Earum rerum recusandae, repellat
          eveniet nihil necessitatibus ratione saepe distinctio ducimus vero
          temporibus. Amet est laudantium saepe sequi aliquid aperiam quo
          excepturi fugiat? Facere quam itaque suscipit, optio cumque
          repellendus iure quis quaerat, architecto voluptatibus possimus
          delectus excepturi iusto accusantium officiis sint, eligendi ipsa non!
          Ipsa ex provident ut cumque officia repellat quo deleniti voluptas
          neque ad iste exercitationem, dolorem nulla labore illo.
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
