import React, { useState } from "react";

import logo from "../assets/fonts/logo.svg";
import cup from "../assets/images/cup.png";
import camera from "../assets/images/camera.png";
import calendar from "../assets/images/calendar.png";
import chatbox from "../assets/images/chatbox.png";
import fill from "../assets/images/fill.png";
import clock from "../assets/images/clock.png";
import bellflat from "../assets/images/bell-flat.png";
import menupic from "../assets/images/menu-pic.png";
import play from "../assets/fonts/play.svg";
import mouse from "../assets/images/mouse.png";
import scroll from "../assets/fonts/scroll.svg";
import mainpic1 from "../assets/images/main-pic-1.png";
import mainpic2 from "../assets/images/main-pic-2.png";
import mainpic3 from "../assets/images/main-pic-3.png";
import test from "./test.mp4";

import "./video.css";

const Home = () => {
  const [inputActive, setinputActive] = useState(false);
  const [menuActive, setmenuActive] = useState(false);

  const inputSearchHandler = () => {
    setinputActive((prev) => !prev);
  };
  const menuBurgerHandler = () => {
    setmenuActive((prev) => !prev);
  };
  return (
    <>
      <div className="main">
        <div className="header js-header" id="header">
          <div className="header__center center">
            <button
              className={`header__burger js-header-burger ${
                menuActive ? "active" : ""
              }`}
              onClick={() => menuBurgerHandler()}
            >
              <span></span>
            </button>
            <a className="header__logo" href="/">
              <img className="header__pic" src={logo} alt="true" />
            </a>
            <div
              className={`header__wrap js-header-wrap ${
                menuActive ? "visible" : ""
              }`}
            >
              <nav className="header__nav">
                <a className="header__item" href="/">
                  Features
                </a>
                <a className="header__item" href="/">
                  Pricing
                </a>
                <a className="header__item" href="/">
                  Tours
                </a>
                <div className="header__item js-header-item">
                  <a className="header__head js-header-head" href="/">
                    Explore
                    <svg className="icon icon-arrow-down">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.69.277a1 1 0 0 1 .033 1.414l-6 6.278a1 1 0 0 1-1.446 0l-6-6.278A1 1 0 0 1 1.723.309L7 5.83 12.277.31a1 1 0 0 1 1.414-.033z"
                      />
                    </svg>
                  </a>
                  <div className="header__body js-header-body">
                    <div className="header__center center">
                      <div className="header__row">
                        <div className="header__col">
                          <div className="header__category">Features</div>
                          <div className="header__menu">
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={cup}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">
                                  Collab Assistant
                                </div>
                                <div className="header__text">
                                  Smart automation system
                                </div>
                              </div>
                            </a>
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={camera}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">
                                  Advanced Importer
                                </div>
                                <div className="header__text">
                                  Work with various media formats
                                </div>
                              </div>
                            </a>
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={calendar}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">
                                  Product Management
                                </div>
                                <div className="header__text">
                                  Workspace reimagined
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="header__col">
                          <div className="header__category">Features</div>
                          <div className="header__menu">
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={chatbox}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">Support</div>
                                <div className="header__text">
                                  24/7 Live Support
                                </div>
                              </div>
                            </a>
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={fill}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">Color Picker</div>
                                <div className="header__text">
                                  Advanced color picker
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="header__col">
                          <div className="header__category">Company</div>
                          <div className="header__menu">
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={clock}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">Collab Team</div>
                                <div className="header__text">
                                  See who’s behind the magic
                                </div>
                              </div>
                            </a>
                            <a className="header__box" href="/">
                              <div className="header__preview">
                                <img
                                  className="header__pic"
                                  src={bellflat}
                                  alt="true"
                                />
                              </div>
                              <div className="header__deetails">
                                <div className="header__info">
                                  Collab Design
                                </div>
                                <div className="header__text">
                                  What we’re working on
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="header__photo">
                <img className="header__pic" src={menupic} alt="true" />
              </div>
            </div>
            <div
              className={`header__search js-header-search  ${
                inputActive ? "active" : ""
              }`}
            >
              <button
                className="header__open js-header-open"
                onClick={() => {
                  inputSearchHandler();
                }}
              >
                <svg className="icon icon-search">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.528 9.767a8.239 8.239 0 1 1 16.478 0 8.239 8.239 0 0 1-16.478 0zM9.767.028c-5.379 0-9.74 4.36-9.74 9.74 0 5.378 4.361 9.738 9.74 9.738 2.3 0 4.415-.797 6.08-2.131l3.165 3.156a.75.75 0 0 0 1.06-1.062l-3.128-3.119a9.704 9.704 0 0 0 2.562-6.583c0-5.378-4.36-9.739-9.74-9.739z"
                  />
                </svg>
              </button>
              <div className="header__field">
                <input
                  className="header__input"
                  type="text"
                  placeholder="Search ..."
                />
              </div>
            </div>
            <a className="header__btn btn btn_pink" href="/">
              Get Started
            </a>
          </div>
          <div
            className={`header__bg js-header-bg ${menuActive ? "show" : ""}`}
          ></div>
        </div>
        <div className="main__center center">
          <div className="main__wrap">
            <h1 className="main__title title title_big  " data-aos>
              <span className="title__box">
                <span className="title__text">Discover</span>
              </span>
              <span className="title__box">
                <span className="title__text">
                  <span className="title__line">Book</span>
                </span>
              </span>
              <span className="title__box">
                <span className="title__text">Lets</span>
              </span>
              <span className="title__box">
                <span className="title__text">
                  Explore<span className="title__color">!</span>
                </span>
              </span>
            </h1>
            <div
              className="main__info info  "
              data-aos="animation-scale-y"
              data-aos-delay="400"
            >
              What are you waiting for?<span className="wave">👋</span>
            </div>
            <div
              className="main__control  "
              data-aos="animation-scale-y"
              data-aos-delay="550"
            >
              <a className="main__btn btn btn_purple" href="/">
                Get Started
              </a>
              <a className="main__link" href="/">
                <div className="main__icon">
                  <img className="main__pic" src={play} alt="true" />
                </div>
                <div className="main__text">See It In Action!</div>
              </a>
            </div>
            <div
              className="main__scroll  "
              data-aos="animation-scale-y"
              data-aos-delay="650"
            >
              <a className="main__link" href="/">
                <div className="main__icon">
                  <img className="main__pic" src={scroll} alt="true" />
                </div>
                <div className="main__text">Scroll to explore</div>
              </a>
            </div>
          </div>
          <div className="main__view  " data-aos>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="down"
                src={mainpic1}
                alt="true"
                style={{
                  willChange: "transform",
                  transform: " translate3d(0px, 81px, 0px)",
                }}
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="up"
                src={mainpic2}
                alt="true"
                style={{
                  willChange: "transform",
                  transform: " translate3d(0px, -36px, 0px)",
                }}
              />
            </div>
            <div className="main__preview">
              <img className="main__pic" src={mouse} alt="true" />
            </div>
            <div className="main__preview">
              <img className="main__pic" src={mainpic3} alt="true" />
            </div>
          </div>
          <div className="main__circles">
            <div className="main__circle"></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed="2"
              style={{ transform: " translate3d(0px, -1798px, 0px)" }}
            ></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed="1"
              style={{ transform: " translate3d(0px, -825px, 0px)" }}
            ></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed="2"
              style={{ transform: " translate3d(0px, -1754px, 0px)" }}
            ></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed=".3"
              style={{ transform: " translate3d(0px, -214px, 0px)" }}
            ></div>
            <div className="main__circle"></div>
            <div
              className="main__circle js-rellax"
              data-rellax-speed="1"
              style={{ transform: " translate3d(0px, -806px, 0px)" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <input type="checkbox" />
        <div className="video">
          <video src={test} loop autoPlay muted />
        </div>
        <div className="text">
          <span data-text="See It In Action!"></span>
        </div>
      </div>
    </>
  );
};

export default Home;
