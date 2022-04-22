import React from "react";
import "./shop.css";
import Gfit from "../../assets/images/gift.jpg"

const Shop = () => {
  return (
    <>
      <section class="shop_section">
        <div class="container">
          <div class="d-flex justify-content-center">
            <h2 class="heading_style">Our Shop</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex align-items-center h-100">
                <div class="shop-detail">
                  <h5>Everything You Need</h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="shop_img-box">
                <img src={Gfit} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
