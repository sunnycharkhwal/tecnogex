import { NavLink } from "react-router-dom";
import Discover from "../assests/discover.png";
//
import WebsiteDesignIcon from "../../../img/WebsiteDesignIcon.svg";
import WebsiteReDesignIcon from "../../../img/WebsiteReDesignIcon.svg";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/Hosting.svg";

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
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Creation = () => {
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
      <section className="container my-lg-5 my-4">
        <div className="row justify-content-center">
          <div className="col-md-5 py-5 mt-n4 ">
            <img className="w-100" src={Discover} alt="c" />
          </div>
        </div>
      </section>
      <section className="container mt-lg-5 mt-4">
        <div className="row g-lg-4 g-3">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="creation_points_title_div">
              <h2>Discover</h2>
              <ul>
                <li>User Research</li>
                <li>Market Analysis</li>
                <li>Competitor Analysis</li>
                <li>User Needs Assessment</li>
                <li>Trend Analysis</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="creation_points_title_div">
              <h2>Define</h2>
              <ul>
                <li>Problem Identification</li>
                <li>Goal Setting</li>
                <li>Requirement Gathering</li>
                <li>User Personas Creation</li>
                <li>Scope Definition</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="creation_points_title_div">
              <h2>Design</h2>
              <ul>
                <li>Wireframing</li>
                <li>User Interface Design</li>
                <li>Visual Design</li>
                <li>Prototyping</li>
                <li>Usability Testing</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="creation_points_title_div">
              <h2>Development</h2>
              <ul>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>Database Design and Implementation</li>
                <li>Functionality Implementation</li>
                <li>Quality Assurance and Testing</li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="creation_btn_div">
              <NavLink to="/" className="whitebgbtn fontrale">
                View Case Study &#10230;
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
