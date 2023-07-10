import React from "react";
import homehero2 from "../assests/homehero2.png";
import { BlueBtn, OutlineLinkBtn } from "../components/Btn";
import velaqualogo from "../assests/partners/velaqualogo.png";
import flooring from "../assests/partners/logo 1.png";
import latestproj1 from "../assests/latestproj1.png";
import latestproj2 from "../assests/latestproj1.1.png";
import gekkologo from "../assests/partners/logo_gekko-1 1.png";
import tylerlogo from "../assests/partners/tylerlogo.png";
import creatweb1 from "../assests/creatweb1.svg";
import palette from "../assests/palette 1.svg";
import desktop from "../assests/desktop.svg";
import stats from "../assests/stats 1.svg";
import creatimg2 from "../assests/creatimg2.jpg";
import creatopti from "../assests/creatopti.jpg";
import aligncenter from "../assests/01 align center.svg";
import lightbulb from "../assests/lightbulb-dollar 1.svg";
import questioncheck from "../assests/comments-question-check 1.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
import { NavLink } from "react-router-dom";
//

import WebsiteReDesignIcon from "../../../img/WebsiteReDesignIcon.svg";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/Hosting.svg";
import Wa from "../../../img/wa.svg";

const TopLinkData = [
  {
    linkName: "Website Design",
    linkIcon: Wa,
    link: "/website/6",
    activeNav: "block",
    linkNameColor: "black",
  },
  {
    linkName: "Website Re-Design",
    linkIcon: WebsiteReDesignIcon,
    link: "/website_redesign",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Maintenance",
    linkIcon: MaintenanceIcon,
    link: "/maintenance",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Hosting",
    linkIcon: Hosting,
    link: "/hosting",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Website = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
        <div className=" container">
          <div className="row  g-3 justify-content-center">
            {TopLinkData.map((val, i) => (
              <div
                key={i}
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 creation_and_growth_col_div"
              >
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}{" "}
                  </span>
                </NavLink>
                <div
                  style={{ display: val.activeNav }}
                  className="creation_and_growth_activ"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#fafafa" }}>
        <div className="container py-3">
          <div className="row py-3">
            <div>
              <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <h1 class="title_all_new">
                    Responsive Websites. Right On Time With{" "}
                    <span> Personalized Dashboards</span>
                  </h1>
                  <p class="title_all_new_p">
                    We understand the importance of a well-designed and
                    functional website. That's why we offer a comprehensive
                    solution to help you build a website that not only looks
                    great but also drives results.
                  </p>
                  <div className="col-12 personalised_btn_div ">
                    <NavLink
                      className="BlueBtn text-center"
                      to="/Questionare_Page"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <img className="home_slider_img" alt="f" src={homehero2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 homepartners">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 text-center align-items-center ">
          <div className="partnerName col-sm-3 col-6">
            <img src={flooring} alt="f" />
          </div>
          <div className=" partnerName col-sm-3 col-6 ">
            <img src={gekkologo} alt="f" />
          </div>
          <div className="partnerName col-sm-3 col-6">
            <img src={tylerlogo} alt="f" />
          </div>
          <div className=" partnerName col-sm-3 col-6 ">
            <img src={velaqualogo} alt="f" />
          </div>
        </div>
      </div>
      <section
        className=" mt-lg-5 mt-4 online_presence_top_div"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 webview">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div>
                <h2 class="all_h1_title">
                  Have you settled for a website that no one is excited about?
                </h2>
                <p class="all_h1_title_p">
                  Having the appropriate blueprint is critical to success. By
                  designing and creating cutting-edge online and mobile
                  experiences with WordPress, Drupal and more, we’re paving the
                  way.
                </p>
              </div>
              <div className="website_page_p">
                <h3>Our pointed plan </h3>
                <p>
                  From strategy and planning through design and web development,
                  we offer comprehensive data transfer, broad API integrations,
                  scalability, performance, and long-term assistance and
                  maintenance.
                </p>
              </div>
              <div className="website_page_p">
                <h3>A complete visual ecosystem </h3>
                <p>
                  We specialize in the creation of responsive, customized themes
                  websites, and e-commerce stores that are search engine
                  optimized and function flawlessly. Our team is comprised of
                  talented web designers Australia and developers who are
                  experts in the latest technologies and techniques that keep
                  websites fast, secure, reliable and engaging.
                </p>
              </div>
              <div className="website_page_p">
                <h3>It’s All Under One Roof </h3>
                <p>
                  You’ll be amazed at the quick turnaround time for new
                  features, updates, plugins that are customized to suit your
                  needs. And once your site is up and running, you can rely on
                  our support team when questions come up.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_presence_img ">
              <img alt="online presence img" src={creatweb1} />
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-lg-5 mt-4">
        <div className="text-center">
          <h2 className="title_all_new">
            Our Approach to websites For the <br />
            <span>love of websites!</span>
          </h2>
        </div>
        <div className="row my-lg-5 my-2 justify-content-around">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sam-12 col-12 my-2">
            <div className="my-4 website_page_p_new">
              <span className="numpink">1</span>
            </div>
            <div className="website_page_p">
              <h3>Business Analysis </h3>
              <p>
                Let's sit down with your team, discuss your goals and target
                audience. Our team create a comprehensive proposal summarizing
                what we learned, review pricing and scope. Once agreed, we'll
                move forward with designing!
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sam-12 col-12 my-2">
            <div className="my-4 website_page_p_new">
              <span className="numpink">2</span>
            </div>
            <div className="website_page_p">
              <h3>Design Phase </h3>
              <p>
                Our team of designers will use the information already gathered
                to produce clean, eye-catching designs that express the ethos of
                your company in clear visual language. You will be offered more
                than one variant; choose the one you like best.
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sam-12 col-12 my-2">
            <div className="my-4 website_page_p_new">
              <span className="numpink">3</span>
            </div>
            <div className="website_page_p">
              <h3>Development Phase </h3>
              <p>
                Our team of talented web developers, develop your website on our
                server, while keeping you in the loop through a dashboard with
                live updates, as we create successive iterations for your
                testing and review.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="container mt-lg-5 mt-4">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_presence_img order-lg-1 order-2">
            <img
              className=" online_presence_img_inner"
              src={creatopti}
              alt="f"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
            <h2 className="title_all_new mb-3">
              Maximize your website's potential -
              <span> convert visitors to paying customers.</span>
            </h2>
            <p className="title_all_new_p mb-4">
              66% of visitors will leave the website within 10 seconds of
              entering if the design is not attractive. It has been found that
              customers judge a website's credibility by its layout, so if it
              isn't interactive, they will leave. You want them to?
            </p>
            <div className="row g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={palette} alt="f" />
                  <h3>User-Friendly</h3>
                  <p>
                    Our web design Australia services are built to grow with
                    you. Our full-stack developers, and designers work
                    seamlessly together to make sure your site is a success.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={stats} alt="f" />
                  <h3>ustomizable website themes</h3>
                  <p>
                    As your company grows and changes, your website should be
                    able to evolve along with it. Our custom website themes will
                    help you do just that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-lg-5 mt-4">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  order-lg-1 order-2">
            <h2 className="title_all_new mb-3">
              Responsive and Flawless
              <span> web design on any screen</span>
            </h2>
            <p className="title_all_new_p mb-4">
              Your brand is more than just a logo. With our responsive web
              design and redesign services, we create a site that looks great
              regardless of how it is viewed, whether on your computer,
              smartphone or tablet. We specialize in all major platforms so you
              can feel confident that your website will outperform any
              competitor.
            </p>
            <div className="row g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={aligncenter} alt="f" />
                  <h3>Consistent Visual Elements</h3>
                  <p>
                    Balance and emotion, simplicity and depth, light and shadow.
                    Our style guides ensure design consistency from top to
                    bottom, bringing together every visual aspect to create a
                    work of art that drives revenue.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={questioncheck} alt="f" />
                  <h3>Directing Users’ Attention </h3>
                  <p>
                    We design site-wide patterns that keep users engaged and
                    help them find what they’re looking for & focussing on small
                    details to help your site visitors have a better experience
                    and stay engaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_presence_img order-lg-2 order-1">
            <img
              className=" online_presence_img_inner"
              src={creatopti}
              alt="f"
            />
          </div>
        </div>
      </section>
      <section className="container mt-lg-5 mt-4">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_presence_img order-lg-1 order-2">
            <img
              className=" online_presence_img_inner"
              src={creatopti}
              alt="f"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
            <h2 className="title_all_new mb-3">
              Redesign Your Website with
              <span> Proven Results.</span>
            </h2>
            <p className="title_all_new_p mb-4">
              From the layout to the colors, to the coding and the maintenance,
              we redesigned for you that will help you grow your business.
            </p>
            <div className="row g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={lightbulb} alt="f" />
                  <h3>A Website That Grows With You </h3>
                  <p>
                    With more than 100 website designs implemented over 10
                    years, we predict and incorporate future needs into your web
                    redesign project. Our full-stack web development team, user
                    experience experts, and design team work seamlessly together
                    to ensure your site is a success.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Maximize_div">
                  <img src={desktop} alt="f" />
                  <h3>Customizable Website Themes</h3>
                  <p>
                    You deserve the ultimate website. Our custom website themes
                    for WooCommerce, Shopify, HubSpot, WordPress, and Drupal
                    allow you to edit, update, and expand your site as your
                    company grows and changes. It’s all part of our redesign
                    strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="online_store_top_div  mt-lg-5 mt-4 enterprise_growth_2"
        style={{ backgroundColor: "#FFD429F2" }}
      >
        <div className="crafting_trust_div">
          <h2>
            Our <span>Latest Projects</span>
          </h2>
        </div>
        <div className=" container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ">
              <h3 className="title_all_new">
                Crafting trust and <span>integrity</span>
              </h3>
              <p className="title_all_new_p">
                Level Headed Carpentry Is A Sydney-Based Company Carrying Out
                Works Across Sydney And Surrounding Areas. We provide 100%
                client satisfaction on every project undertaken, catering to all
                aspects of carpentry, ranging from residential to commercial
                works.
              </p>
              <div className="sec_div">
                <OutlineLinkBtn
                  title="View Project"
                  link="/design_inspiration"
                />
              </div>
              <div className="yello_img_div">
                <img src={latestproj1} alt="f" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_store_img_div">
              <img className="online_store_img" alt="demo" src={latestproj2} />
              <div className="yello_btn_div ">
                <NavLink className="BlueBtn" to="/case_study">
                  View Case Study
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact
        title="Get Started Today and Transform"
        title2="Your Online Presence!"
      />
    </>
  );
};
