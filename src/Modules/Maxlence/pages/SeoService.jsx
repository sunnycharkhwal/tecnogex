import { NavLink } from "react-router-dom";
import Enterpriceseohero from "../assests/enterpriceseohero.png";
import Enterpriceseo2 from "../assests/enterpriceseo2.png";
import Eurotechlogo from "../assests/partners/eurotechlogo.png";
import Gasonelogo from "../assests/partners/gasonelogo.png";
import Levelheadlogo from "../assests/partners/Levelheadlogo.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Slider from "react-slick";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Videocamptool1 from "../assests/videocamptool1.png";
import Videocamptool2 from "../assests/videocamptool2.png";
import Videocamptool3 from "../assests/videocamptool3.png";
import Videocamptool4 from "../assests/videocamptool4.png";
import Videocamptool5 from "../assests/videocamptool5.png";
import Videocamptool6 from "../assests/videocamptool6.png";
import { Faqs } from "../components/Faqs";

export const SeoService = () => {
  return (
    <>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-star text-center">
            <div className="col-sm-6 col-12 my-3 ">
              <h1 className="font-weight-bold my-sm-4 all_h1_title">
                Expertly Crafted <span> SEO Solutions </span> for Maximum Impact
              </h1>
              <p>
                Are you feeling overwhelmed trying to manage the SEO for your
                large website, like an ecommerce store with thousands of
                products? We understand the challenges that come with managing
                SEO at this scale. But the good news is, with our
                enterprise-level SEO services, you can leave the heavy lifting
                to us.
              </p>
              <div>
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Request A Demo
                </NavLink>
                <NavLink
                  to="/"
                  className="ctabtn viewjectbtn fontpop mx-2 my-2"
                >
                  View Case Studies
                </NavLink>
              </div>
            </div>
            <div className="col-sm-6 ">
              <img className="w-100" src={Enterpriceseohero} alt="f" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-left text-center">
            <div className="col-sm-6  order-md-1 order-sm-2 order-2">
              <img className="w-100" src={Enterpriceseo2} alt="jf" />
            </div>

            <div className="col-sm-6 col-12 my-3 order-md-2 order-sm-1 order-1 ">
              <h2 className="font-weight-bold my-sm-4 all_h1_title">
                <span>Scaling up </span> your SEO game with our
                <span> enterprise level </span> solutions.
              </h2>
              <p>
                Unlock the full potential of your big brand with enterprise SEO
                solutions. Managing SEO for a 500,000-page website is a whole
                new ballgame, and it takes skilled back-end development and
                automation to stay ahead of the game. Global SEO, multiple
                websites, branding guidelines, legal requirements, and complex
                chains of command - an enterprise SEO agency has the expertise
                to navigate it all. Don't settle for anything les
              </p>
              <div>
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Send Me A Proposal
                </NavLink>
                <a
                  className="ctabtn viewjectbtn fontpop mx-2 my-2"
                  href="tel:+496170961709"
                >
                  123-456-7890
                </a>
              </div>
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
      <div className="container-fluid py-3" style={{ background: "#fff" }}>
        <div className="container seoservices">
          <div
            className="text-center my-3"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <h2 className="font-weight-bold my-sm-4 all_h1_title ">
              What services are covered in <span> Enterprise Seo </span>
            </h2>
          </div>

          <div
            className="row my-3 justify-content-around align-items-centerwow animate__ animate__fadeInDown animate__slow animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div
              className="col-md-3 text-center seoservice shadow-lg wow animate__ animate__fadeInLeft animate__fast animate__delay-1s"
              style={{ visibility: "visiblez", animationName: "fadeInLeft" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/audit.png"
                alt="d"
              />
              <h5>Exciting Auditing Discoveries</h5>
              <small>
                Auditing may seem like a dry and technical topic, but it can be
                quite exciting. It's like being a detective, searching for clues
                to ensure everything is in order and uncovering ways to improve.
              </small>
            </div>

            <div
              className="col-md-3 text-center seoservice shadow-lg wow animate__ animate__fadeInDown animate__fast animate__delay-1s"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/reporting.png"
                alt="d"
              />
              <h5>Enterprise-level keyword research </h5>
              <small>
                Our team meticulously analyzes search volume data, delves deep
                into keyword trends, and thoroughly understands the competitive
                landscape to curate a comprehensive list of high-value keywords
                to help your business rise above the competition.
              </small>
            </div>

            <div
              className="col-md-3 text-center seoservice shadow-lg "
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/companal.png"
                alt="d"
              />
              <h5>Advanced Competitive Analysis </h5>
              <small>
                Competitive analysis in SEO is like playing detective - by
                analyzing your competitor's backlinks and content strategy, we
                identify new opportunities and develop a more effective SEO
                strategy to outrank them.
              </small>
            </div>
          </div>

          <div
            className="row justify-content-around wow animate__ animate__fadeInDown animate__slow animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div
              className="col-md-3 text-center seoservice shadow-lg wow animate__ animate__fadeInLeft animate__fast animate__delay-1s"
              style={{ visibility: "visiblez", animationName: "fadeInLeft" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/strat.png"
                alt="d"
              />
              <h5>Customized SEO Strategy </h5>
              <small>
                Our expert team studies your business, conducts comprehensive
                keyword research, optimises your website content, and builds
                high-quality backlinks to attract more relevant traffic to your
                site.
              </small>
            </div>

            <div
              className="col-md-3 text-center seoservice shadow-lg wow animate__ animate__fadeInDown animate__fast animate__delay-1s"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/optimisation.png"
                alt="d"
              />
              <h5>Multiple optimization strategies </h5>
              <small>
                Our expert team can help you with advanced local SEO, on-page
                optimization, and technical SEO optimization to help you outrank
                your competitors.
              </small>
            </div>

            <div
              className="col-md-3 text-center seoservice shadow-lg "
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <img
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/reporting.png"
                alt="d"
              />
              <h5>In-depth analytics and reporting </h5>
              <small>
                Want to make sure your SEO efforts are paying off? Analytics and
                reporting can help you measure the effectiveness of your
                strategies and identify areas for improvement.
              </small>
            </div>
          </div>
        </div>
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
                <b>Brand messaging & reputation strategy </b>
              </span>
            </div>
            <div>
              <p>
                In today's digital world, your brand image and reputation can
                make or break your business. We’re here to craft a powerful
                brand message and establish a positive reputation in your
                industry. By doing so, you can attract more loyal customers,
                outrank your competitors, and achieve your enterprise SEO goals.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Comprehensive Global coverage strategy </b>
              </span>
            </div>
            <div>
              <p>
                Are you ready to take your business to the global stage? Our
                expert team can help you. By optimizing your website and content
                for specific languages and regions, we can help you reach a
                wider audience and attract more relevant traffic from around the
                world.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Rate of innovation & Development Cycles </b>
              </span>
            </div>
            <div>
              <p>
                By implementing advanced AI and machine learning tools, we can
                help you analyze data and optimize your website and content for
                maximum performance, keeping your enterprise ahead of the curve
                and ensuring long-term success.
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Advanced technology and Artificial Intelligence </b>
              </span>
            </div>
            <div>
              <p>
                Our team provides a competitive edge with enterprise SEO
                solutions. They leverage AI-powered tools to analyze data and
                automate routine tasks, giving our team more time to focus on
                high-level strategy and delivering measurable results that drive
                business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-sm-block d-none table-responsive my-2 py-2">
        <div className="my-5 py-2 text-center">
          <h2 className="all_h1_title">
            <span>SEO Enterprise</span> Services
          </h2>
        </div>

        <table className="table table-bordered planpricetable table-striped">
          <thead>
            <tr>
              <th className="base">
                <h3>Features</h3>
              </th>
              <th className="text-center base" colSpan="2">
                <h3>Silver</h3>
              </th>
              <th className="text-center base" colSpan="2">
                <h3>Gold</h3>
              </th>
              <th className="text-center base" colSpan="2">
                <h3>Platinum</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Number of Keywords</th>
              <td className="text-center" colSpan="2">
                <b>Up to 40</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Up to 80</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Up to 120</b>
              </td>
            </tr>
            <tr>
              <th scope="row">Dedicated pages as per keywords</th>
              <td className="text-center" colSpan="2">
                <b>20</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>40</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>60</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Technical SEO management</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Mothly reports</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row">High authority link building</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <NavLink
                    to="/Questionare_Page"
                    className="getstartbtn fontpop  mx-2 my-2"
                  >
                    Get Started
                  </NavLink>
                </b>
              </td>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <NavLink
                    to="/Questionare_Page"
                    className="getstartbtn fontpop  mx-2 my-2"
                  >
                    Get Started
                  </NavLink>
                </b>
              </td>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <NavLink
                    to="/Questionare_Page"
                    className="getstartbtn fontpop  mx-2 my-2"
                  >
                    Get Started
                  </NavLink>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container d-sm-none d-block table-responsive my-2 py-2">
        <div className="my-5 py-2 text-center">
          <h2 className="all_h1_title">
            <span>SEO Enterprise</span> Services
          </h2>
        </div>
        <table className="table table-bordered planpricetable mb-4 table-striped">
          <thead>
            <tr>
              <th className="base">
                <h5>Features</h5>
              </th>
              <th className="text-center base" colSpan="2">
                <h5>Silver</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Number of Keywords</th>
              <td className="text-center" colSpan="2">
                <b>Up to 40</b>
              </td>
            </tr>
            <tr>
              <th scope="row">Dedicated pages as per keywords</th>
              <td className="text-center" colSpan="2">
                <b>20</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Technical SEO management</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Mothly reports</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row">High authority link building</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <a
                    href="seoenterprisequest.html"
                    className="getstartbtn getstartmob fontpop wow animate__animated animate__delay-1s animate__slow animate__bounceIn mx-2 my-2"
                  >
                    Get Started
                  </a>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered planpricetable mb-4 table-striped">
          <thead>
            <tr>
              <th className="base">
                <h5>Features</h5>
              </th>
              <th className="text-center base" colSpan="2">
                <h5>Gold</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Number of Keywords</th>
              <td className="text-center" colSpan="2">
                <b>Up to 80</b>
              </td>
            </tr>
            <tr>
              <th scope="row">Dedicated pages as per keywords</th>
              <td className="text-center" colSpan="2">
                <b>40</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Technical SEO management</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Mothly reports</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row">High authority link building</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <a
                    href="seoenterprisequest.html"
                    className="getstartbtn getstartmob fontpop wow animate__animated animate__delay-1s animate__slow animate__bounceIn mx-2 my-2"
                  >
                    Get Started
                  </a>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered planpricetable mb-3 table-striped">
          <thead>
            <tr>
              <th className="base">
                <h5>Features</h5>
              </th>
              <th className="text-center base" colSpan="2">
                <h5>Platinum</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Number of Keywords</th>
              <td className="text-center" colSpan="2">
                <b>Up to 120</b>
              </td>
            </tr>
            <tr>
              <th scope="row">Dedicated pages as per keywords</th>
              <td className="text-center" colSpan="2">
                <b>80</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Technical SEO management</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row text-left">Mothly reports</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <th scope="row">High authority link building</th>
              <td className="text-center" colSpan="2">
                <b>Yes</b>
              </td>
            </tr>
            <tr>
              <td className="py-4 text-center" colSpan="2">
                <b>
                  <a
                    href="seoenterprisequest.html"
                    className="getstartbtn getstartmob fontpop wow animate__animated animate__delay-1s animate__slow animate__bounceIn mx-2 my-2"
                  >
                    Get Started
                  </a>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container my-sm-4 py-sm-3 py-3 my-3">
        <div className="campworkhead py-3 my-3 text-center">
          <h3 className="all_h1_title">Why Our SEO Campaigns Succeed</h3>
          <p>Our Winning Strategies Revealed!</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool1} alt="Videocamptool1" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>All-in-one SEO tool</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Our team track keyword rankings, analyze backlink profiles, and
                identify content gaps that need to be filled.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool2} alt="videocamptool2" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Detailed Analysis</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                A powerful analytics tool that provides us with detailed
                insights into your website traffic, user behavior, and
                conversion rates.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool3} alt="f" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Competitive research</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                This tool offers a comprehensive set of features for website
                crawling, analysis, and optimization.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool4} alt="videocamptool4" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Keyword planner</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                By providing data on search volume, competition, and estimated
                cost-per-click, this allows us to make informed decisions about
                our SEO strategies.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool5} alt="videocamptool5" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Website performance insights </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Our team use Search Console to monitor website health, track
                search performance, and identify opportunities for optimization.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool6} alt="videocamptool6" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Search trend insights </b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Using Google Trends, we found that searches for "vegan protein
                powder" have increased by 200% in the past year, which led us to
                optimize your website content and target that keyword, resulting
                in a significant increase in organic traffic and sales.
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
    speed: 5000,
    autoplaySpeed: 5000,
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
