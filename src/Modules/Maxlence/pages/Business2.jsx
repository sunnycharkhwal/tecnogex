import Business2hero from "../assests/business2hero.png";
import Business2second from "../assests/business2second.png";
import Business2third from "../assests/business2third.png";

import { NavLink } from "react-router-dom";
export const Business2 = () => {
  return (
    <>
      <div className="container-fluid m-0 py-3">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-left text-center">
            <div className="col-sm-8 col-12 my-3 text-center  wow animate__animated animate__fadeInUp">
              <h1 className="font-weight-bold my-sm-4 all_h1_title">
                <span>
                  <b>Sell Smarter, Not Harder </b>
                </span>
                Transform Your E-commerce Strategy Today
              </h1>
              <small className="font-weight-bold">
                All-in-one e-commerce marketing solution, complete with expert
                strategies and a user-friendly client management dashboard.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  mt-sm-4 py-sm-5 py-4 my-0"
        style={{ backgroundColor: "#FBE6E9" }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="homesec3info col-sm-6 my-3 ">
              <div className="m-0 p-0 ">
                <h2 className="all_h1_title">
                  Your one-stop
                  <span>
                    <b> e-commerce </b>
                  </span>
                  growth partner
                </h2>
                <br />
                <small>Marrying media, tech, and creativity for success.</small>
              </div>

              <div className="row my-1 ">
                <div className="col-sm-6 mt-4 mb-2 ">
                  <p>Influencer Marketing </p>
                  <p>
                    It’s time to have a celebrity endorsement, without the
                    paparazzi. Let our team connect you with the right
                    influencers and skyrocket your sales to A-list status.
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2   ">
                  <p>Shopping Cart Abandonment Solutions </p>
                  <p>
                    Rescue lost visitors with our cart abandonment solutions
                    where we track carts, simplify checkout, send emails, and
                    use retargeting ads.
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2   ">
                  <p>UX Optimization </p>
                  <p>
                    Our design team will create a website that anticipates your
                    customer's every need. Let us be your mind reader and create
                    a magical shopping experience that leads to increased sales.
                    !
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2  ">
                  <p>Chatbots </p>
                  <p>
                    Our team provides 24/7 personalized recommendations and
                    improves customer experience. Our team recommends AI-powered
                    tools to skyrocket your sales while you take a coffee break.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mt-4 wow animate__animated animate__fadeInDown ">
              <img className="w-100" src={Business2hero} alt="df" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-sm-4 py-sm-5 py-0 my-0">
        <div className="row justify-content-around align-items-center">
          <div className="col-sm-4 my-sm-0 my-0  rounded text-center wow animate__animated animate__fadeIn animate__slow ">
            <img
              className="w-100 d-none d-sm-block"
              src={Business2second}
              alt="dfd"
            />
          </div>
          <div className="col-sm-5 my-4 pb-3 ">
            <h2 className="my-4 all_h1_title">
              <span>
                <b>All-in-one Dashboard and </b>
              </span>
              Multichannel Marketing Solutions
            </h2>
            <p className="all_h1_title_p">
              From tracking your sales channels to monitoring inventory and
              orders, our client management dashboard does the heavy lifting, so
              you can focus on growing your business. At the same time, our team
              of experts will work with you to develop a tailored strategy that
              utilises a variety of channels, including email, social media,
              SEM, SEO, and SMS. By leveraging these channels, we can help you
              connect with customers wherever they are and guide them seamlessly
              through the buying process
            </p>
            <p>
              At one time, seize the reins of your business with our expert
              multichannel marketing solutions and take control in your hand.
              Discuss with us now!
            </p>

            <div className="py-3">
              <NavLink to="/Questionare_Page" className="getstartbtn my-2 ">
                Create Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  mt-sm-4 py-sm-5 py-4 my-0 "
        style={{ backgroundColor: "#EFF4FB" }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className=" col-sm-5 my-3 ">
              <div className="m-0 p-0 ">
                <h2 className="all_h1_title">
                  <span>Empower your </span> e-commerce growth
                  <span> with Martec Integrations.</span>
                </h2>
                <br />
              </div>
              <div>
                <p className="all_h1_title_p">
                  Our suite of marketing technology solutions allows you to
                  track, analyze, and optimize your online presence across
                  multiple platforms, including Shopify, WooCommerce, and
                  Magento.
                  <br />
                  From Google Analytics to Facebook Pixel, our integrations
                  offer valuable insights into user behavior, advertising
                  campaign performance, and revenue tracking. Plus, our
                  tools/our team uses tools like VWO and LinkedIn Insights Tag
                  to allow you to optimize your website content and measure the
                  effectiveness of your advertising campaigns. 
                  Contact us to take your online presence to new heights and drive your
                  business forward.
                
                </p>
              </div>

              <div className="col-sm-12 px-0 pt-3 text-sm-left ">
                <NavLink to="/Questionare_Page" className="whitebgbtn fontrale">
                  Get Started
                </NavLink>
              </div>
            </div>

            <div className="col-sm-7 mt-4  ">
              <img className="w-100" src={Business2third} alt="jv" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
