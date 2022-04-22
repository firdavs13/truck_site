import React from "react";
import "./header.css";

import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/phone.png";
import Mail from "../../assets/images/mail.png";
import Fb from "../../assets/images/fb.png";
import Twiter from "../../assets/images/twitter.png";
import Plus from "../../assets/images/g-plus.png";
import Linkedin from "../../assets/images/linkedin.png";

const Header = () => {
  return (
    <>
      <section class="header_section">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container d-lg-none">
            <a class="navbar-brand" href="#">
              <div class="logo-box">
                <img src={Logo} alt="" />
                <span>Transportz</span>
              </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">
                    {" "}
                    Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="shop.html">
                    {" "}
                    Shop{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="company.html">
                    {" "}
                    Company{" "}
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="contact.html">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="header_container ">
            <div class="logo-box">
              <img src={Logo} alt="" />
              <span>Transportz</span>
            </div>
            <div>
              <div class="header_top">
                <div class="header_top-contact">
                  <a href="" class="ml-4">
                    <div>
                      <img src={Phone} alt="" />
                    </div>
                    <span>(+71) 258964785</span>
                  </a>
                  <a href="" class="ml-4">
                    <div>
                      <img src={Mail} alt="" />
                    </div>
                    <span>transportz@gmail.com</span>
                  </a>
                </div>
                <div class="header_top-social">
                  <div>
                    <a href="">
                      <img src={Fb} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={Twiter} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={Plus} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={Linkedin} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="header_btm">
                <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav  ">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">
                            Home <span class="sr-only">(current)</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            {" "}
                            About{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            {" "}
                            Service
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            {" "}
                            Shop{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            {" "}
                            Company{" "}
                          </a>
                        </li>
                        <li class="nav-item ">
                          <a class="nav-link pr-0" href="#">
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
