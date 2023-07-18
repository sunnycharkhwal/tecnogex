import React, { useEffect, useState } from "react";
import homehero1 from "../../../img/homehero1.png";
import homehero2 from "../../../img/homehero2.png";
import homehero3 from "../../../img/homehero3.png";
import dashboardagency from "../../../img/indexLogoIcon7.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { PartnersList } from "../components/Partners";
import { BlueBtn, BlueLinkBtn, OutlineLinkBtn } from "../components/Btn";
import { Faqs } from "../components/Faqs";
import { ProductLists } from "../components/ProductLists";
import { Cta } from "../components/Cta";
import { MainSlider } from "../components/TestimonialComp";
import Tab from "react-bootstrap/Tab";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import ENDPOINT from "../config/ENDPOINT";
import TopSlider from "../../../img/homeTop1.png";
import TopSlider2 from "../../../img/home3.png";
import TopSlider3 from "../../../img/h3.png";
import TopSlider4 from "../../../img/h4.png";
import OwlCarousel from "react-owl-carousel2";
import LogoIndex1 from "../../../img/indexLogoIcon.svg";
import LogoIndex2 from "../../../img/indexLogoIcon2.svg";
import LogoIndex3 from "../../../img/indexLogoIcon3.svg";
import LogoIndex4 from "../../../img/indexLogoIcon4.svg";
import LogoIndex5 from "../../../img/indexLogoIcon5.svg";
import LogoIndex6 from "../../../img/indexLogoIcon6.svg";
import IndexM from "../../../img/indexM.svg";
import IndexUp from "../../../img/indexUp.svg";
import IndexNew from "../../../img/indexNew1.png";
import IndexNew2 from "../../../img/indexNew2.webp";
import IndexNew3 from "../../../img/indexNew3.webp";
import IndexNew4 from "../../../img/indexNew4.webp";
import IndexNew5 from "../../../img/indexNew5.webp";
import IndexNewVideo from "../../../img/indexVideo.mp4";
export const Shoptabs = (props) => {
  return (
    <Tab.Container
      className=""
      id="top-tabs-example"
      defaultActiveKey="first"
      unmountOnExit="true"
    >
      <Nav variant="" className="flex-row">
        <Nav.Item className="col-2 col-sm-2 col-md-auto">
          <Nav.Link eventKey="first">SEO</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-5 col-sm-4 col-md-auto">
          <Nav.Link eventKey="second">GOOGLE ADS</Nav.Link>
        </Nav.Item>
        <Nav.Item className=" col-9 col-sm-7 col-md-auto">
          <Nav.Link eventKey="third">SOCIAL MEDIA MARKETING</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-7 col-sm-5 col-md-auto">
          <Nav.Link eventKey="fourth">EMAIL MARKETING</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-7 col-sm-5 col-md-auto">
          <Nav.Link eventKey="fifth">VALUE PACKS</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content className={props.className}>
        <Tab.Pane eventKey="first">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={1} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={2} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={3} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={4} />
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
export const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  async function getPortfolio() {
    let res = await fetch(ENDPOINT + `portfolio`);
    const data = await res.json();
    setPortfolio(data);
  }

  useEffect(() => {
    getPortfolio();
  }, []);

  async function getTestimonial() {
    let res = await fetch(ENDPOINT + `testimonial`);
    const data = await res.json();
    setTestimonial(data);
  }

  useEffect(() => {
    getTestimonial();
  }, []);

  const TestimonialCard = (props) => {
    return (
      <div className="SlidercontentContainer">
        <div className="row justify-content-start g-1">
          <div className="col-3 testimg">
            <img
              width="100%"
              src={ENDPOINT + "uploads/" + props.pic}
              alt="demo"
            />
          </div>
          <div className="col-6 testname">
            <h5>{props.client_name}</h5>
          </div>
        </div>
        <div className="row justify-content-start g-3">
          <div className="col-12 testdescription">
            <small>{props.desc}</small>
          </div>
        </div>
        <div className="d-flex my-3 ratingstars justify-content-center g-1">
          {props.rating === "1" ? (
            <VscStarFull />
          ) : props.rating === "2" ? (
            <>
              <VscStarFull /> <VscStarHalf />
            </>
          ) : props.rating === "3" ? (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarHalf />
            </>
          ) : props.rating === "4" ? (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarFull /> <VscStarHalf />
            </>
          ) : (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarFull /> <VscStarFull />
              <VscStarHalf />
            </>
          )}
        </div>
      </div>
    );
  };
  const HomePageLinksData = [
    {
      linkName: "Website Design",
      pageLink: "/website/6",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "Website Re-Design",
      pageLink: "/website_redesign",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "Maintenance",
      pageLink: "/maintenance",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "Hosting",
      pageLink: "/hosting",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "Google Ads",
      pageLink: "/google_ads",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "CRO",
      pageLink: "/cro",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "social media marketing",
      pageLink: "/social_media_marketing",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "SEO",
      pageLink: "/seo",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "GMB",
      pageLink: "/gmb",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "video marketing",
      pageLink: "/video_marketing",
      price: "₹ 29.00/mo",
    },
    {
      linkName: "email marketing",
      pageLink: "/email_marketing",
      price: "₹ 29.00/mo",
    },
  ];
  const LogoPageLink = [
    {
      link: "/design",
      title: "logo",
      icon: LogoIndex1,
    },
    {
      link: "/design",
      title: "Business Essentials",
      icon: LogoIndex2,
    },
    {
      link: "/design",
      title: "Marketing Essentials",
      icon: LogoIndex3,
    },
    {
      link: "/design",
      title: "Social Media",
      icon: LogoIndex4,
    },
    {
      link: "/design",
      title: "Website Template",
      icon: LogoIndex5,
    },
    {
      link: "/design",
      title: "Landing Page",
      icon: LogoIndex6,
    },
  ];
  const GrowthPageLink = [
    {
      link: "/Seo_service",
      title: "SEO Enterprise",
    },
    {
      link: "/google_ads_service",
      title: "Google Ads Enterprise",
    },
    {
      link: "/social_media_service",
      title: "Social Media Enterprise",
    },
    {
      link: "/saas",
      title: "SaaS Application Creation",
    },
    {
      link: "/mobile_app",
      title: "Mobile Application Creation",
    },
  ];
  return (
    <>
      <div className=" container my-lg-5 my-4">
        <div className="pb-3">
          <HomeSlider />
          <div className="mt-lg-5 mt-4">
            <div className="row g-1">
              {HomePageLinksData.map((val, i) => (
                <div
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
                  key={i}
                >
                  <NavLink to={val.pageLink} className="home_page_links">
                    {val.linkName}
                    <p>{val.price}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-lg-5 mt-4">
          <HomeSlider2 />
        </div>
      </div>
      <section className=" mt-lg-5 mt-4 online_presence_top_div">
        <div className="container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 webview">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_presence_img ">
              <img alt="online presence img" src={IndexNew} />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className="title_all_new">
                Build your own <span>online presence and grow </span>your
                business.
              </h2>

              <p className="title_all_new_p mb-3">
                Want to watch your business thrive with our expert’s digital
                marketing strategies?
              </p>

              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="online_presence_card_div">
                    <h3>Google Ads</h3>
                    <p>
                      Are you tired of feeling lost in the sea of online
                      competition? Do you want to make a splash and reach your
                      audience in a powerful way? Look no further than our
                      Google paid ads services, my friend. We don't just run ads
                      in isolation-
                      <NavLink to="/google_ads">Read more</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="online_presence_card_div">
                    <h3>SEO</h3>
                    <p>
                      Are you tired of watching your ideal customers slip
                      through the cracks and into the arms of your competitors?
                      Let us help you take control of your online presence with
                      our powerful SEO services. As a full-service agency-
                      <NavLink to="/seo"> Read more</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="online_presence_card_div">
                    <h3>Social Media Marketing</h3>
                    <p>
                      Are you struggling to cut through the noise on social
                      media platforms like Facebook, Instagram, and Google? Do
                      you feel like your social media presence is mediocre at
                      best? Let us help you achieve social media success today-
                      <NavLink to="/social_media_marketing"> Read more</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="online_presence_card_div">
                    <h3>email marketing</h3>
                    <p>
                      With our team, experience the power of high-impact email
                      campaigns that ignite conversations, cultivate customer
                      relationships, and deliver extraordinary results. Our
                      personalized approach and targeted messaging-
                      <NavLink to="/email_marketing"> Read more</NavLink>
                    </p>
                  </div>
                </div>
                <div className="col-12 sec_div">
                  <OutlineLinkBtn title="Get Started" link="/growth" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container mt-lg-5 mt-4">
        <HomeSlide3 />
      </section>
      <section className=" container mt-lg-5 mt-4">
        <div className=" text-center mb-4">
          <h2 className="title_all_new ">
            What can we design for you <span>today?</span>
          </h2>
        </div>
        <div className="logo_div_index row g-3">
          {LogoPageLink.map((val, i) => (
            <div
              key={i}
              className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12"
            >
              <NavLink className="logo_div_index" to={val.link}>
                <img src={val.icon} alt="logo" /> {val.title}
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      <section className="online_store_top_div">
        <div className=" container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_store_img_div">
              <img className="online_store_img" alt="demo" src={IndexNew5} />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ">
              <h2 className="title_all_new">
                All you need to power your <span>online store</span>
              </h2>
              <p className="title_all_new_p">
                If you're looking to drive more sales and attract more online
                traffic to your online store, turn to our platform for
                professional e-commerce web design services. Designing ecommerce
                websites that stand out
              </p>
              <div className="sec_div">
                <OutlineLinkBtn title="Get Started" link="/shop" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-lg-5 mt-4 home_tabs">
        <div className="text-center">
          <h2 className="title_all_new">
            Your one-stop shop with unbeatable <br /> <span> offer today</span>
          </h2>
        </div>
        <div className="shoptabs">
          <Shoptabs className="productscrollcontainer my-2" />
        </div>
        <div className=" text-center mt-5">
          <NavLink className="BlueBtn" to="/shop">
            View More
          </NavLink>
        </div>
      </section>
      <section className="mt-lg-5 mt-4 online_presence_top_div enterprise_growth">
        <div className=" container">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ">
              <h2 className="title_all_new">
                We differentiate between local and
                <span> enterprise growth!</span>
              </h2>
              <p className="title_all_new_p">
                Are you an enterprise business eager to make your mark in the
                market and capture the attention of a wider audience? Look no
                further! Scaling your marketing programs and reaching larger
                audiences requires a tailored approach that takes into account
                your social selling tactics, content strategy, lead scoring
                processes, and overall organizational readiness.
              </p>
              <p className="title_all_new_p">
                With our expertise and passion for marketing, we can help you
                achieve your goals and exceed your expectations. So, let's dive
                in and create a marketing plan that sets you apart from the
                competition!
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_store_img_div">
              <img className="online_store_img" alt="demo" src={IndexM} />
            </div>
          </div>
          <div className="logo_div_index row g-3 mt-3">
            {GrowthPageLink.map((val, i) => (
              <div
                key={i}
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12"
              >
                <NavLink
                  className="logo_div_index logo_div_index2"
                  to={val.link}
                >
                  {val.title}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="enterprise_growth_btn">
            <BlueBtn link="/creation" title="Get Started" />
          </div>
        </div>
      </section>
      <section className="mt-lg-5 mt-4 container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div enterprise_growth">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_store_img_div order-lg-1 order-2">
            <img
              className="online_store_img"
              alt="demo"
              src={dashboardagency}
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  order-lg-2 order-1">
            <h2 className="title_all_new">
              Turn your business data into meaningful
              <span> insights with dashboards!</span>
            </h2>
            <p className="title_all_new_p">
              Analyze your data, turn it into insightful reports with our
              personalized client dashboards. Discover hidden insights, track
              key business metrics, identify outliers and predict the future -
              all within minutes of connecting your data sources to the
              dashboard.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-lg-5 mt-4 container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div enterprise_growth">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ">
            <h2 className="title_all_new">
              Our success
              <span> story</span>
            </h2>
            <p className="title_all_new_p">
              BEPE Plumbing and Electrical Services was able to achieve its
              goals of increasing phone calls, improving cost-effectiveness,
              expanding its reach, and building a strong online presence through
              a strategic approach to Google Ads. By conducting thorough keyword
              research and developing a bidding strategy that prioritized
              high-performing keywords and ad groups, the company was able to
              increase the number of phone calls generated by 50% and reduce the
              cost per click by 20%. Additionally, the implementation of call
              tracking allowed for continuous monitoring and optimization of
              campaign performance.
            </p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 online_store_img_div">
            <video
              loop
              autoPlay
              muted
              width="100%"
              src={IndexNewVideo}
              className=""
              alt="dasboard agency"
              type="video/mp4"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <hr />
            <div className="row g-3 video_up_col_row_div">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 video_up_col_div">
                <div className="video_up_div">
                  <div className="video_up_inner_div">
                    +50% <img src={IndexUp} alt="indexUp" />
                  </div>
                  <p>Phone Calls</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 video_up_col_div">
                <div className="video_up_div">
                  <div className="video_up_inner_div">
                    -20% <img src={IndexUp} alt="indexUp" />
                  </div>
                  <p>CPC Reduction</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 video_up_col_div">
                <div className="video_up_div">
                  <div className="video_up_inner_div">
                    +15% <img src={IndexUp} alt="indexUp" />
                  </div>
                  <p>Conversion Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 video_up_col_btn_div">
            <div>
              <OutlineLinkBtn
                icon={<AiOutlineArrowRight />}
                title="View Case Study"
                link="/casestudies"
              />
            </div>
          </div>
        </div>
      </section>
      <MainSlider
        data={testimonial}
        SliderCard={TestimonialCard}
        SliderTitle="Words from people"
      />

      <section className="mt-lg-5 mt-4 container">
        <div className=" text-center">
          <h2 className="title_all_new">
            Our <span>Partners</span>
          </h2>
        </div>
        <div className="row align-items-center justify-content-center mt-3 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
          <PartnersList />
        </div>
      </section>
      <Cta
        bgcolor="greengradient"
        ctasubheading="Be a Part of Our Next Success Story!"
        ctaheading="Start Your Journey Now."
        btntype="out_line_btn"
        btntext="Get In Touch"
      >
        <div className="mt-3 ctc_btn">
          <OutlineLinkBtn title="Get Started" link="/getintouch" />
        </div>
      </Cta>
      <Faqs catId={1} />
    </>
  );
};
const HomeSlider = () => {
  const options = {
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    autoplay: true,
    smartSpeed: 600,
  };
  const HomeSliderData = [
    {
      Img1: "https://picsum.photos/512/512?grayscale",
      Img1Link: "/google_ads",
      Img2: TopSlider3,
      Img2Link: "/seo",
      Img2Mobile: TopSlider,
    },
    {
      Img1: "https://picsum.photos/seed/picsum/512/512",
      Img1Link: "/google_ads",
      Img2: TopSlider3,
      Img2Link: "/seo",
      Img2Mobile: TopSlider,
    },
    {
      Img1: "https://picsum.photos/512/512",
      Img1Link: "/google_ads",
      Img2: TopSlider3,
      Img2Link: "/seo",
      Img2Mobile: TopSlider,
    },
    {
      Img1: TopSlider,
      Img1Link: "/google_ads",
      Img2: TopSlider2,
      Img2Link: "/seo",
      Img2Mobile: TopSlider4,
    },
    {
      Img1: TopSlider4,
      Img1Link: "/google_ads",
      Img2: TopSlider3,
      Img2Link: "/seo",
      Img2Mobile: TopSlider,
    },
  ];
  return (
    <>
      <OwlCarousel options={options}>
        {HomeSliderData.map((val, i) => (
          <div key={i}>
            <div className="row g-3">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7 col-sm-12 col-12">
                <NavLink to={val.Img1Link}>
                  <img className="home_slider_img1" src={val.Img1} alt="img" />
                </NavLink>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12">
                <NavLink
                  to={val.Img2Link}
                  className=" d-none d-xxl-block d-xl-block d-lg-block d-md-block"
                >
                  <img className="home_slider_img2" src={val.Img2} alt="img" />
                </NavLink>
                <NavLink
                  to={val.Img2Link}
                  className=" d-block d-xxl-none d-xl-none d-lg-none d-md-none"
                >
                  <img
                    className="home_slider_img2"
                    src={val.Img2Mobile}
                    alt="img"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

const HomeSlider2 = () => {
  const options = {
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    nav: false,
    margin: 10,
    autoplay: true,
    smartSpeed: 600,
  };
  const HomeSliderData = [
    {
      title: "We’re touching new heights with",
      titleBlue: "Websites",
      HomeSlidertextData: [
        {
          text1: "We are committed to making your",
          text2: "website development",
          text3:
            "and design a roaring success. With our comprehensive all-in-one package, we provide you with a customized dashboard to track your website analytics. And we don't just deliver quality - wbuild custom solutions in just 7 days, so you can start seeing results in no time. Choose us, and let us help you take your website to the next level.",
        },
      ],
      img: homehero1,
      link: "/website/6",
    },
    {
      title: "We’re touching new heights with",
      titleBlue: " Mobile Apps",
      HomeSlidertextData: [
        {
          text1: "Get ready to supercharge your business with custom",
          text2: "mobile app development",
          text3:
            "and design! No guesswork; no wondering if your page is performing well. Take help from our team of skilled developers and designers to create a stunning app. Plus a customised dashboard to track analytics. Don't miss out on this opportunity to engage your customers like never before; contact us today to get started!",
        },
      ],
      img: homehero2,
      link: "/mobile_app",
    },
    {
      title: "We’re touching new heights with",
      titleBlue: " Saas Apps ",
      HomeSlidertextData: [
        {
          text1:
            "Get software that fits your business like a glove. Our customizable",
          text2: "SaaS applications",
          text3:
            " are tailor-made to meet your unique needs, with personalised dashboards and features designed to streamline your workflows and boost productivity. Don't settle for generic software; choose the power of our tailored SaaS solutions and take your business to new heights.",
        },
      ],
      img: homehero3,
      link: "/saas",
    },
  ];
  return (
    <>
      <OwlCarousel options={options}>
        {HomeSliderData.map((val, i) => (
          <div key={i}>
            <div className="row g-4">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home_slider_text_title order-lg-1 order-2">
                <div>
                  <h1 className="title_all_new">
                    {val.title}
                    <span> {val.titleBlue}</span>
                  </h1>
                  {val.HomeSlidertextData.map((val, i) => (
                    <p className="title_all_new_p" key={i}>
                      {val.text1}
                      <span> {val.text2} </span>
                      {val.text3}
                    </p>
                  ))}
                  <div className="home_slider_btn_div">
                    <BlueLinkBtn link={val.link} title="Get Started" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div>
                  <img className="home_slider_img" alt="demo" src={val.img} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};
const HomeSlide3 = () => {
  const options = {
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 600,
  };
  const HomeSliderData = [
    {
      img: IndexNew2,
      link: "/design",
      title: "Design your own personalised,",
      blueTitle: "Logos",
      text: "Are you seeking a powerful and effective solution to build a unique brand identity that sets your business apart? Our customizable logo design services are the perfect solution. When you open an account with us, we'll walk you through the easy process of creating your design package, including any fonts and colors using our proprietary logo builder.",
    },
    {
      img: IndexNew3,
      link: "/design",
      title: "Design your own personalised,",
      blueTitle: "Social media posts",
      text: "Our highly customizable social media layouts and graphics are the perfect way to showcase your business, brand or product. Take advantage of our free access to thousands of templates, designs and images that can be used for Facebook, Twitter and Pinterest. Completely customize the look of your social media by adding your own photos and content, or simply use pre-made images from our library.",
    },
    {
      img: IndexNew4,
      link: "/design",
      title: "Design your own personalised,",
      blueTitle: "Menus, brochures, and more",
      text: "Make a memorable impression with menus, brochures, and more that showcase your brand’s style, from the paper quality to the layout. Add your own design, photos, and text to create professional print materials in minutes—all with free templates.",
    },
  ];
  return (
    <>
      <OwlCarousel options={options}>
        {HomeSliderData.map((val, i) => (
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 personalised_text_div">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2 ">
              <h2 className="title_all_new">
                {val.title} <span>{val.blueTitle}</span>
              </h2>
              <p className="title_all_new_p">{val.text}</p>
              <div className="col-12 personalised_btn_div">
                <BlueBtn link={val.link} title="Explore Now" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <img className="personalised_img" alt="demo" src={val.img} />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};
