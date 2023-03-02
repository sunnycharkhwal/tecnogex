import Slider from "react-slick";
import React from "react";
import youtubecamp from "../assests/youtubecamp.jpg";
import pageseo from "../assests/pageseo.jpg";
import socialmediamarketing from "../assests/socialmediamarketing.jpg";
import emailmarketing from "../assests/emailmarketing.jpg";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
import Cart2 from "../../../img/cart2.svg";
export const Cart = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const CardData = [
    {
      title: "Luno Electrical - Creation - Website",
      price: "1200",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
    {
      title: "Luno Electrical - Creation - Website",
      price: "1300",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
    {
      title: "Luno Electrical - Creation - Website",
      price: "1400",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
    {
      title: "Luno Electrical - Creation - Website",
      price: "1500",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
    {
      title: "Luno Electrical - Creation - Website",
      price: "1200",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
    {
      title: "Luno Electrical - Creation - Website",
      price: "1200",
      Monthly: "Monthly",
      package: "Advanced",
      link: "/",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="shopping_cart_name">
            {props.title}
            <p className="shopping_cart_price">${props.price}</p>
          </div>

          <div className="shopping_cart_service">
            <p className="your_services_card_btn_1">{props.package}</p>
            <p className="shopping_cart_btn">{props.Monthly}</p>
          </div>

          <div className="shopping_cart_a_div">
            <img src={Cart2} alt="cart2" />
            <label></label>
            <NavLink to={props.link}>
              <span>See more service related this</span>
            </NavLink>
          </div>
          <hr />
        </div>
      </>
    );
  };

  return (
    <>
      <div className=" container mt-5 mb-5">
        <div className="row g-3">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="shopping_cart">
              <div className="shopping_cart_top_title">
                <p>Shopping Cart</p>
<<<<<<< Updated upstream
=======
                <NavLink to="/">Select all</NavLink>
>>>>>>> Stashed changes
              </div>
              <div className="row">
                {CardData.map((val, i) => {
                  return <CardApp key={i} {...val} />;
                })}
              </div>
              <div className="shopping_cart_bottom">
                <p>
                  Subtotal (3 items) : <span>$6000</span>{" "}
                </p>
                <NavLink to="/checkout" className="btn full_btn ">
                  Proceed to Purchase
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <RightCard />
          </div>
          <div className="col-12">
            <SliderBottom />
          </div>
        </div>
      </div>
    </>
  );
};

const RightCard = () => {
  return (
    <>
      <div className="my_slick_slider_title py-2">
        <h2>Products related to items in your cart</h2>
      </div>
      <div className="row g-3">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-4 col-sm-12 col-12">
          <div className="productCards">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={youtubecamp}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-4 col-sm-12 col-12">
          <div className="productCards ">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={pageseo}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-4 col-sm-12 col-12">
          <div className="productCards ">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={socialmediamarketing}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-4 col-sm-12 col-12">
          <div className="productCards ">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={emailmarketing}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SliderBottom = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="my_slick_slider_title">
        <h2 className="py-2">Frequently purchased</h2>
      </div>
      <Slider className="slidebluearrows my_slick_slider py-2" {...settings}>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={youtubecamp}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={pageseo}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={socialmediamarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={emailmarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={youtubecamp}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={emailmarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
      </Slider>
    </>
  );
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
