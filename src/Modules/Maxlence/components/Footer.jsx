import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import logolight from "../assests/maxlogolight.png";
import Fblighticon from "../assests/fblighticon.png";
import Instalighticon from "../assests/instalighticon.png";
import Twitterlighticon from "../assests/twitterlighticon.png";

export const Footer = () => {
  return (
    <>
      <Container fluid className="greengradient " id="footer">
        <Container>
          <div className="row">
            <div className="col-sm-3 col-12 ">
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
            <div className="col-sm-3 col-12 ">
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
              </ul>
            </div>
            <div className="col-sm-3 col-12 ">
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
              </ul>
            </div>
            <div className="col-sm-3 col-12 ">
              <div className="footlogo text-center mb-3">
                <NavLink to="/">
                  <img src={logolight} alt="f" />
                </NavLink>
              </div>
              <div className="footabout fontrale font500">
                <p>
                  Aenean lorem enim faucibus at neque libero, in. In sed tempor
                  diam habitasse ut. Tortor id augue molestie nisi, non. Vitae,
                  tempor adipiscing massa, ultrices donec purus risus lectus.
                  Amet integer dolor consectetur convallis in risus adipiscing.
                </p>
              </div>
              <div className="footicons  d-flex justify-content-around">
                <div className="fb text-center">
                  <NavLink to="/">
                    <img src={Fblighticon} alt="f" />
                  </NavLink>
                </div>
                <div className="curr text-center">
                  <NavLink to="/">
                    <img src={Instalighticon} alt="f" />
                  </NavLink>
                </div>
                <div className="curr text-center">
                  <NavLink to="/">
                    <img src={Twitterlighticon} alt="f" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};
