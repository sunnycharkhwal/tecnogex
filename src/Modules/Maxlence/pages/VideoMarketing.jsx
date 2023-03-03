import { NavLink } from "react-router-dom";
import VM1 from "../../../img/vm1.svg";
import VM2 from "../../../img/vm2.png";
import VM3 from "../../../img/vm3.svg";
import VM4 from "../../../img/vm4.svg";
import VM5 from "../../../img/vm5.svg";
import VM6 from "../../../img/vm6.svg";
import PackageBlack from "../../../img/packageBlack.svg";
import PackageBlue from "../../../img/packageBlue.svg";
import PackageBlue2 from "../../../img/packageBlue2.svg";
import packageOrange from "../../../img/packageOrange.svg";
import packageGreen2 from "../../../img/packageGreen2.svg";
import packageGreen from "../../../img/packageGreen.svg";

import React from "react";
import CountUp from "react-countup";
export const VideoMarketing = () => {
  return (
    <>
      <div className="video_top_main_div">
        <TopDiv />
      </div>
      <section className=" container mt-5 mb-5">
        <StopVideo />
      </section>
      <div className="video_top_main_div2">
        <MyCountUp />
      </div>
      <section className="container mt-5">
        <Banner />
      </section>
      <section className="container mt-5">
        <PackageCard />
      </section>
      <section className="mt-5 ">
        <GetInTouchVideo />
      </section>
    </>
  );
};
const TopDiv = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-1 order-2 col-12  video_TopDiv_title_div">
          <div className="video_TopDiv_title">
            <h1>
              <span>Power to Engage.</span> <br /> Hold the Attention.
            </h1>
            <p>
              Video has the power to engage and hold the attention of your
              customers like no other type of content. We can help you produce
              video marketing campaigns that reach your potential customers
              where and when they’re buying.
            </p>
            <NavLink to="/" className="btn full_btn">
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-2 order-1 col-12 ">
          <div
            className="vm1_img"
            style={{
              backgroundImage: `url(${VM1})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
const StopVideo = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-1 order-2 ">
          <div
            className="vm2_img"
            style={{
              backgroundImage: `url(${VM2})`,
            }}
          ></div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-2 order-1  video_TopDiv_title_div">
          <div className=" video_TopDiv_title_2">
            <h1>Stop avoiding video marketing and jump in</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dolor turpis felis varius
              a iaculis. Aliquet mauris ut aenean cras et amet diam donec.
              Turpis purus egestas a vel tellus libero adipiscing. Vehicula
              etiam viverra faucibus enim feugiat est purus scelerisque
              volutpat. Libero ac morbi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const MyCountUp = () => {
  return (
    <>
      <div className=" container">
        <div className="row g-4">
          <div className="col-12">
            <div className="MyCountUp_text_div">
              <h3>Did You Know?</h3>
              <p>
                You already know that video marketing is rapidly becoming the
                must-have component to every digital marketing <br />
                <span>strategy, but here’s why it matters:</span>
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM3} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={88} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                88% of brands are dedicated to spending more on video campaigns
                in the future
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM4} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={95} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                Video marketing increase user understanding of product or
                service by 95%
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM5} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={78} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                78% of businesses say they received more traffic after
                implementing videos in their content strategies
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM6} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={52} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                52% of marketers say video is the type of content with the best
                ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Banner = () => {
  return (
    <>
      <div className="Banner_text_div">
        <h3>
          Even small businesses can make <br />
          <span>
            a <span>big impact</span>
          </span>
        </h3>
        <p>
          DMi Partners is an email marketing agency that understands the value
          of our clients’ investment. Our clients routinely tell us that their
          1st party owned database of email subscribers is their most valuable
          investment. Additionally, our clients understand that the success of
          nearly all of their marketing campaigns rely on email to achieve
          positive ROI for those additional channels. Executing through email to
          persuade a conversion, retain customers, re-engage cold conversations
          and drive additional/repeat purchases are crucial to our customers’
          businesses. Optimizations to these initiatives funnels additional
          dollars to future marketing and makes additional channels viable.
        </p>
      </div>
    </>
  );
};
const PackageCard = () => {
  const CardData = [
    {
      BtnBuyLink: "/",
      CustomeQuote: "/",
      MostPopularDisplay: "none",
      cardColor: "#50B432",
      defaultPackagePointListIcon: packageGreen,
      packageName: "Explainer",
      packageBrif:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      delPrice: "4,595",
      Price: "4,395",
      OverviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      PackagePointList: [
        {
          text: "On location and/or studio video shoot by crew",
        },
        {
          text: "Script and storyboard writing (one script review)",
        },
        {
          text: "Royalty free music (if required)",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Video conversion for online delivery",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Professional edit suite post-production including",
        },
        {
          text: "One video review for changes",
        },
        {
          text: "Professional Talent can also be provided if required",
        },
        {
          text: "Digital images and logo provided by you",
        },
        {
          text: "Titles, pans, fades, dissolves and transitions-zooms",
        },
      ],
    },
    {
      BtnBuyLink: "/",
      CustomeQuote: "/",
      MostPopularDisplay: "block",
      cardColor: "#0A76E5",
      defaultPackagePointListIcon: PackageBlue,
      packageName: "Starter",
      packageBrif:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      delPrice: "4,595",
      Price: "4,395",
      OverviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      PackagePointList: [
        {
          text: "On location and/or studio video shoot by crew",
        },
        {
          text: "Script and storyboard writing (one script review)",
        },
        {
          text: "Royalty free music (if required)",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Video conversion for online delivery",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Professional edit suite post-production including",
        },
        {
          text: "One video review for changes",
        },
        {
          text: "Professional Talent can also be provided if required",
        },
        {
          text: "Digital images and logo provided by you",
        },
        {
          text: "Titles, pans, fades, dissolves and transitions-zooms",
        },
      ],
    },
    {
      BtnBuyLink: "/",
      CustomeQuote: "/",
      MostPopularDisplay: "none",
      cardColor: "#4000C9",
      defaultPackagePointListIcon: PackageBlue2,
      packageName: "Popup",
      packageBrif:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      delPrice: "4,595",
      Price: "4,395",
      OverviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      PackagePointList: [
        {
          text: "On location and/or studio video shoot by crew",
        },
        {
          text: "Script and storyboard writing (one script review)",
        },
        {
          text: "Royalty free music (if required)",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Video conversion for online delivery",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Professional edit suite post-production including",
        },
        {
          text: "One video review for changes",
        },
        {
          text: "Professional Talent can also be provided if required",
        },
        {
          text: "Digital images and logo provided by you",
        },
        {
          text: "Titles, pans, fades, dissolves and transitions-zooms",
        },
      ],
    },
    {
      BtnBuyLink: "/",
      CustomeQuote: "/",
      MostPopularDisplay: "none",
      cardColor: "#C93C00",
      defaultPackagePointListIcon: packageGreen2,
      packageName: "Live",
      packageBrif:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      delPrice: "4,595",
      Price: "4,395",
      OverviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      PackagePointList: [
        {
          text: "On location and/or studio video shoot by crew",
        },
        {
          text: "Script and storyboard writing (one script review)",
        },
        {
          text: "Royalty free music (if required)",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Video conversion for online delivery",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Professional edit suite post-production including",
        },
        {
          text: "One video review for changes",
        },
        {
          text: "Professional Talent can also be provided if required",
        },
        {
          text: "Digital images and logo provided by you",
        },
        {
          text: "Titles, pans, fades, dissolves and transitions-zooms",
        },
      ],
    },
    {
      BtnBuyLink: "/",
      CustomeQuote: "/",
      MostPopularDisplay: "none",
      cardColor: "#F59300",
      defaultPackagePointListIcon: packageOrange,
      packageName: "Custom",
      packageBrif:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      delPrice: "4,595",
      Price: "4,395",
      OverviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      PackagePointList: [
        {
          text: "On location and/or studio video shoot by crew",
        },
        {
          text: "Script and storyboard writing (one script review)",
        },
        {
          text: "Royalty free music (if required)",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Video conversion for online delivery",
        },
        {
          img: PackageBlack,
          textColor: "black",
          text: "Professional edit suite post-production including",
        },
        {
          text: "One video review for changes",
        },
        {
          text: "Professional Talent can also be provided if required",
        },
        {
          text: "Digital images and logo provided by you",
        },
        {
          text: "Titles, pans, fades, dissolves and transitions-zooms",
        },
      ],
    },
  ];

  const CardApp = (props) => {
    return (
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 package_card_box_col">
        <div
          className="package_card_box"
          style={{ borderColor: props.cardColor }}
        >
          <div
            className="package_card_box_bage"
            style={{
              display: props.MostPopularDisplay,
              backgroundColor: props.cardColor,
            }}
          ></div>
          <div
            className="package_card_box_bage_text"
            style={{ display: props.MostPopularDisplay }}
          >
            Most <br /> Popular
          </div>
          <div className="package_card_box_header">
            <h3 style={{ color: props.cardColor }}>{props.packageName}</h3>
            <p>{props.packageBrif}</p>
          </div>
          <div className="package_card_box_price">
            <del>${props.delPrice}</del>
            <div>
              From<span style={{ color: props.cardColor }}>${props.Price}</span>
              / mo
            </div>
          </div>
          <div className="package_card_box_overview">
            <h3>Overview</h3>
            <p>{props.OverviewText}</p>
          </div>
          <div className="package_card_box_list_div">
            {props.PackagePointList.map((val, i) => {
              return (
                <div key={i} className="package_card_box_list">
                  <img
                    src={val.img || props.defaultPackagePointListIcon}
                    alt="list icon"
                  />
                  <p style={{ color: val.textColor || props.cardColor }}>
                    {val.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="package_card_box_btn_div">
            <div>
              <NavLink
                to={props.BtnBuyLink}
                className="full_btn2"
                style={{ backgroundColor: props.cardColor }}
              >
                BUY nOW
              </NavLink>
            </div>
            <div className="mt-2">
              <NavLink
                to={props.CustomeQuote}
                className="package_card_box_btn_bottom"
              >
                GET A cUSTOME QUOTE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="package_card">
        <h3>
          Pick the perfect <span>pricing plan</span>
        </h3>
        <p>We have the right plans for you</p>
      </div>
      <div className="row package_card_row">
        {CardData.map((val, i) => {
          return <CardApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const GetInTouchVideo = () => {
  return (
    <>
      <div className="get_in_touch_video">
        <div className="get_in_touch_video_inner">
          <h3>We’d love to be your partner</h3>
          <NavLink to="/" className="btn outline_btn">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </>
  );
};
