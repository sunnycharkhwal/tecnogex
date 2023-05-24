import React from "react";
import { NavLink } from "react-router-dom";
import Businesshero from "../assests/businesshero.png";
import Business1second from "../assests/business1second.png";

export const Businessone = () => {
  return (
    <>
      <div className="container-fluid m-0 py-3">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-left text-center">
            <div className="col-sm-8 col-12 my-3 text-center  wow animate__animated animate__fadeInUp">
              <h1 className="my-sm-4 all_h1_title">
              Get An <span>E-commerce Store</span> That Sells Like 
                <span> Crazy </span>
              </h1>
              <small className="font-weight-bold">
              Building the bridge between you and your customers with our e-commerce solutions. 
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 my-sm-4 py-sm-5 py-0 my-0 homehero">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-6 my-2 my-sm-0 my-3 rounded text-center wow animate__animated animate__fadeIn animate__slow ">
            <img className="w-100" src={Businesshero} alt="f" />
          </div>
          <div className="col-sm-6 mb-4">
            <h2 className="my-4 all_h1_title wow animate__animated animate__fadeInUp animate__slow">
              <span>
                <b>From Concept To Checkout, We've  </b>
              </span>
              We've Got You Covered!
            </h2>
            <p>
            Don't let a poorly-designed website hold you back from reaching your e-commerce goals. Our expert team offers comprehensive design and development services, including payment integration and optimization for search engines and mobile devices. Let us take your online store to the next level. 
            </p>
            <div className="py-3">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn fontrale my-2"
              >
                Create Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid px-5 mt-sm-4 py-sm-5 py-3 my-0 homesec3"
        style={{ background: "rgba(0, 201, 156, 0.12)" }}
      >
        <div className="row justify-content-around align-items-center">
          <div className="homesec3info col-sm-6 my-3">
            <div className="m-0 p-0">
              <h2 className="all_h1_title">
              Effortless 
                <span>
                  <b> Control, Maximum Impact:  </b>
                </span>
                Business Management Made Easy
              </h2>
              <br />
              <small>Take the lead and master your website’s performance 

</small>
            </div>

            <div className="row my-1 ">
              <div className="col-sm-6 mt-4 mb-2 ">
                <p className="mb-1">
                  <b>Manage Your Users with Ease  
</b>
                </p>
                <p>
                Keep track of active and inactive user profiles, update profile and address, enable password change. Plus, simplify the process for customers with Wishlist management. Managing your e-commerce website has never been simpler. 
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2   ">
                <p className="mb-1">
                  <b> Control Your Website's Performance </b>
                </p>
                <p>
                Our user-friendly client management dashboard puts you in the driver's seat, allowing you to effortlessly customize your website's menu, banners, brand, testimonials and more. Get started now and rev up your website's performance! 
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2   ">
                <p className="mb-1">
                  <b>Effortlessly Manage Your Products</b>
                </p>
                <p>
                Say goodbye to the headache of managing your products! With our easy-to-use platform, you can effortlessly keep track of your active and inactive products, manage your stock levels, and receive low stock alerts straight to your email.  
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2  ">
                <p className="mb-1">
                  <b>Streamline Your Orders </b>
                </p>
                <p>
                Our tagline says it all - streamline your orders with our efficient and user-friendly system. Whether it's delivery order management, cancelled order management, discount management, or coupon management, we've got you covered. 
                </p>
              </div>
            </div>
            <div className="col-sm-12 px-0 pt-3 ">
              <NavLink
                to="/"
                className="whitebgbtn fontrale"
                title="Create Now"
              >
                Request Now 
              </NavLink>
            </div>
          </div>

          <div className="col-sm-6 mt-4 wow animate__animated animate__fadeInDown ">
            <img className="w-100" src={Business1second} alt="fdf" />
          </div>
        </div>
      </div>
    </>
  );
};
