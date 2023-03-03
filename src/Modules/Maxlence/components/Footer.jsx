import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import logolight from "../assests/maxlogolight.png";
export const Footer = () => {
  return (
    <>
      <Container fluid className="greengradient" id="footer">
        <Container>
          <div className="row">
            <div className="col-sm-3 col-12 my-3">
              <ul className="footercol">
                <p>Let Us Help You</p>
                <li>
                  <Nav.Link href="/profile">Accounts</Nav.Link >
                </li>

                <li>
                  <Nav.Link href="/refundpolicy">Refund Policy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/support">Support</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/refund">Refund Policy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/getintouch">Get In Touch</Nav.Link >
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-12 my-3">
              <ul className="footercol">
                <p>Quick Links</p>
                <li>
                  <Nav.Link href="/enterprise">Enterprise</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/shop">Shop</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/technology">Technology</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/support">Support</Nav.Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-12 my-3">
              <ul className="footercol">
                <p>Get To Know Us</p>
                <li>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/testimonial">Testimonial</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/careers">Careers</Nav.Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-12 my-3">
              <div className="footlogo text-center mb-3">
                <a href="index.html">
                  <img src={logolight} alt="" />
                </a>
              </div>
              <div className="footabout fontrale font500">
                <p>
                  Aenean lorem enim faucibus at neque libero, in. In sed tempor
                  diam habitasse ut. Tortor id augue molestie nisi, non. Vitae,
                  tempor adipiscing massa, ultrices donec purus risus lectus.
                  Amet integer dolor consectetur convallis in risus adipiscing.
                </p>
              </div>
              <div className="footicons p-4 d-flex justify-content-around">
                <div className="fb text-center">
                  <img src="assests/fblighticon.png" alt="" />
                </div>
                <div className="curr  text-center">
                  <img src="assests/instalighticon.png" alt="" />
                </div>
                <div className="curr text-center">
                  <img src="assests/twitterlighticon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};
