import "./slider.css"

import React from "react";
import White from "../../assets/images/white-next.png"
import Truck from "../../assets/images/truck.png"

const Slider = () => {
  return (
    <>
      <section class=" slider_section ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="slider_item-container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div className="slider_form-box">
                          <form action="">
                            <div className="search_input">
                              <input type="text" />
                              <img src="images/search-icon.png" alt="" />
                            </div>

                            <button>Search</button>
                          </form>
                        </div>
                        <div>
                          <h1>
                            Unbeatable <br />
                            trucking & Transport <br />
                            Services
                          </h1>

                          <div className="d-flex">
                            <div>
                              <a href="" className="read-btn">
                                <span>Read More</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                            <div className="ml-3">
                              <a href="" className="quote-btn">
                                <span>Get A Quote</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img
                          src={Truck}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="slider_item-container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div className="slider_form-box">
                          <form action="">
                            <div className="search_input">
                              <input type="text" />
                              <img src="images/search-icon.png" alt="" />
                            </div>

                            <button>Search</button>
                          </form>
                        </div>
                        <div>
                          <h1>
                            Unbeatable <br />
                            trucking & Transport <br />
                            Services
                          </h1>

                          <div className="d-flex">
                            <div>
                              <a href="" className="read-btn">
                                <span>Read More</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                            <div className="ml-3">
                              <a href="" className="quote-btn">
                                <span>Get A Quote</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img
                          src={Truck}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="slider_item-container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div className="slider_form-box">
                          <form action="">
                            <div className="search_input">
                              <input type="text" />
                              <img src="images/search-icon.png" alt="" />
                            </div>

                            <button>Search</button>
                          </form>
                        </div>
                        <div>
                          <h1>
                            Unbeatable <br />
                            trucking & Transport <br />
                            Services
                          </h1>

                          <div className="d-flex">
                            <div>
                              <a href="" className="read-btn">
                                <span>Read More</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                            <div className="ml-3">
                              <a href="" className="quote-btn">
                                <span>Get A Quote</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img
                          src={Truck}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="slider_item-container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div className="slider_form-box">
                          <form action="">
                            <div className="search_input">
                              <input type="text" />
                              <img src="images/search-icon.png" alt="" />
                            </div>

                            <button>Search</button>
                          </form>
                        </div>
                        <div>
                          <h1>
                            Unbeatable <br />
                            trucking & Transport <br />
                            Services
                          </h1>

                          <div className="d-flex">
                            <div>
                              <a href="" className="read-btn">
                                <span>Read More</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                            <div className="ml-3">
                              <a href="" className="quote-btn">
                                <span>Get A Quote</span>
                                <img src={White} alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img
                          src={Truck}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
