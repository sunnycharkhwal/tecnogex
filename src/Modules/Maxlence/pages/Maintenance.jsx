import { NavLink } from "react-router-dom";
import WebsiteDesignIcon from "../../../img/WebsiteDesignIcon.svg";
import WebsiteReDesignIcon from "../../../img/WebsiteReDesignIcon.svg";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/Hosting.svg";
import { BlueBtn, BlueLinkBtn } from "../components/Btn";
import { BiSearch } from "react-icons/bi";
import Photo1 from "../../../img/m2.svg";
import Photo2 from "../../../img/m1.svg";
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
//
const TopLinkData = [
  {
    linkName: "Website Design",
    linkIcon: WebsiteDesignIcon,
    link: "/website/6",
    activeNav: "none",
    linkNameColor: "",
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
    activeNav: "block",
    linkNameColor: "black",
  },
  {
    linkName: "Hosting",
    linkIcon: Hosting,
    link: "/hosting",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Maintenance = () => {
  const MaintenancePointsData = [
    {
      backgroundColor: "#FF9393",
      title: "Scan for Vulnerabilities",
    },
    {
      backgroundColor: "#FFE193",
      title: "Repairs & Fixes",
    },
    {
      backgroundColor: "#FFE193",
      title: "Browser Compatibilty Testing",
    },
  ];
  const ProviderData = [
    {
      number: "1",
      text: "Technical optimisation",
    },
    {
      number: "2",
      text: "Content alterations, additions and planning",
    },
    {
      number: "3",
      text: "Site Structure optimisation",
    },
    {
      number: "4",
      text: "Plugins",
    },
    {
      number: "5",
      text: "Themes and templates",
    },
    {
      number: "6",
      text: "WordPress updates",
    },
  ];
  const MaintenanceDevelopment = [
    {
      title: "Security",
      text: "Regular maintenance protects your website from hacking and data breaches.",
    },
    {
      title: "Performance",
      text: "Maintenance enhances website speed and fixes errors for a better user experience.",
    },
    {
      title: "User Experience",
      text: "Well-maintained websites provide a seamless and engaging browsing experience.",
    },
    {
      title: "SEO",
      text: "Maintenance helps improve search engine rankings and drives organic traffic to your site.",
    },
  ];
  return (
    <>
      <div className="creation_and_growth_top_div">
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
      <section className="container my-5">
        <div className="Maintenance_Audit_div">
          <div className="Maintenance_Audit_div_inner">
            <h1>Lorem ipsum dolor sit</h1>
            <p>Enter an URL address and get a Free Website Analysis!</p>
            <div className="Maintenance_Audit_search_div">
              <div className="Maintenance_Audit_search_div_inner">
                <input
                  type="text"
                  className="form-control"
                  placeholder="example.com"
                />
                <BiSearch />
              </div>
              <BlueBtn title="Audit" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 maintenance_hero_top">
        <div className=" container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_hero_titlt_div">
                <h2>Our Website Maintenance Includes</h2>
                <div className=" mt-4 mb-5">
                  {MaintenancePointsData.map((val, i) => (
                    <div key={i} className="maintenance_hero_titlt_points">
                      <p style={{ backgroundColor: val.backgroundColor }}>
                        {val.title}
                      </p>
                      <div></div>
                    </div>
                  ))}
                </div>
                <div className=" mt-3">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="maintenance_hero_img"
                style={{ backgroundImage: `url(${Photo1})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>
              We provide ad-hoc and retained support and maintenance for
              websites
            </h3>
            <p>
              No matter how tight our product cycles are, we never jump straight
              into Sketch too early. We invest time in bringing order to your
              requirements and understanding what we're about to design. This
              results in a simple and coherent product experience.
            </p>
          </div>
        </div>
        <div className="row g-md-5 g-3">
          {ProviderData.map((val, i) => (
            <div
              key={i}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
            >
              <div className="maintenance_provide_data_div">
                <h4>{val.number}</h4>
                <p>{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="maintenance_development_top mb-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_development_title">
                <h3>Why Website Maintenance Is Necessary After Development</h3>
                <p>
                  Websites require ongoing maintenance, especially for custom
                  web development. Ignoring maintenance leads to outdated code,
                  software, and content, resulting in slow loading times, broken
                  links, and a poor user experience. Regular maintenance keeps
                  your site up-to-date, secure, and ensures a smooth user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row g-4">
                {MaintenanceDevelopment.map((val, i) => (
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="maintenance_development_data_div">
                      <h4>{val.title}</h4>
                      <p>{val.text}</p>
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <div className=" mt-3 ">
                    <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>100% Satisfaction Oriented</h3>
            <p>
              Having decades of experience, we have developed processes and
              systems from onboarding to satisfaction.
            </p>
          </div>
        </div>
        <div className=" text-center">
          <img
            className="maintenance_Satisfaction_img"
            src={Photo2}
            alt="photo"
          />
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
