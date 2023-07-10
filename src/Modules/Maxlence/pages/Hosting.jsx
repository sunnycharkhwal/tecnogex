import { NavLink } from "react-router-dom";
import Photo1 from "../../../img/h1.svg";
import { BlueBtn, BlueLinkBtn } from "../components/Btn";
import { BiSearch } from "react-icons/bi";
//
import WebsiteDesignIcon from "../../../img/WebsiteDesignIcon.svg";
import WebsiteReDesignIcon from "../../../img/WebsiteReDesignIcon.svg";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/ha.svg";
import Uptime from "../../../img/Uptime.svg";
import Ssl from "../../../img/SSL.svg";
import Php from "../../../img/php.svg";
import FreeMigrations from "../../../img/FreeMigrations.svg";
import Support from "../../../img/Support.svg";
import Custom from "../../../img/Custom.svg";
import Photo from "../../../img/h3.svg";
import Photo2 from "../../../img/h4.svg";
import Photo3 from "../../../img/h5.png";
import Photo4 from "../../../img/h6.png";
import { BsDot } from "react-icons/bs";
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
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Hosting",
    linkIcon: Hosting,
    link: "/hosting",
    activeNav: "block",
    linkNameColor: "black",
  },
];
export const HostingNew = () => {
  const MaintenanceProvide = [
    {
      title: "99.9% Uptime Guarantee",
      icon: Uptime,
      text: "The internet never sleeps, neither should your websites. With our 99.9% uptime guarantee, you know you can rely on us.",
    },
    {
      title: "Free AutoSSL",
      icon: Ssl,
      text: "Every website hosted on our infrastructure has access to a free Domain-Validated Comodo SSL certificate to securely connect to you and your clients’ pages, email and FTP.",
    },
    {
      title: "Adjustable PHP Settings",
      icon: Php,
      text: "Each customer is different, easily adjust PHP versions and extensions with a click of a few buttons. No more having to mess with a php.ini file, simply click, save and enjoy.",
    },
    {
      title: "Free Migrations",
      icon: FreeMigrations,
      text: "Moving hosting providers can be tedious, that’s why we do the heavy lifting so you don’t need to. Our local team of experts are here to ensure your transition is as smooth as possible.",
    },
    {
      title: "24/7 Local Support",
      icon: Support,
      text: "Our local team is here to assist you by live chat, ticket or phone 24 hours a day, 7 days a week. We don't sleep so you can!",
    },
    {
      title: "Custom Plans",
      icon: Custom,
      text: "Our thorough email campaign audit examines every aspect of your campaigns, identifying areas of improvement and providing actionable recommendations.",
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
      <section className="mb-5 mt-1 maintenance_hero_top">
        <div className=" container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_hero_titlt_div hosting_title_div">
                <h2>A Home for Your Website Hosting</h2>
                <p>Enter an URL address and get a Free Website Analysis!</p>
                <div className=" mt-3">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="maintenance_hero_img hosting_img_div"
                style={{ backgroundImage: `url(${Photo1})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>Enjoy the Best Website Hosting Benefits.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor enim laoreet
              volutpat rhoncus. Consectetur in vitae fermentum et nec lectus
              auctor congue. Arcu elit adipiscing in amet lacus mauris at
              lectus. Nisl consectetur enim tincidunt.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {MaintenanceProvide.map((val, i) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="hosting_benefits_div">
                <div className="hosting_benefits_title">
                  <p>{val.title}</p>
                  <img src={val.icon} alt="icon" />
                </div>
                <p className="hosting_benefits_text">{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="customers_top_div mb-5">
        <div className="container">
          <div className="Maintenance_Audit_div">
            <div className="Maintenance_Audit_div_inner">
              <span>Free SSL Checker</span>
              <h2>Find out if your site’s protecting your customers’ data.</h2>
              <div className="customers_top_search_div">
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
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="hosting_img_left" src={Photo2} alt="img" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hosting_img_left_title">
              <h3>
                Importance of <span>SSL Certification</span>
              </h3>
              <p>
                <BsDot /> Aliquet sit luctus nulla tortor quis amet
              </p>
              <p>
                <BsDot /> Morbi dolor tincidunt
              </p>
              <p>
                <BsDot /> Eget eget eget eget vel
              </p>
              <p>
                <BsDot /> Eget eget eget eget vel
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>One Click App Installation</h3>
            <p>
              Installing your favourite Web applications is just one click away.
              Using our cPanel hosting you can have access to over 250 available
              apps.
            </p>
          </div>
        </div>
        <div className=" text-center">
          <img className="Hosting_Satisfaction_img" src={Photo} alt="photo" />
        </div>
      </section>
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hosting_img_left_title">
              <h3>
                <span>Free Migration</span>
              </h3>
              <p>
                <BsDot /> Transfer your website using our free automatic website
                migration tool.
              </p>
              <p>
                <BsDot /> Our agents will guide you in every step of the way.
              </p>
              <p>
                <BsDot /> Your website will be transferred within 24 hours.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="hosting_img_left shadow" src={Photo3} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="hosting_img_left shadow" src={Photo4} alt="img" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hosting_img_left_title">
              <h3>
                Our Team is Here to Help You <span>24/7</span>
              </h3>
              <p>
                <BsDot /> Get help directly from the editor, thanks to our 24/7
                live chat support.
              </p>
              <p>
                <BsDot /> Troubleshoot by yourself with our video walkthroughs
                and guides..
              </p>
              <p>
                <BsDot /> Become a pro webmaster with our in-depth tutorials.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="customers_top_div mb-5"
        style={{ backgroundColor: "#515151" }}
      >
        <div className="container">
          <div className="Maintenance_Audit_div">
            <div className="Maintenance_Audit_div_inner">
              <h2 className=" text-white fs-2">
                "Powering Your Online Presence with Reliable Web Hosting
                Solutions
              </h2>
              <div>
                <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
