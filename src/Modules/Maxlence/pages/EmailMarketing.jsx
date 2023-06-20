import { NavLink } from "react-router-dom";
//
import GoogleAdsIcon from "../../../img/GoogleAdsIcon.svg";
import EmailMarketingIcon from "../../../img/ema.svg";
import VideoMarketingIcon from "../../../img/VideoMarketingIcon.svg";
import GMBIcon from "../../../img/GMBIcon.svg";
import SEOIcon from "../../../img/SEOIcon.svg";
import SocialMediaIcon from "../../../img/SocialMediaIcon.svg";
import CROIcon from "../../../img/CROIcon.svg";
import { BlueLinkBtn } from "../components/Btn";
import Photo1 from "../../../img/em1.svg";
import Photo2 from "../../../img/em3.png";
import Photo3 from "../../../img/em4.svg";
import Photo5 from "../../../img/em5.svg";
import Photo6 from "../../../img/em6.svg";
import Photo7 from "../../../img/em7.svg";
import Photo8 from "../../../img/cro4.svg";
//
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
//
const TopLinkData = [
  {
    linkName: "Google Ads",
    linkIcon: GoogleAdsIcon,
    link: "/google_ads",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "CRO",
    linkIcon: CROIcon,
    link: "/cro",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: SocialMediaIcon,
    link: "/social_media_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "SEO",
    linkIcon: SEOIcon,
    link: "/seo",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "GMB",
    linkIcon: GMBIcon,
    link: "/gmb",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Video Marketing",
    linkIcon: VideoMarketingIcon,
    link: "/video_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Email Marketing",
    linkIcon: EmailMarketingIcon,
    link: "/email_marketing",
    activeNav: "block",
    linkNameColor: "black",
  },
];
export const EmailMarketing = () => {
  const MaintenanceProvide = [
    {
      title: "Custom email designing ",
      text: "Our team create visually stunning and personalized email designs that leave a lasting impression on your audience, driving engagement and conversions. ",
    },
    {
      title: "dvanced email tracking ",
      text: "Our advanced email tracking tools provide in-depth insights into email performance, allowing you to optimize campaigns and achieve maximum results. ",
    },
    {
      title: "Data Integration & Migration ",
      text: "We seamlessly integrate and migrate your data, ensuring a smooth transition and enabling you to leverage valuable customer information for targeted campaigns ",
    },
    {
      title: "Full email campaign management ",
      text: "Sit back and relax as our experienced team takes care of your entire email campaign process, from planning and execution to monitoring and optimization.",
    },
    {
      title: "Email automation management ",
      text: "Our team optimizes your email automation workflows to deliver personalized and timely messages, automating customer journeys and driving conversions on autopilot. ",
    },
    {
      title: "Email campaign audit ",
      text: "Our thorough email campaign audit examines every aspect of your campaigns, identifying areas of improvement and providing actionable recommendations.",
    },
    {
      title: "Email service provider platform support ",
      text: "We offer expert support and guidance in leveraging the full potential of your email service provider platform, ensuring optimal performance and results. ",
    },
  ];
  const ResearchBoxData = [
    {
      title: "Research and Assessment",
      text: "Our team delivers insightful analysis to uncover competitor strategies, industry trends, and evaluate your email marketing performance.",
      bgColor: "#B7D9FF",
    },
    {
      title: "Privacy-focused Email List Building",
      text: "Building email lists from existing customers, prioritizing privacy protection and consent-based approaches.",
      bgColor: "#C8E2FF",
    },
    {
      title: "Campaign Calendar",
      text: "We meticulously create a comprehensive schedule, ensuring effective email campaigns and seamless flows.",
      bgColor: "#D9EBFF",
    },
    {
      title: "Flows & Campaigns",
      text: "We set up essential campaigns and automated flows to optimize your email marketing performance.",
      bgColor: "#E7F2FF",
    },
  ];
  const EmailMarketingSolutionsData = [
    {
      img: Photo3,
      title: "Integrated Email Marketing Solutions",
      text: "Our team combines the power of email marketing with PPC and social media to drive your business growth.",
    },
    {
      img: Photo5,
      title: "High-Quality Email List Building",
      text: "We create compelling lead magnets, enticing content, and exclusive offers to build a high-quality email list for your business.",
    },
    {
      img: Photo6,
      title: "Email Validation and Authentication",
      text: "Our team prioritize email validation, ensuring only authenticated email addresses are used to maximize deliverability and engagement.",
    },
    {
      img: Photo7,
      title: "Cutting-Edge Tools & Technologies",
      text: "Our email marketing services leverage advanced tools and technologies to deliver impactful campaigns and optimize results.",
    },
  ];
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
        <div className=" container">
          <div className="growth_top_div">
            {TopLinkData.map((val, i) => (
              <div key={i} className=" creation_and_growth_col_div">
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}
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
      <section className="mb-5 maintenance_hero_top">
        <div className=" container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="gmb_top_img"
                style={{ backgroundImage: `url(${Photo1})` }}
              ></div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_hero_titlt_div cro_img_title_div">
                <h1 className="all_h1_title">
                  Get Ahead of the Competition with Email Marketing.
                  <span> No Contest! </span>
                </h1>
                <p className="all_h1_title_p">
                  With our team, experience the power of high-impact email
                  campaigns that ignite conversations, cultivate customer
                  relationships, and deliver extraordinary results. Our
                  personalized approach and targeted messaging will empower your
                  brand to rise above the competition and reach new heights of
                  marketing success.
                </p>
                <div className=" mt-3">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>
              Our Powerful Email <span>Marketing Features</span>{" "}
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          {MaintenanceProvide.map((val, i) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div
                className="hosting_benefits_div"
                style={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                  height: "auto",
                }}
              >
                <div className="hosting_benefits_title">
                  <p>{val.title}</p>
                </div>
                <p className="hosting_benefits_text">{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" mb-5 container">
        <div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className=" email_marketing_res_div">
                <img src={Photo2} alt="img" />
                <div className="img_shadow"></div>
                <p>
                  Our <span>Email Marketing Strategy </span>
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
              <div className="row g-3">
                {ResearchBoxData.map((val, i) => (
                  <div
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    key={i}
                  >
                    <div
                      className="email_marketing_research_box_div"
                      style={{ backgroundColor: val.bgColor }}
                    >
                      <h3>{val.title}</h3>
                      <p>{val.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="customers_top_div mb-5"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="container">
          <div className="Maintenance_Audit_div">
            <div className="Maintenance_Audit_div_inner">
              <h2>What different we do for email marketing </h2>
            </div>
          </div>
          <div className="row g-3">
            {EmailMarketingSolutionsData.map((val, i) => (
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                key={i}
              >
                <div className="email_marketing_solutions_div">
                  <h3>
                    <img src={val.img} alt="icon" />
                    {val.title}
                  </h3>
                  <p>{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>Tools & Technologies Used in CRO</h3>
            <p>
              We take each work as unique and custom, keeping the process very
              personalized for the product. However, in most scenarios, our
              mobile app design process includes.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo8} alt="img" className="cro_icon_div_bottom" />
            </div>
          </div>
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
