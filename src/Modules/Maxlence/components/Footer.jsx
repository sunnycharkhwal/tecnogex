import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import logolight from "../assests/maxlogolight.png";
import Fblighticon from "../assests/fblighticon.png";
import Instalighticon from "../assests/instalighticon.png";
import Twitterlighticon from "../assests/twitterlighticon.png";
import FooterLogo from "../../../img/FooterLogo.svg";
export const Footer = () => {
  return (
    <>
      <Container fluid className="greengradient pb-0" id="footer">
        <Container>
          <div className="row g-3">
            <div className="col-xxl-3 col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-12 ">
              <ul className="footercol">
                <p>Let Us Help You</p>
                <li>
                  <NavLink to="/your_account">Accounts</NavLink>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/support">Support</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/getintouch">Get In Touch</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/privacy_policy">Privacy Policy</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/refund_policy"> Refund Policy</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/terms_conditions">Terms & conditions</NavLink>
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-12 ">
              <ul className="footercol">
                <p>Quick Links</p>
                <li>
                  <Nav.Link>
                    <NavLink to="/shop">Shop</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/support">Support</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/agreement">Agreement</NavLink>
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xxl-3 col-lg-3 col-md-4 col-sm-12 col-12 ">
              <ul className="footercol">
                <p>Get To Know Us</p>
                <li>
                  <Nav.Link>
                    <NavLink to="/about_us">About Us</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/testimonial">Testimonial</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/careers">Careers</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/ThankYou">Thank you page</NavLink>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <NavLink to="/error">Error Page</NavLink>
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-12 col-12 ">
              <div className="footlogo mb-3">
                <NavLink to="/">
                  <img src={FooterLogo} alt="f" />
                </NavLink>
              </div>
              <div className="footabout fontrale font500">
                <p>
                  Tecnogex is an Australian-based company offering IT software
                  solutions and digital marketing services. From custom
                  development to web design, SEO, SMM, we provide tailored
                  solutions to meet unique client needs.
                </p>
              </div>
              <div className="footicons  d-flex">
                <div className="fb text-center footicons_my">
                  <a
                    href="https://www.facebook.com/people/TecnoGex/100091787680738/"
                    target="_blank"
                  >
                    <img src={Fblighticon} alt="f" />
                  </a>
                </div>
                <div className="curr text-center footicons_my">
                  <a
                    href="https://www.instagram.com/tecnogexofficial/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                  >
                    <img src={Instalighticon} alt="f" />
                  </a>
                </div>
                <div className="curr text-center footicons_my">
                  <a href="https://twitter.com/tecnogex_" target="_blank">
                    <img src={Twitterlighticon} alt="f" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="col-12">
          <div className="footer_bottom_text">
            <hr />
            <p>Copyright © 2023. All rights reserved</p>
          </div>
        </div>
      </Container>
    </>
  );
};
