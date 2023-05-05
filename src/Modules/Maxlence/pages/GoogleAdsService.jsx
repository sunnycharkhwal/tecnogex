import { NavLink } from "react-router-dom";
import Gadsenterprisehero from "../assests/gadsenterprisehero.png";
import Enterprisegads2 from "../assests/enterprisegads2.jpg";
import Eurotechlogo from "../assests/partners/eurotechlogo.png";
import Gasonelogo from "../assests/partners/gasonelogo.png";
import Levelheadlogo from "../assests/partners/Levelheadlogo.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Roasformula from "../assests/roasformula.png";
import Gadsoptimise from "../assests/gadsoptimise.png";
import Gadsvideo from "../assests/gadsvideo.png";
import Slider from "react-slick";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Videocamptool1 from "../assests/videocamptool1.png";
import Videocamptool2 from "../assests/videocamptool2.png";
import Videocamptool3 from "../assests/videocamptool3.png";
import Videocamptool4 from "../assests/videocamptool4.png";
import Videocamptool5 from "../assests/videocamptool5.png";
import Videocamptool6 from "../assests/videocamptool6.png";
import Gadsservices from "../assests/gadsservices.png";
import { Faqs } from "../components/Faqs";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
export const GoogleAdsService = () => {
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  return (
    <>
      <div className="container-fluid  py-3 ">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-6   order-md-1 order-sm-2 order-2">
              <img className="w-100" src={Gadsenterprisehero} alt="jf" />
            </div>

            <div className="col-sm-6 col-12 my-3 order-md-2 order-sm-1 order-1  ">
              <h1 className="font-weight-bold my-sm-4 ">
                <b>
                  Enterprise <span>Google Ads </span> Service
                </b>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <div className="mt-4">
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Request A Demo
                </NavLink>
                <a
                  className="ctabtn viewjectbtn fontpop mx-2 my-2 "
                  href="tel:+496170961709"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  py-3 "
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-7 col-12 my-3 ">
              <h1 className="font-weight-bold my-sm-4 ">
                Enterprise <span> Expand </span> your business with our
                <span>Google Ads </span> Service
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <div className="mt-5">
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Send Me A Proposal
                </NavLink>
                <a
                  className="ctabtn viewjectbtn fontpop mx-2 my-2 "
                  href="tel:+496170961709"
                >
                  123-456-7890
                </a>
              </div>
            </div>
            <div className="col-sm-5 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Enterprisegads2} alt="sd" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 homepartners">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-sm-3 col-6 my-sm-3  s">
              <img src={Eurotechlogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Gasonelogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Levelheadlogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Velaqualogo} alt="f" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-md-6 col-12 my-3 ">
              <h1 className="font-weight-bold my-sm-4">
                Lorem ipsum <span>dolor</span> sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam, sit!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam iusto id, repellat accusamus iste omnis nesciunt minus,
                dignissimos nobis dicta quos pariatur accusantium! Ipsa aliquam
                delectus neque eveniet, doloribus quia?
              </p>
            </div>
            <div className="col-md-5 ">
              <SliderBottom />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="gadsservicehead py-3 text-center ">
          <h1>
            What <span>services</span>are covered in
            <span>Enterprise Google Ads</span>
          </h1>
        </div>
        <img className="w-100 my-3" src={Gadsservices} alt="f" />
      </div>
      <div className="container-fluid mt-5 mystyle">
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInDown">
            <h1 className="text-white">We’d love to be your partner</h1>
          </div>
          <div className="text-center mt-4  ">
            <a
              className="ctabtn viewjectbtn border-white text-white fontpop  mx-2 my-2"
              href="tel:+496170961709"
            >
              Send Me a Proposal
            </a>
            <NavLink
              to="/getintouch"
              className="ctabtn bg-white border-none fontpop  mx-2 my-2"
            >
              Get In Touch &#10230;
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container py-2 mt-5">
        <div className="gadsservicehead py-3 text-center wow animate__animated animate__fadeInDown">
          <h1>
            <b>
              What <span> different</span> we do for
              <span>Enterprise SEO</span>
            </b>
          </h1>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Advance Keyword Search</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Tactics for Optimization</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Advancement in SEO Strategic Speed</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Lorem ipsum dolor sit.</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container table-responsive my-2 py-2">
        <div className="my-5 py-2 text-center ">
          <h1>
            <span>Google Ads Enterprise</span> Services{" "}
          </h1>
        </div>

        <table className="table  table-bordered planpricetable   table-striped">
          <thead>
            <tr>
              <th className="base" colSpan="15">
                <h3>Features</h3>
              </th>
              <th className=" text-center base" colSpan="2">
                <h3>Enterprise</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="gadsrow">
              <td colSpan="15">Monthly PPC spend with PPC networks</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Keywords in campaign</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Google PPC network</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Video campaign for brand awareness </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Video campaign for lead generation </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Google display network</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Google customer match & audience match</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Initial campaign development & strategy</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Advanced keyword research and selection</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Industry analysis</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Ad campaign copywriting</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Ad copy performance testing</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Ongoing keyword development and tweaking</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Dynamic keyword insertion into ads</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Dynamic keyword insertion into ads</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Strategic bid management</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Results analysis/reporting</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Campaigns will be managed through client's Google Ads account
                (client will retain Admin/owner access of all campaigns created)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Single account representative</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Up to two personal consultations per month (biweekely)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Up to 100 lead phone calls tracked per month (The number might
                vary in the first 3 months as the campaign is being optimised)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Single account representative</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Monitoring clicks, conversions and click fraud activity
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Setup of 1 unbounce landing page (optional)</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">Website conversion analysis reporting</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Initial banner ad design for display & remarketing
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Quarterly banner ad design for display & remarketing (a total of
                4 banner ad sets a year)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="gadsrow">
              <td colSpan="15">
                Google text ad remarketing & banner remarketing (if banner ads
                are included, provided by the client, or creative banner design
                is paid for)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="20" className=" py-4 text-center ">
                <b>
                  <NavLink
                    to="/Questionare_Page"
                    className="getstartbtn fontpop"
                  >
                    Get Started
                  </NavLink>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="container-fluid  py-3 "
        style={{ backgroundColor: "#EEF6FF" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="gadsoptimisehead text-center py-3">
            <h1 className="font-weight-bold my-sm-4 ">
              Optimize your <span> Google Ads </span> account for{" "}
              <span>ROAS</span>
            </h1>
          </div>
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-7 col-12 my-3  wow animate__animated animate__fadeInUp">
              <h1 className="font-weight-bold my-sm-4 ">
                What is <span> ROAS </span>
              </h1>
              <p className="">
                ROAS stands for return on ad spend—a marketing metric that
                measures the amount of revenue your business earns for each
                dollar it spends on advertising. For all intents and purposes,
                ROAS is practically the same as another metric you’re probably
                familiar with: return on investment, or ROI. In this case, the
                money you’re spending on digital advertising is the investment
                on which you’re tracking returns.
                <br />
                <br /> At the most basic level, ROAS measures the effectiveness
                of your advertising efforts; the more effectively your
                advertising messages connect with your prospects, the more
                revenue you’ll earn from each dollar of ad spend. The higher
                your ROAS, the better.
                <br />
                <br /> If you’re so inclined, you can measure ROAS at a variety
                of levels within your Google Ads account: the account level, the
                campaign level, the ad group level, and so on. As long as you
                know how much you’re spending and earning at that particular
                level, you can calculate ROAS.
              </p>

              <div>
                <img className="w-100" src={Roasformula} alt="d" />
              </div>
            </div>
            <div className="col-sm-5 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Gadsoptimise} alt="d" />
            </div>

            <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
              <div className="col-sm-7 col-12 my-3  wow animate__animated animate__fadeInUp">
                <h1 className="font-weight-bold text-center my-sm-4 ">
                  <b>
                    Maximize <span>ROAS</span>
                  </b>
                </h1>
                <p className="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>{" "}
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid gadsvideo px-0">
        <img
          className="w-100"
          style={{ cursor: "pointer" }}
          src={Gadsvideo}
          alt="hfd"
          onClick={() => setShowVideoModal(true)}
        />
        <VideoModal
          show={showVideoModal}
          onHide={() => setShowVideoModal(false)}
        />
      </div>
      <div className="container my-sm-4 py-sm-3 py-3 my-3 ">
        <div className="campworkhead py-3 my-3 text-center">
          <h1>Why Our Campaigns Work</h1>
          <p>We use the best tools</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool1} alt="ś" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Seo</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool2} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Competitive Research</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool3} alt="s" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Site Audit</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool4} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Keywords</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool5} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Ads</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool6} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Analysis</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </>
  );
};
const SliderBottom = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const SliderData = [
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
  ];
  const SliderApp = (props) => {
    return (
      <>
        <div>
          <div className="seo_service_rating_div">
            <div className="seo_service_rating_inner_div">
              <img src={props.img} alt="img" />
              <p>{props.name}</p>
            </div>
            <h6>{props.text}</h6>
            <div className="seo_service_rating_star_div">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Slider className="slidebluearrows my_slick_slider py-2" {...settings}>
        {SliderData.map((val, i) => {
          return <SliderApp key={i} {...val} />;
        })}
      </Slider>
    </>
  );
};
const VideoModal = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="video_div_top"
  >
    <Modal.Body className="video_div_body">
      <iframe
        className="video_div"
        src="https://www.youtube.com/embed/mq508HXzccI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <AiFillCloseCircle
        className="video_modal_close_btn"
        onClick={props.onHide}
      />
    </Modal.Body>
  </Modal>
);
