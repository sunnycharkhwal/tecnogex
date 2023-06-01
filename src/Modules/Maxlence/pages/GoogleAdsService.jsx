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
import Gadsservices from "../assests/gadsservices.svg";
import { Faqs } from "../components/Faqs";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { BsDot } from "react-icons/bs";
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
              <h1 className="font-weight-bold my-sm-4 all_h1_title">
                <b>
                  Maximize Your <span> ROI and Crush </span> the Enterprise
                  -level Competition!
                </b>
              </h1>
              <p>
                With our experience and knowledge, we can help you take your
                enterprise business to new heights, just like CommBank has done
                with their financial services. Contact us today to learn more
                about our enterprise-level Google Ads services!
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
              <h2 className="font-weight-bold my-sm-4 all_h1_title">
                Reach your business <span>expectations </span> With our
                <span> Enterprise ads </span> Services!
              </h2>
              <p className="">
                Are you struggling to see the results you want from your Google
                Ads campaigns? Our Enterprise Ads services can help! With our
                proven tactics and strategies, we can optimize your campaigns
                for maximum ROI and generate high-quality leads for your
                business. Don't settle for lackluster results - let us help you
                reach your full potential with Google Ads. Contact us today to
                get started!
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
              <h2 className="font-weight-bold my-sm-4 all_h1_title">
                Lorem ipsum <span>dolor</span> sit.
              </h2>
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
          <h2 className="all_h1_title">
            What <span>services</span> are covered in
            <span>Enterprise Google Ads</span>
          </h2>
        </div>
        <img className="w-100 my-3" src={Gadsservices} alt="f" />
      </div>
      <div className="container-fluid mt-5 mystyle">
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInDown">
            <h2 className="text-white all_h1_title">
              We’d love to be your partner
            </h2>
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
          <h2 className="all_h1_title">
            <b>
              What <span> different</span> we do for
              <span> Enterprise SEO</span>
            </b>
          </h2>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Dynamic Search Ads</b>
              </span>
            </div>
            <div>
              <p>
                Don't let potential customers slip away! With dynamic search
                ads, we can target specific keywords, potential customers, like
                those who are searching for "best deals on smartphones in
                Sydney," and search queries to drive traffic to your website and
                increase your online visibility.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Advanced Conversion and Attribution</b>
              </span>
            </div>
            <div>
              <p>
                By utilizing our advanced tracking and analysis tools, we can
                identify the roadblocks that are preventing your campaigns from
                delivering the results you desire. From there, we can optimize
                your campaigns to achieve maximum ROI and ensure that every
                dollar you spend is working hard to generate revenue for your
                business.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Advanced Google Ads Optimization</b>
              </span>
            </div>
            <div>
              <p>
                Imagine an Australian e-commerce store drawing in customers
                searching for "online clothing stores in Melbourne" with
                targeted ads. This is simply possible with powerful features
                like dynamic search ads and keyword targeting, you can attract
                your ideal audience and drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>SKAGs - Single Keyword Ad Groups </b>
              </span>
            </div>
            <div>
              <p>
                You know that Australian-based dental clinic uses SKAGs to
                target users searching for "teeth whitening services in Sydney.
                Simply, by grouping your ads into highly specific ad groups
                centered around a single keyword, we can ensure your ads are
                highly targeted and optimized for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container table-responsive my-2 py-2">
        <div className="my-5 py-2 text-center ">
          <h2 className="all_h1_title">
            <span>Google Ads Enterprise</span> Services{" "}
          </h2>
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
            <h2 className="font-weight-bold my-sm-4 all_h1_title">
              ROAS First, Everything Else Second. Optimize Now!{" "}
              <span> Everything Else Second.</span> Optimize Now!
            </h2>
          </div>
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-7 col-12 my-3  wow animate__animated animate__fadeInUp">
              <h3 className="font-weight-bold my-sm-4 ">
                What is <span> Maximizing ROAS? </span>
              </h3>
              <p className="">
                Are you a large e-commerce retailer selling a large number of
                products in multiple locations and want to attract more
                customers? The first thing you decide to do is run a Google Ads
                campaign or simply paid ads to promote your business. You spend
                $1000 on advertising and generate $3000 in revenue from the
                customers who come in after seeing your ads. Your ROAS would be
                3:1 (or 300%).
                <br />
                <br /> ROAS is a way to measure the effectiveness of your
                advertising campaigns. It helps you understand whether you're
                getting a good return on your investment. By focusing on
                optimising your ad spend, you can increase the effectiveness of
                your campaigns and improve your ROI.
                <br />
                <p className="mb-0 mt-3">
                  <b>
                    To maximise your ROAS (return on ad spend), we use
                    strategies like:
                  </b>
                  <br />
                  <span>
                    <b className="text-black">
                      <span>
                        <BsDot style={{ fontSize: "30px", color: "black" }} />
                      </span>
                      Audience targeting
                    </b>
                    <br />
                    <b className="text-black">
                      <span>
                        <BsDot style={{ fontSize: "30px", color: "black" }} />
                      </span>
                      Creating ad copy and creatives
                    </b>
                    <br />
                    <b className="text-black">
                      <span>
                        <BsDot style={{ fontSize: "30px", color: "black" }} />
                      </span>
                      Optimising landing pages
                    </b>
                    <br />
                    <b className="text-black">
                      <span>
                        <BsDot style={{ fontSize: "30px", color: "black" }} />
                      </span>
                      Continuous bid management
                    </b>
                  </span>
                </p>
                <br /> Don't let your advertising budget go to waste. By
                optimising your campaigns for maximum ROAS, you can ensure that
                every dollar you spend is working hard to drive growth and
                profitability for your business. So take action today and start
                maximising your ROAS!
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
                <h2 className="font-weight-bold text-center my-sm-4 all_h1_title">
                  <b>
                    Get more bang for your buck with <span>ROAS</span>{" "}
                    optimization for Google Ads
                  </b>
                </h2>
                <p className="">
                  <p>
                    Are you tired of spending a fortune on poorly managed Google
                    Ad campaigns? Don't worry, you're not alone. Many businesses
                    are making the same mistakes, such as bidding on the wrong
                    keywords or sending visitors to low-converting landing
                    pages. But with our expertise, we can help you avoid these
                    costly errors.
                  </p>
                  <br />
                  <p>
                    At Tecnogex, we conduct a comprehensive 75-point Google Ads
                    audit to identify areas of improvement and help you achieve
                    more leads or sales without increasing your budget. Let us
                    show you how effective your campaign can be with our
                    specialized management techniques.
                  </p>
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
          <h2 className="all_h1_title">
            Powering Your Google Ads Success But How?{" "}
          </h2>
          <p>Our Top-Notch Tools Make the Difference</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool1} alt="ś" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Competitor analysis </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Our team uses Semrush for competitor analysis I.e. the backbone
                of paid ads. This allows us to gain insights into your industry,
                identify your competitors' strengths and weaknesses, and create
                an effective strategy to stay ahead of the game.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool2} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Market research</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                By analysing search trends and doing market research with the
                help of Google Trends, we can tailor your content strategy to
                target popular topics and search queries.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool3} alt="s" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Analytics </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                For improvisation, analysing website performance and user
                behaviour is more important. We use Google Analytics to identify
                which pages have a high bounce rate, so we can optimise those
                pages to improve user engagement.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool4} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Landing Page Heat Maps and Session Recordings </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                After creating and optimising landing pages, the next step is
                analysing them. We do this part by using Microsoft Clarity and
                gaining insights into user behaviour through heat maps and
                session recordings for improvement and increased conversions
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool5} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b> Ad Fraud Prevention </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Using Clickcease for ad fraud prevention, we can protect your ad
                budget from fraudulent clicks and ensure that your ads are shown
                to genuine users. By detecting and blocking invalid clicks, we
                can improve the accuracy of your ad performance metrics
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool6} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Custom Dashboards </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                By creating a custom dashboard that tracks website traffic, user
                behaviour, and conversion rates with the help of Looker Studio,
                we can make data-driven decisions to improve your online
                performance.
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
